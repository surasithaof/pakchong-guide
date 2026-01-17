import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://surasithaof.github.io",
  // base: "/pakchong-guide",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en", "zh", "es", "fr", "it", "ru"],
  },
});
