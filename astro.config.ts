import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import AutoImport from "unplugin-auto-import/astro";
import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  site: "https://doujin.ztzl.moe/",
  integrations: [
    // Enable Preact to support Preact JSX components.
    vue({ appEntrypoint: "/src/pages/_app" }),
    mdx(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [Icons({
      compiler: "astro",
    }), tailwindcss()],
  },
});