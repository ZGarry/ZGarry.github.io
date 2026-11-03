import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  layouts: {
    PersonalHome: defineAsyncComponent(() => import("./layouts/PersonalHome.vue")),
  },
  enhance({ router }) {
    if (typeof window === "undefined") return;

    // An open tab can outlive a build and still refer to removed chunk files.
    router.onError((error, to) => {
      if (
        !/Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Unable to preload CSS|Loading chunk .* failed/i.test(
          error instanceof Error ? error.message : String(error),
        )
      ) return;

      const target = new URL(to.fullPath, window.location.origin);
      if (target.origin !== window.location.origin) return;

      // Avoid a reload loop if an asset is genuinely unavailable.
      const key = `blog:chunk-reload:${to.path}`;
      const now = Date.now();
      try {
        if (now - Number(window.sessionStorage.getItem(key) || 0) < 15000) return;
        window.sessionStorage.setItem(key, String(now));
      } catch {
        return;
      }

      window.location.assign(target.href);
    });
  },
});
