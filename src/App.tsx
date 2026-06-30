import {
  ArrowUpRight,
  BadgeCheck,
  Download,
  Eye,
  FileArchive,
  FileCode2,
  FolderInput,
  Github,
  HardDriveUpload,
  LayoutGrid,
  MonitorPlay,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import JSZip from "jszip";
import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from "react";
import { BUILTIN_DEMOS } from "./demoManifest";
import type { Demo, DemoAccent, DemoFileMeta, DemoKind, LocalDemoMeta } from "./types";

const LOCAL_DEMOS_KEY = "ai-demo-showcase.local-demos.v1";
const PREVIEW_CACHE_NAME = "ai-demo-showcase-preview-v1";
const HTML_EXTENSIONS = /\.(html?|xhtml)$/i;
const FOLDER_HTML_LIMIT = 1;

const ACCENTS: DemoAccent[] = ["coral", "gold", "teal", "violet", "lime"];

const MIME_BY_EXTENSION: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".xhtml": "application/xhtml+xml; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".wasm": "application/wasm",
};

type ServiceWorkerState = "checking" | "ready" | "unsupported" | "error";

interface PreparedFile {
  file: File;
  path: string;
}

interface UploadResult {
  demo: Demo;
  meta: LocalDemoMeta;
}

function normalizePath(path: string) {
  return path.replace(/\\/g, "/").replace(/^\/+/, "").replace(/\/+/g, "/");
}

function stripSharedRoot(files: File[]) {
  const paths = files.map((file) => normalizePath(file.webkitRelativePath || file.name));
  const firstSegments = paths.map((path) => path.split("/")[0]).filter(Boolean);
  const shouldStrip =
    firstSegments.length > 0 && firstSegments.every((segment) => segment === firstSegments[0]);

  return files.map<PreparedFile>((file, index) => {
    const rawPath = paths[index];
    const path = shouldStrip ? rawPath.split("/").slice(1).join("/") : rawPath;
    return { file, path: normalizePath(path || file.name) };
  });
}

function previewUrlFor(id: string, path: string) {
  const encodedPath = normalizePath(path)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  const base = import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL;

  return new URL(`${base}preview/${encodeURIComponent(id)}/${encodedPath}`, window.location.href)
    .toString();
}

function contentTypeFor(file: File, path: string) {
  if (file.type) {
    return file.type;
  }

  const dot = path.lastIndexOf(".");
  const extension = dot >= 0 ? path.slice(dot).toLowerCase() : "";
  return MIME_BY_EXTENSION[extension] || "application/octet-stream";
}

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unitIndex]}`;
}

function readLocalMetas(): LocalDemoMeta[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_DEMOS_KEY);
    return raw ? (JSON.parse(raw) as LocalDemoMeta[]) : [];
  } catch {
    return [];
  }
}

function writeLocalMetas(metas: LocalDemoMeta[]) {
  window.localStorage.setItem(LOCAL_DEMOS_KEY, JSON.stringify(metas));
}

function localMetaToDemo(meta: LocalDemoMeta): Demo {
  return {
    id: meta.id,
    title: meta.title,
    summary: meta.summary,
    description:
      meta.kind === "folder"
        ? "来自本机上传的文件夹 Demo。它保存在当前浏览器里，可预览、导出或移除。"
        : "来自本机上传的单文件 HTML Demo。它保存在当前浏览器里，可预览、导出或移除。",
    tags: meta.tags,
    origin: "local",
    kind: meta.kind,
    entryUrl: previewUrlFor(meta.id, meta.entryPath),
    sourceLabel: "本机上传",
    fileCount: meta.files.length,
    totalBytes: meta.totalBytes,
    accent: meta.accent,
    addedAt: meta.addedAt,
    files: meta.files,
    entryPath: meta.entryPath,
  };
}

function titleFromHtml(html: string, fallback: string) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = match?.[1]?.replace(/\s+/g, " ").trim();

  if (!title) {
    return fallback.replace(/\.(html?|xhtml)$/i, "");
  }

  const textarea = document.createElement("textarea");
  textarea.innerHTML = title;
  return textarea.value;
}

function baseName(path: string) {
  return normalizePath(path).split("/").filter(Boolean).pop() || path;
}

function describeDemo(kind: DemoKind, files: DemoFileMeta[]) {
  if (kind === "single-html") {
    return "单文件 HTML，适合快速投放到作品集或社媒链接。";
  }

  const codeFiles = files.filter((file) => /\.(js|mjs|css|json)$/i.test(file.path)).length;
  return `文件夹 Demo，包含 ${files.length} 个文件，其中 ${codeFiles} 个代码/样式资源。`;
}

async function registerPreviewWorker(): Promise<ServiceWorkerState> {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return "unsupported";
  }

  try {
    const base = import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL;
    const registration = await navigator.serviceWorker.register(`${base}demo-sw.js`);
    await navigator.serviceWorker.ready;

    if (!navigator.serviceWorker.controller) {
      await new Promise<void>((resolve) => {
        const timeout = window.setTimeout(resolve, 2500);
        navigator.serviceWorker.addEventListener(
          "controllerchange",
          () => {
            window.clearTimeout(timeout);
            resolve();
          },
          { once: true },
        );
        registration.active?.postMessage({ type: "CLAIM_CLIENTS" });
      });
    }

    if (!navigator.serviceWorker.controller) {
      return "error";
    }

    return "ready";
  } catch (error) {
    console.error(error);
    return "error";
  }
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags" aria-label="Demo 标签">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function IconButton({
  children,
  label,
  onClick,
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`icon-button ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}

