<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import CommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
import SkipLink from "vuepress-theme-hope/components/SkipLink.js";

// Existing VuePress navigation, article routes and appearance controls stay shared.
// Design: native CSS editorial layout. Variance 7 / motion 5 / density 3.
const selected = ref("全部");
const filters = ["全部", "长期思考", "AI 实践", "职场观察"];
const articles = [
  { category: "长期思考", title: "加一和乘 1.1 的分野", description: "做正确的事，然后才是正确地做事。聊聊线性积累与复利增长。", path: "/posts/文章/22 加一和乘1.1的分野.html", mark: "+1 / ×1.1" },
  { category: "长期思考", title: "引擎层和编排层", description: "让稳定的内核与频繁的变化共存。给系统，也给自己的生活，一种新的组织方式。", path: "/posts/文章/21 引擎层和编排层.html", mark: "SYSTEM" },
  { category: "AI 实践", title: "AI 的睡眠工作法", description: "陷入反复提示、越改越偏的困境时，先停下来，再开始下一次尝试。", path: "/posts/AI无相神功/AI无相神功_6 AI的睡眠工作法.html", mark: "HUMAN + AI" },
  { category: "职场观察", title: "偷懒是一个系统工程", description: "从一次次重复劳动里，找到可以长期复用的方法。", path: "/posts/打工人手册/打工人手册_17 偷懒是一个系统工程.html", mark: "RETHINK" },
];
const visibleArticles = computed(() => articles.filter(a => selected.value === "全部" || a.category === selected.value));
let observer: IntersectionObserver | undefined;
onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer?.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll(".personal-home .reveal").forEach(el => {
    el.classList.add("will-reveal");
    observer?.observe(el);
  });
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <SkipLink />
  <CommonWrapper no-sidebar no-toc container-class="personal-home">
    <main id="main-content" class="personal-main">
      <section class="personal-hero" aria-labelledby="home-title">
        <div class="hero-copy">
          <p class="hero-eyebrow">ZGARRY’S PERSONAL BLOG</p>
          <h1 id="home-title">入川为王<span class="title-period" aria-hidden="true">。</span></h1>
          <p class="hero-manifesto">我们的生活，存在着巨大的<span>优化空间。</span></p>
          <div class="hero-actions">
            <RouterLink class="home-button primary" to="/posts/">开始阅读 <span aria-hidden="true">↗</span></RouterLink>
            <RouterLink class="home-button secondary" to="/intro.html">关于我 <span aria-hidden="true">↗</span></RouterLink>
          </div>
        </div>
        <div class="hero-art">
          <img src="/assets/home/river-960.webp"
            srcset="/assets/home/river-640.webp 640w, /assets/home/river-960.webp 960w, /assets/home/river-1536.webp 1536w"
            sizes="(max-width: 767px) 100vw, 58vw"
            width="1536" height="1024" fetchpriority="high" decoding="async"
            alt="群山之间，一条银色河流朝着橙色的晨光蜿蜒向前" />
        </div>
      </section>

      <section class="series-section reveal" aria-labelledby="series-title">
        <h2 id="series-title">两部完结系列，下一篇章。</h2>
        <div class="series-grid">
          <RouterLink to="/posts/打工人手册/" class="series-panel manual-panel">
            <div class="series-copy">
              <h3>打工人手册</h3>
              <p>关于工作、价值与选择。<br />从具体的处境，寻找向前的路。</p>
              <span class="series-link">阅读完整系列 <span aria-hidden="true">↗</span></span>
            </div>
            <div class="series-number"><strong>110</strong><span>篇文章</span></div>
          </RouterLink>
          <RouterLink to="/posts/AI无相神功/" class="series-panel ai-panel">
            <div class="series-copy">
              <h3>AI无相神功</h3>
              <p>工具在变化，思考也在进化。<br />记录与 AI 共事的实践与判断。</p>
              <span class="series-link">阅读全 108 篇 · 已完结 <span aria-hidden="true">↗</span></span>
            </div>
            <span class="ai-letterform" aria-hidden="true">Ai</span>
          </RouterLink>
        </div>
        <p><RouterLink to="/posts/量化百策/">下一个篇章：量化百策 ↗</RouterLink></p>
      </section>

      <section class="reading-section reveal" aria-labelledby="reading-title">
        <h2 id="reading-title">从这几篇开始。</h2>
        <div class="reading-filters" role="group" aria-label="按主题筛选精选文章">
          <button v-for="filter in filters" :key="filter" type="button"
            :aria-pressed="selected === filter" @click="selected = filter">{{ filter }}</button>
        </div>
        <div class="reading-grid" aria-live="polite" aria-atomic="true">
          <RouterLink v-for="article in visibleArticles" :key="article.path" :to="article.path" class="reading-item">
            <span class="article-category">{{ article.category }}</span>
            <h3>{{ article.title }}<span aria-hidden="true">↗</span></h3>
            <p>{{ article.description }}</p>
            <span class="article-mark" aria-hidden="true">{{ article.mark }}</span>
          </RouterLink>
          <p v-if="!visibleArticles.length">这个主题还没有精选文章。</p>
        </div>
        <RouterLink to="/article/" class="all-writing">浏览全部文章 <span aria-hidden="true">↗</span></RouterLink>
      </section>

      <section class="home-about reveal" aria-labelledby="about-title">
        <h2 id="about-title">保持思考，<span>保持行动。</span></h2>
        <div>
          <p>这里是我的长期记录。写职场里的观察，写 AI 带来的变化，也写投资、资源配置和生活中的选择。</p>
          <a href="https://github.com/ZGarry" target="_blank" rel="noopener noreferrer">在 GitHub 找到我 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  </CommonWrapper>
