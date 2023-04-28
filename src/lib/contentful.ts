import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface Noticia {
  imagenPortada: any;
  fecha: any;
  titulo: string;
  titulo_ca: string;
  titulo_en: string;
  titulo_de: string;
  descripcion: string;
  descripcion_ca: string;
  descripcion_en: string;
  descripcion_de: string;
  url: string;
  contenido: Document;
  contenido_ca: Document;
  contenido_en: Document;
  contenido_de: Document;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});