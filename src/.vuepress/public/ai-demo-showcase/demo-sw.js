// 旧版展示站（2026-06）注册过同名 Service Worker；新版首页是纯静态页面，不再需要它。
// 浏览器检查更新时会拿到这个版本：立即接管，然后注销自己并清理旧缓存。
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith("ai-demo-showcase")).map((k) => caches.delete(k)));
      await self.registration.unregister();
    })(),
  );
});