</template>

<style lang="scss">
// One token system across the whole page. Shared theme controls light/dark mode.
.personal-home {
  --home-bg: #f4f5f4;
  --home-surface: #e9ebe9;
  --home-text: #242825;
  --home-muted: #606760;
  --home-line: #d4d8d4;
  --home-accent: #b95024;
  --home-accent-text: #fbfaf7;
  background: var(--home-bg);
  color: var(--home-text);
  .vp-navbar { background: var(--home-bg); box-shadow: none; border-bottom: 1px solid var(--home-line); }
  .vp-footer-wrapper { margin: 0; background: var(--home-bg); border-color: var(--home-line); }
  .vp-sidebar, .toggle-sidebar-wrapper { display: none; }
  a { color: inherit; text-decoration: none; }
  a:focus-visible, button:focus-visible { outline: 3px solid var(--home-accent); outline-offset: 5px; }
  h1, h2, h3, p { margin: 0; padding: 0; border: 0; }
}
[data-theme="dark"] .personal-home {
  --home-bg: #161a18;
  --home-surface: #222824;
  --home-text: #eeefe9;
  --home-muted: #a8b1a9;
  --home-line: #3a423c;
  --home-accent: #ec996e;
  --home-accent-text: #211c17;
}
.personal-main { max-width: 1440px; margin: auto; padding: 5.5rem 4.5rem 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; }
.personal-hero { display: grid; grid-template-columns: 0.9fr 1.1fr; align-items: center; gap: 3rem; min-height: min(690px, 88dvh); padding: 1.5rem 0 4.5rem; }
.hero-eyebrow { font: 500 0.75rem/1.5 "Cascadia Code", Consolas, monospace; letter-spacing: 0.14em; color: var(--home-muted); }
.hero-copy h1 { margin: 1.9rem 0 1.5rem; font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 800; letter-spacing: -0.075em; white-space: nowrap; line-height: 1.2; }
.title-period { color: var(--home-accent); }
.hero-manifesto { max-width: 17em; font-size: clamp(1.15rem, 1.8vw, 1.6rem); line-height: 1.85; color: var(--home-muted); }
.hero-manifesto span { color: var(--home-text); white-space: nowrap; }
.hero-actions { display: flex; gap: 0.8rem; margin-top: 2.4rem; }
.home-button { display: inline-flex; align-items: center; justify-content: space-between; gap: 2.4rem; min-height: 48px; padding: 0.2rem 1.2rem; border: 1px solid var(--home-line); border-radius: 6px; font-size: 0.9rem; font-weight: 600; white-space: nowrap; transition: transform .22s, background-color .22s; }
.home-button.primary { background: var(--home-accent); color: var(--home-accent-text); border-color: var(--home-accent); }
.home-button.secondary { background: transparent; }
.home-button:hover { transform: translateY(-3px); }
.home-button:active { transform: translateY(1px); }
.hero-art { overflow: hidden; height: clamp(350px, 40vw, 540px); border-radius: 6px; background: var(--home-surface); }
.hero-art img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 53% center; }
.series-section, .reading-section { padding: 3.5rem 0; }
.personal-main h2 { font-size: clamp(1.6rem, 2.3vw, 2.15rem); letter-spacing: -0.045em; font-weight: 650; line-height: 1.5; }
.series-grid { display: grid; grid-template-columns: 1.12fr 1fr; gap: 1.3rem; margin-top: 2rem; }
.series-panel { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; min-height: 255px; padding: 2.2rem; overflow: hidden; border-radius: 6px; transition: transform .3s; }
.series-panel:hover { transform: translateY(-5px); }
.manual-panel { background: var(--home-surface); }
.ai-panel { border: 1px solid var(--home-line); }
.series-copy { position: relative; z-index: 1; }
.series-copy h3 { font-size: 1.6rem; font-weight: 650; letter-spacing: -0.04em; }
.series-copy p { margin-top: 1rem; font-size: .9rem; line-height: 1.9; color: var(--home-muted); }
.series-link { display: inline-flex; gap: 1.2rem; align-items: center; margin-top: 2rem; font-size: .85rem; font-weight: 600; }
.series-number { display: grid; text-align: right; flex-shrink: 0; align-self: flex-end; }
.series-number strong { font: 500 clamp(3.5rem, 6vw, 5.6rem)/1.1 "Cascadia Code", Consolas, monospace; letter-spacing: -.09em; color: var(--home-accent); }
.series-number span { margin-top: .4rem; font-size: .8rem; color: var(--home-muted); }
.ai-letterform { font-size: clamp(5rem, 10vw, 9rem); line-height: 1; font-weight: 750; letter-spacing: -.1em; color: var(--home-line); transform: rotate(-9deg); }
.reading-filters { display: flex; flex-wrap: wrap; gap: .35rem; margin: 1.6rem 0 2rem; }
.reading-filters button { font: inherit; font-size: .88rem; background: transparent; color: var(--home-muted); padding: .6rem 1rem; border: 1px solid transparent; border-radius: 6px; cursor: pointer; transition: color .2s, background-color .2s; }
.reading-filters button[aria-pressed="true"] { background: var(--home-text); color: var(--home-bg); }
.reading-filters button:hover:not([aria-pressed="true"]) { background: var(--home-surface); color: var(--home-text); }
.reading-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 3rem; }
.reading-item { position: relative; min-height: 195px; padding: 1.7rem 0; border-top: 1px solid var(--home-line); }
.article-category { font-size: .78rem; color: var(--home-muted); }
.reading-item h3 { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin: .75rem 0; font-size: 1.3rem; line-height: 1.5; font-weight: 650; transition: color .2s; }
.reading-item h3 span { font-size: 1.3rem; transition: transform .2s; }
.reading-item:hover h3 { color: var(--home-accent); }
.reading-item:hover h3 span { transform: translate(3px,-3px); }
.reading-item p { max-width: 30em; font-size: .9rem; line-height: 1.9; color: var(--home-muted); }
.article-mark { display: block; margin-top: 1.4rem; font: .7rem/1.5 "Cascadia Code", Consolas, monospace; letter-spacing: .07em; color: var(--home-muted); }
.all-writing { display: inline-flex; gap: 1.8rem; align-items: center; margin-top: 1.4rem; padding: .7rem 0; font-size: .95rem; border-bottom: 1px solid var(--home-text); }
.home-about { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding: 4rem 0 6rem; margin-top: 2rem; border-top: 1px solid var(--home-line); }
.home-about h2 { font-size: clamp(2rem, 3.4vw, 3rem); }
.home-about h2 span { display: block; color: var(--home-accent); }
.home-about p { max-width: 28em; line-height: 2; font-size: .95rem; color: var(--home-muted); }
.home-about a { display: inline-flex; gap: 1.5rem; margin-top: 1.5rem; font-size: .85rem; font-weight: 600; }
@media (prefers-reduced-motion: no-preference) {
  .hero-copy { animation: home-enter .7s both; }
  .hero-art { animation: home-enter 1s .12s both; }
  .hero-art img { animation: home-image 1.5s ease-out both; }
  .will-reveal { opacity: 1; transform: translateY(12px); transition: transform .6s ease-out; }
  .will-reveal.is-visible { opacity: 1; transform: none; }
  @keyframes home-enter { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
  @keyframes home-image { from { transform: scale(1.04); } to { transform: scale(1); } }
}
@media (min-width: 1440px) { .personal-hero { gap: 4rem; } }
@media (max-width: 1023px) {
  .personal-main { padding-right: 2rem; padding-left: 2rem; }
  .personal-hero { gap: 1.5rem; min-height: 560px; }
  .series-panel { padding: 1.5rem; gap: .75rem; }
  .series-number strong { font-size: 3.7rem; }
  .ai-letterform { font-size: 6rem; }
  .series-copy p { font-size: .85rem; }
}
@media (max-width: 767px) {
  .personal-main { width: auto; padding: 5.5rem 1.25rem 0; }
  .personal-hero { grid-template-columns: minmax(0,1fr); gap: 2.5rem; min-height: 0; padding: 1.5rem 0 1rem; }
  .hero-copy h1 { font-size: clamp(2.8rem, 11vw, 4.8rem); margin: 1.2rem 0 1rem; }
  .hero-manifesto { max-width: 17em; font-size: 1.15rem; }
  .hero-actions { margin-top: 1.7rem; }
  .home-button { gap: 2rem; }
  .hero-art { height: 300px; }
  .series-section, .reading-section { padding: 2.6rem 0 1rem; }
  .series-grid { grid-template-columns: minmax(0,1fr); gap: 1rem; margin-top: 1.5rem; }
  .series-panel { min-height: 230px; padding: 1.6rem; }
  .series-copy h3 { font-size: 1.5rem; }
  .series-number strong { font-size: 4.6rem; }
  .series-number { position: absolute; right: 1.6rem; bottom: 1.5rem; }
  .series-copy { width: 100%; }
  .series-copy p { max-width: 18em; }
  .ai-letterform { position: absolute; right: 1.6rem; bottom: 2rem; font-size: 7rem; }
  .reading-grid { grid-template-columns: minmax(0,1fr); gap: 0; }
  .reading-item { min-height: 170px; }
  .reading-filters { gap: .1rem; margin-bottom: 1.4rem; }
  .reading-filters button { padding: .6rem .75rem; }
  .home-about { grid-template-columns: minmax(0,1fr); gap: 1.5rem; padding: 2.5rem 0 3rem; margin-top: 3rem; }
}
@media (prefers-reduced-motion: reduce) {
  .personal-home *, .personal-home *::before, .personal-home *::after { animation: none !important; transition: none !important; }
}
</style>
