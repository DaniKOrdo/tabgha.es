import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tabgha.es",
  integrations: [tailwind(), astroI18next(), mdx(), sitemap({
    i18n: {
      defaultLocale: "es",
      // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        es: "es-ES",
        ca: "es-CA",
        en: "en-GB",
        de: "de-DE"
      }
    }
  }), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), image()]
});