function ActionButton({
  children,
  icon,
  onClick,
  disabled,
  variant = "default",
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "primary" | "danger";
}) {
  return (
    <button
      className={`action-button ${variant}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

function DemoCard({
  demo,
  selected,
  onSelect,
}: {
  demo: Demo;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`demo-card accent-${demo.accent} ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="demo-card__glance" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="demo-card__meta">
        <span>{demo.sourceLabel}</span>
        <span>{demo.kind === "folder" ? "Folder" : "HTML"}</span>
      </span>
      <span className="demo-card__title">{demo.title}</span>
      <span className="demo-card__summary">{demo.summary}</span>
      <span className="demo-card__footer">
        <span>{demo.fileCount} 文件</span>
        <span>{formatBytes(demo.totalBytes)}</span>
      </span>
    </button>
  );
}

function WorkerStatus({ state }: { state: ServiceWorkerState }) {
  const message = {
    checking: "正在准备上传预览环境",
    ready: "上传预览已就绪",
    unsupported: "当前打开方式不支持文件夹预览",
    error: "上传预览初始化失败",
  }[state];

  return (
    <span className={`worker-status ${state}`}>
      <ShieldCheck size={16} />
      {message}
    </span>
  );
}

export default function App() {
  const [localMetas, setLocalMetas] = useState<LocalDemoMeta[]>(() => readLocalMetas());
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("全部");
  const [selectedId, setSelectedId] = useState(BUILTIN_DEMOS[0]?.id || "");
  const [workerState, setWorkerState] = useState<ServiceWorkerState>("checking");
  const [uploadMessage, setUploadMessage] = useState("支持完整 HTML 或包含唯一入口 HTML 的文件夹。");
  const [isDragging, setIsDragging] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [frameVersion, setFrameVersion] = useState(0);
  const singleInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerPreviewWorker().then(setWorkerState);
  }, []);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, []);

  useEffect(() => {
    folderInputRef.current?.setAttribute("webkitdirectory", "");
    folderInputRef.current?.setAttribute("directory", "");
  }, []);

  const localDemos = useMemo(() => localMetas.map(localMetaToDemo), [localMetas]);
  const demos = useMemo(() => [...BUILTIN_DEMOS, ...localDemos], [localDemos]);

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();
    demos.forEach((demo) => demo.tags.forEach((tag) => uniqueTags.add(tag)));
    return ["全部", ...Array.from(uniqueTags)];
  }, [demos]);

  const filteredDemos = useMemo(() => {
    const text = query.trim().toLowerCase();

    return demos.filter((demo) => {
      const matchesTag = activeTag === "全部" || demo.tags.includes(activeTag);
      const matchesText =
        !text ||
        [demo.title, demo.summary, demo.description, ...demo.tags]
          .join(" ")
          .toLowerCase()
          .includes(text);

      return matchesTag && matchesText;
    });
  }, [activeTag, demos, query]);

  const selectedDemo = useMemo(() => {
    return demos.find((demo) => demo.id === selectedId) || filteredDemos[0] || demos[0];
  }, [demos, filteredDemos, selectedId]);

  useEffect(() => {
    if (selectedDemo && selectedDemo.id !== selectedId) {
      setSelectedId(selectedDemo.id);
    }
  }, [selectedDemo, selectedId]);

  function persistLocalMetas(nextMetas: LocalDemoMeta[]) {
    setLocalMetas(nextMetas);
    writeLocalMetas(nextMetas);
  }

  async function cacheUploadedFiles(id: string, files: PreparedFile[]) {
    const cache = await caches.open(PREVIEW_CACHE_NAME);

    await Promise.all(
      files.map(({ file, path }) =>
        cache.put(
          new Request(previewUrlFor(id, path)),
          new Response(file, {
            headers: {
              "content-type": contentTypeFor(file, path),
              "cache-control": "no-store",
            },
          }),
        ),
      ),
    );
  }

  async function ingestFiles(files: File[], requestedKind: DemoKind): Promise<UploadResult> {
    if (workerState !== "ready") {
      throw new Error("上传预览环境还没准备好，请稍等几秒后再试。");
    }

    if (!files.length) {
      throw new Error("没有读取到文件。");
    }

    const preparedFiles =
      requestedKind === "single-html"
        ? [{ file: files[0], path: normalizePath(files[0].name) }]
        : stripSharedRoot(files).filter((item) => item.path && !item.path.endsWith("/"));

    const htmlFiles = preparedFiles.filter((item) => HTML_EXTENSIONS.test(item.path));

    if (requestedKind === "single-html") {
      if (preparedFiles.length !== 1 || htmlFiles.length !== 1) {
        throw new Error("单文件上传只接受一个 .html / .htm / .xhtml 文件。");
      }
    } else if (htmlFiles.length !== FOLDER_HTML_LIMIT) {
      throw new Error(`文件夹内必须有且只有一个入口 HTML，目前检测到 ${htmlFiles.length} 个。`);
    }

    const entry = htmlFiles[0];
    const entryText = await entry.file.text();
    const id = `local-${Date.now().toString(36)}-${crypto.randomUUID().slice(0, 8)}`;
    const fileMetas = preparedFiles.map<DemoFileMeta>(({ file, path }) => ({
      path,
      size: file.size,
      type: contentTypeFor(file, path),
    }));
    const totalBytes = fileMetas.reduce((sum, file) => sum + file.size, 0);
    const accent = ACCENTS[(localMetas.length + BUILTIN_DEMOS.length) % ACCENTS.length];
    const title = titleFromHtml(entryText, baseName(entry.path));
    const meta: LocalDemoMeta = {
      id,
      title,
      summary: describeDemo(requestedKind, fileMetas),
      tags: requestedKind === "folder" ? ["本机上传", "文件夹 Demo"] : ["本机上传", "单 HTML"],
      kind: requestedKind,
      entryPath: entry.path,
      addedAt: new Date().toISOString(),
      files: fileMetas,
      totalBytes,
      accent,
    };

    await cacheUploadedFiles(id, preparedFiles);

    return {
      meta,
      demo: localMetaToDemo(meta),
    };
  }

  async function handleFiles(files: File[], kind: DemoKind) {
    setIsBusy(true);
    setUploadMessage("正在校验并写入本地预览缓存...");

    try {
      const result = await ingestFiles(files, kind);
      const nextMetas = [...localMetas, result.meta];
      persistLocalMetas(nextMetas);
      setSelectedId(result.demo.id);
      setFrameVersion((version) => version + 1);
      setUploadMessage(`已加入：${result.demo.title}，${result.demo.fileCount} 个文件。`);
    } catch (error) {
      setUploadMessage(error instanceof Error ? error.message : "上传失败。");
    } finally {
      setIsBusy(false);
      if (singleInputRef.current) {
        singleInputRef.current.value = "";
      }
      if (folderInputRef.current) {
        folderInputRef.current.value = "";
      }
    }
  }

  function onSingleFileChange(event: ChangeEvent<HTMLInputElement>) {
    handleFiles(Array.from(event.target.files || []), "single-html");
  }

  function onFolderChange(event: ChangeEvent<HTMLInputElement>) {
    handleFiles(Array.from(event.target.files || []), "folder");
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files || []);
    const htmlCount = files.filter((file) => HTML_EXTENSIONS.test(file.name)).length;
    handleFiles(files, files.length === 1 && htmlCount === 1 ? "single-html" : "folder");
  }

  async function removeLocalDemo(demo: Demo) {
    if (demo.origin !== "local") {
      return;
    }

    const cache = await caches.open(PREVIEW_CACHE_NAME);
    const keys = await cache.keys();
    const marker = `/preview/${encodeURIComponent(demo.id)}/`;

    await Promise.all(
      keys.filter((request) => request.url.includes(marker)).map((request) => cache.delete(request)),
    );

    const nextMetas = localMetas.filter((meta) => meta.id !== demo.id);
    persistLocalMetas(nextMetas);
    setSelectedId(BUILTIN_DEMOS[0].id);
    setUploadMessage(`已移除：${demo.title}`);
  }

  function openDemo(demo: Demo) {
    window.open(demo.entryUrl, "_blank", "noopener,noreferrer");
  }

  async function downloadDemo(demo: Demo) {
    if (demo.downloadUrl) {
      const anchor = document.createElement("a");
      anchor.href = demo.downloadUrl;
      anchor.download = `${demo.id}.zip`;
      anchor.click();
      return;
    }

    if (!demo.files?.length) {
      return;
    }

    setIsBusy(true);
    setUploadMessage(`正在打包：${demo.title}`);

    try {
      const zip = new JSZip();

      for (const file of demo.files) {
        const response = await fetch(previewUrlFor(demo.id, file.path));

        if (!response.ok) {
          throw new Error(`无法读取 ${file.path}`);
        }

        zip.file(file.path, await response.blob());
      }

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${demo.id}.zip`;
      anchor.click();
      URL.revokeObjectURL(url);
      setUploadMessage(`已导出：${demo.title}`);
    } catch (error) {
      setUploadMessage(error instanceof Error ? error.message : "导出失败。");
    } finally {
      setIsBusy(false);
    }
  }

  const builtinCount = BUILTIN_DEMOS.length;
  const localCount = localDemos.length;
  const totalSize = demos.reduce((sum, demo) => sum + demo.totalBytes, 0);

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="./" aria-label="AI Demo 展示站首页">
          <span className="brand__mark">
            <Sparkles size={20} />
          </span>
          <span>
            <strong>AI Demo 展示站</strong>
            <small>HTML demos, neatly staged</small>
          </span>
        </a>

        <div className="topbar__actions">
          <WorkerStatus state={workerState} />
          <a
            className="github-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="打开 GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </header>

      <section className="workspace" aria-label="Demo 工作台">
        <aside className="library-panel" aria-label="Demo 列表">
          <div className="section-heading">
            <div>
              <p>Demo Library</p>
              <h1>能跑的 HTML，统一展示</h1>
            </div>
            <span className="count-pill">
              <LayoutGrid size={15} />
              {demos.length}
            </span>
          </div>

          <div className="stats-row" aria-label="Demo 统计">
            <span>
              <strong>{builtinCount}</strong>
              内置
            </span>
            <span>
              <strong>{localCount}</strong>
              上传
            </span>
            <span>
              <strong>{formatBytes(totalSize)}</strong>
              资源
            </span>
          </div>

          <div
            className={`upload-zone ${isDragging ? "dragging" : ""}`}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
          >
            <div className="upload-zone__icon">
              <UploadCloud size={24} />
            </div>
            <div className="upload-zone__copy">
              <strong>上传一个 Demo</strong>
              <span>{uploadMessage}</span>
            </div>
            <div className="upload-zone__actions">
              <ActionButton
                icon={<FileCode2 size={17} />}
                onClick={() => singleInputRef.current?.click()}
                disabled={isBusy || workerState !== "ready"}
              >
                HTML
              </ActionButton>
              <ActionButton
                icon={<FolderInput size={17} />}
                onClick={() => folderInputRef.current?.click()}
                disabled={isBusy || workerState !== "ready"}
              >
                文件夹
              </ActionButton>
            </div>
          </div>

          <input
            ref={singleInputRef}
            className="visually-hidden"
            type="file"
            accept=".html,.htm,.xhtml,text/html"
            onChange={onSingleFileChange}
          />
          <input
            ref={folderInputRef}
            className="visually-hidden"
            type="file"
            multiple
            onChange={onFolderChange}
          />

          <div className="search-row">
            <label className="search-box">
              <Search size={17} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索标题、标签、描述"
              />
            </label>
          </div>

          <div className="tag-filter" aria-label="标签筛选">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={tag === activeTag ? "active" : ""}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="demo-grid">
            {filteredDemos.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                selected={demo.id === selectedDemo?.id}
                onSelect={() => {
                  setSelectedId(demo.id);
                  setFrameVersion((version) => version + 1);
                }}
              />
            ))}
          </div>
        </aside>

        <section className="preview-panel" aria-label="Demo 预览">
          {selectedDemo ? (
            <>
              <div className={`preview-hero accent-${selectedDemo.accent}`}>
                <div className="preview-hero__header">
                  <div>
                    <p>{selectedDemo.sourceLabel}</p>
                    <h2>{selectedDemo.title}</h2>
                  </div>
                  <div className="preview-hero__tools">
                    <IconButton
                      label="刷新预览"
                      onClick={() => setFrameVersion((version) => version + 1)}
                    >
                      <RefreshCw size={18} />
                    </IconButton>
                    <IconButton label="新窗口打开" onClick={() => openDemo(selectedDemo)}>
                      <ArrowUpRight size={18} />
                    </IconButton>
                  </div>
                </div>

                <div className="browser-frame">
                  <div className="browser-frame__bar">
                    <span />
                    <span />
                    <span />
                    <strong>{selectedDemo.kind === "folder" ? "folder demo" : "single html"}</strong>
                  </div>
                  <iframe
                    key={`${selectedDemo.id}-${frameVersion}`}
                    title={`${selectedDemo.title} 预览`}
                    src={selectedDemo.entryUrl}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads allow-popups"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="details-strip">
                <div className="details-copy">
                  <div className="status-line">
                    <BadgeCheck size={17} />
                    <span>{selectedDemo.kind === "folder" ? "唯一入口文件夹" : "完整 HTML"}</span>
                  </div>
                  <h3>{selectedDemo.summary}</h3>
                  <p>{selectedDemo.description}</p>
                  <Tags tags={selectedDemo.tags} />
                </div>

                <div className="details-actions">
                  <ActionButton
                    variant="primary"
                    icon={<Eye size={18} />}
                    onClick={() => openDemo(selectedDemo)}
                  >
                    打开
                  </ActionButton>
                  <ActionButton
                    icon={<Download size={18} />}
                    onClick={() => downloadDemo(selectedDemo)}
                    disabled={isBusy}
                  >
                    获取
                  </ActionButton>
                  {selectedDemo.origin === "local" ? (
                    <ActionButton
                      variant="danger"
                      icon={<Trash2 size={18} />}
                      onClick={() => removeLocalDemo(selectedDemo)}
                      disabled={isBusy}
                    >
                      移除
                    </ActionButton>
                  ) : null}
                </div>
              </div>

              <div className="quality-grid" aria-label="质量提示">
                <div>
                  <MonitorPlay size={20} />
                  <strong>预览</strong>
                  <span>内嵌 iframe，可一键新窗口打开。</span>
                </div>
                <div>
                  <FileArchive size={20} />
                  <strong>获取</strong>
                  <span>内置 demo 提供 zip，上传 demo 可本地打包导出。</span>
                </div>
                <div>
                  <HardDriveUpload size={20} />
                  <strong>上传</strong>
                  <span>文件夹会校验入口 HTML 数量，避免含糊的启动路径。</span>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <X size={28} />
              <h2>没有匹配的 Demo</h2>
              <p>换个关键词或重置标签筛选。</p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
