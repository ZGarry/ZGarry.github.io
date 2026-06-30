import { expect, test } from "@playwright/test";
import path from "node:path";

const root = process.cwd();
const fixture = (...parts: string[]) => path.join(root, "tests", "fixtures", ...parts);

async function waitForWorker(page: import("@playwright/test").Page) {
  await expect(page.getByText("上传预览已就绪")).toBeVisible();
}

function demoCard(page: import("@playwright/test").Page, title: string) {
  return page.locator(".demo-card").filter({ hasText: title });
}

test("shows built-in demos and switches iframe entries", async ({ page }) => {
  await page.goto("/");
  await waitForWorker(page);

  for (const url of [
    "/demos/claude-intro/index.html",
    "/demos/babel-library/index.html",
    "/demos/mahjong-exchange/index.html",
    "/downloads/claude-intro.zip",
    "/downloads/babel-library.zip",
    "/downloads/mahjong-exchange.zip",
  ]) {
    const response = await page.request.get(url);
    expect(response.ok(), `${url} should be available`).toBeTruthy();
  }

  await expect(page.getByRole("heading", { name: "能跑的 HTML，统一展示" })).toBeVisible();
  await expect(demoCard(page, "Claude 介绍自己")).toBeVisible();
  await expect(demoCard(page, "巴别图书馆")).toBeVisible();
  await expect(demoCard(page, "麻将换三张")).toBeVisible();

  await demoCard(page, "巴别图书馆").click();
  await expect(page.getByRole("heading", { name: "巴别图书馆" })).toBeVisible();
  await expect(page.locator("iframe")).toHaveAttribute("src", "/demos/babel-library/index.html");

  await demoCard(page, "麻将换三张").click();
  await expect(page.getByRole("heading", { name: "麻将换三张" })).toBeVisible();
  await expect(page.locator("iframe")).toHaveAttribute("src", "/demos/mahjong-exchange/index.html");
});

test("uploads a single HTML demo, previews it, and exports a zip", async ({ page }) => {
  await page.goto("/");
  await waitForWorker(page);

  await page.locator('input[type="file"]').first().setInputFiles(fixture("single-demo.html"));

  await expect(page.getByText("已加入：上传测试单页 Demo")).toBeVisible();
  await expect(page.getByRole("heading", { name: "上传测试单页 Demo" })).toBeVisible();
  await expect(page.locator("iframe")).toHaveAttribute("src", /\/preview\/local-.+\/single-demo\.html/);
  await expect(page.frameLocator("iframe").getByText("单 HTML 上传预览链路就是通的")).toBeVisible();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "获取" }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toMatch(/^local-.+\.zip$/);
});

test("uploads a folder demo with one HTML entry and preserves relative assets", async ({ page }) => {
  await page.goto("/");
  await waitForWorker(page);

  await page.locator('input[type="file"]').nth(1).setInputFiles(fixture("folder-demo"));

  await expect(page.getByText("已加入：上传测试文件夹 Demo")).toBeVisible();
  await expect(page.getByRole("heading", { name: "上传测试文件夹 Demo" })).toBeVisible();
  await expect(page.locator("iframe")).toHaveAttribute(
    "src",
    /\/preview\/local-.+\/index\.html/,
  );
  await expect(page.frameLocator("iframe").getByText("脚本和样式都已通过相对路径加载。")).toBeVisible();
});

test("rejects folders without a unique HTML entry", async ({ page }) => {
  await page.goto("/");
  await waitForWorker(page);

  await page.locator('input[type="file"]').nth(1).setInputFiles(fixture("invalid-folder"));

  await expect(page.getByText("文件夹内必须有且只有一个入口 HTML，目前检测到 2 个。")).toBeVisible();
});
