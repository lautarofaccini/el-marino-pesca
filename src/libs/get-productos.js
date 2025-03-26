import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export async function getProductos(categoria, page, sort, busqueda) {
  // Construir filtros según lo recibido
  let filters = "";
  if (categoria) {
    filters += `&filters[categorias][slug][$contains]=${categoria}`;
  }
  if (busqueda) {
    // Se usa el operador $containsi para búsqueda insensible a mayúsculas/minúsculas
    filters += `&filters[slug][$containsi]=${busqueda}`;
  }
  if (page) {
    filters += `&pagination[page]=${page}`;
  }
  if (sort) {
    filters += `&sort=${sort}`;
  }
  filters += `&pagination[pageSize]=25`;
  
  const newQuery = `productos?populate[imagenes][fields][0]=url&populate=especificaciones${filters}`;
  return query(newQuery).then((res) => {
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
