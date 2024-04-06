import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://design.whittier.edu/",
  scopedStyleStrategy: "class",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.sanity.io",
      },
    ],
  },
  integrations: [sitemap(), svelte()],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
