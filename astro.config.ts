import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import AutoImport from "unplugin-auto-import/astro";
import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  site: "https://doujin.ztzl.moe/",
  integrations: [
    // Enable Preact to support Preact JSX components.
    vue({ appEntrypoint: "/src/pages/_app" }),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    tailwind({
      // config: { applyBaseStyles: false },
    }),
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
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
