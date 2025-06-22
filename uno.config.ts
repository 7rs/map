import { defineConfig } from "unocss";
import { createRemToPxProcessor } from "@unocss/preset-wind4/utils";
import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        theme: {
          process: createRemToPxProcessor()
        }
      }
    })
  ]
});
