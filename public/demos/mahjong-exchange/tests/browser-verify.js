const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const URL = process.env.MAHJONG_URL || "http://127.0.0.1:8765/";
const screenshotDir = path.join(__dirname, "screenshots");
const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  path.join(process.env.LOCALAPPDATA || "", "Google\\Chrome\\Application\\chrome.exe"),
].filter(Boolean);

async function assertNoHorizontalOverflow(page, label) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  assert.ok(
    overflow.scrollWidth <= overflow.innerWidth + 2,
    `${label} has horizontal overflow: ${overflow.scrollWidth} > ${overflow.innerWidth}`
  );
}

async function main() {
  fs.mkdirSync(screenshotDir, { recursive: true });
  const executablePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));
  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "换三张" }).waitFor();
  await assertNoHorizontalOverflow(page, "desktop opening");

  await page.getByRole("button", { name: "验证局" }).first().click();
  await page.getByText("种子 verification").waitFor();
  await page.getByRole("button", { name: "智能换三张" }).click();
  await page.locator(".exchange-preview", { hasText: "队友给我" }).waitFor();
  await page.getByRole("button", { name: "确认交换" }).click();

  const meHu = page.getByRole("button", { name: "我胡牌" });
  await assert.strictEqual(await meHu.isEnabled(), true, "verification hand can win after exchange");
  await meHu.click();
  await page.getByRole("heading", { name: "队伍获胜" }).waitFor();
  await page.screenshot({ path: path.join(screenshotDir, "desktop-win.png"), fullPage: true });

  const won = await page.evaluate(() => ({
    stage: window.__mahjongGame.getState().stage,
    winner: window.__mahjongGame.getState().winner,
    meWins: window.__mahjongGame.core.canWin(
      window.__mahjongGame.getState().hands.me,
      window.__mahjongGame.getState().laizi
    ),
  }));
  assert.deepStrictEqual(won, { stage: "ended", winner: "me", meWins: true }, "browser game ends with my win");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "验证局" }).first().click();
  await assertNoHorizontalOverflow(page, "mobile verification");
  await page.screenshot({ path: path.join(screenshotDir, "mobile-exchange.png"), fullPage: true });

  await browser.close();
  console.log("Browser verification passed.");
  console.log(path.join(screenshotDir, "desktop-win.png"));
  console.log(path.join(screenshotDir, "mobile-exchange.png"));
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
