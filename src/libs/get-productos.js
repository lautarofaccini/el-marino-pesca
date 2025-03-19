import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export async function getProductos(categoria) {
  //Si existe categoria, filtrar por ella
  const filters = categoria
    ? `&filters[categorias][slug][$contains]=${categoria}`
    : "";
  return query(`productos?populate[imagenes][fields][0]=url${filters}`).then(
    (res) => {
      const { data, meta } = res;
      const productos = data.map((producto) => {
        const {
          id,
          nombre,
          slug,
          descripcion,
          isActive,
          precio,
          stock,
          imagenes: images,
        } = producto;

        const imagenes = images?.map((img) => `${STRAPI_HOST}${img.url}`) || [];

        return {
          id,
          nombre,
          slug,
          descripcion,
          isActive,
          precio,
          stock,
          imagenes,
        };
      });
      return { productos, pagination: meta.pagination };
    }
  );
}

export async function getProducto(slug) {
  return query(
    `productos?filters[slug][$eq]=${slug}&populate[imagenes][fields][0]=url`
  ).then((res) => {
    return res.data.map((producto) => {
      const {
        nombre,
        slug,
        descripcion,
        isActive,
        precio,
        stock,
        imagenes: images,
      } = producto;

      const imagenes = images?.map((img) => `${STRAPI_HOST}${img.url}`) || [];

      return { nombre, slug, descripcion, isActive, precio, stock, imagenes };
    });
  });
}
