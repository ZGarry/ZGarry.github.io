export type DemoOrigin = "builtin" | "local";
export type DemoKind = "single-html" | "folder";
export type DemoAccent = "coral" | "gold" | "teal" | "violet" | "lime";

export interface DemoFileMeta {
  path: string;
  size: number;
  type: string;
}

export interface LocalDemoMeta {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  kind: DemoKind;
  entryPath: string;
  addedAt: string;
  files: DemoFileMeta[];
  totalBytes: number;
  accent: DemoAccent;
}

export interface Demo {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  origin: DemoOrigin;
  kind: DemoKind;
  entryUrl: string;
  downloadUrl?: string;
  sourceLabel: string;
  fileCount: number;
  totalBytes: number;
  accent: DemoAccent;
  addedAt?: string;
  files?: DemoFileMeta[];
  entryPath?: string;
}
