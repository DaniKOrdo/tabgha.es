/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "es",
    locales: ["es", "ca", "en", "de"],
    routes: {
      ca: {
        "carta": "menu",
        "sentido": "sense",
        "noticias": "news",
        "ubicacion": "ubication",
        "contacto": "contact"
      },
      en: {
        "carta": "menu",
        "sentido": "sense",
        "noticias": "news",
        "ubicacion": "ubication",
        "contacto": "contact"
      },
      de: {
        "carta": "menu",
        "sentido": "sense",
        "noticias": "news",
        "ubicacion": "ubication",
        "contacto": "contact"
      }
    }
  };