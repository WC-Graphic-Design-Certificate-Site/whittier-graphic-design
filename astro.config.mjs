import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://phenomenal-wisp-d502f4.netlify.app",
  compressHTML: true,
  scopedStyleStrategy: "class",
  integrations: [svelte(), sitemap()],
});
