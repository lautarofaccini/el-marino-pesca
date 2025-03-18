import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export async function getCategorias() {
  return query(
    "categorias?fields[0]=nombre&fields[1]=slug&populate[imagen][fields][0]=url"
  ).then((res) => {
    return res.data.map((categoria) => {
      const { id, nombre, slug, imagen: rawImage } = categoria;
      const imagen = `${STRAPI_HOST}${rawImage?.url}`;
      return { id, nombre, slug, imagen };
    });
  });
}
