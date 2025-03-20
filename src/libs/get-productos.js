import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export async function getProductos(categoria, page) {
  //Si existe categoria, filtrar por ella
  let filters = categoria
    ? `&filters[categorias][slug][$contains]=${categoria}`
    : "";
  if (page) filters += `&pagination[page]=${page}`;
  filters += `&pagination[pageSize]=${1}`;
  return query(
    `productos?populate[imagenes][fields][0]=url&populate=especificaciones${filters}`
  ).then((res) => {
    const { data, meta } = res;
    const productos = data.map((producto) => {
      const {
        id,
        nombre,
        slug,
        especificaciones,
        isActive,
        precio,
        descuento,
        stock,
        imagenes: images,
      } = producto;

      const imagenes = images?.map((img) => `${STRAPI_HOST}${img.url}`) || [];

      return {
        id,
        nombre,
        slug,
        especificaciones,
        isActive,
        precio,
        descuento,
        stock,
        imagenes,
      };
    });
    return { productos, pagination: meta.pagination };
  });
}

export async function getProducto(slug) {
  return query(
    `productos?filters[slug][$eq]=${slug}&populate[imagenes][fields][0]=url&populate=especificaciones`
  ).then((res) => {
    return res.data.map((producto) => {
      const {
        nombre,
        slug,
        especificaciones,
        isActive,
        precio,
        descuento,
        stock,
        imagenes: images,
      } = producto;

      const imagenes = images?.map((img) => `${STRAPI_HOST}${img.url}`) || [];

      return {
        nombre,
        slug,
        especificaciones,
        isActive,
        precio,
        descuento,
        stock,
        imagenes,
      };
    });
  });
}
