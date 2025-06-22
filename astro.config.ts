import { defineConfig } from "astro/config";
import compress from "astro-compress";
import compressor from "astro-compressor";
import { getAliases } from "./scripts/alias.ts";
import tsconfig from "./tsconfig.json" with { type: "json" };
import UnoCSS from "unocss/astro";
import UnoCSSVite from 'unocss/vite'

import svelte from "@astrojs/svelte";

export default defineConfig({
  vite: {
    resolve: {
      alias: getAliases(tsconfig.compilerOptions.paths),
    },
    plugins: [UnoCSSVite()]
  },
  integrations: [
    UnoCSS(),
    svelte(),
    compress({
      HTML: {
        "html-minifier-terser": {
          sortClassName: false,
        },
      },
    }),
    compressor({ gzip: false, brotli: true }),
  ],
});
