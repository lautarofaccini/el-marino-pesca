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
/* 
{
  "data": [
    {
      "id": 18,
      "documentId": "mt0qg13mdqkrtplj8q8t1kq8",
      "nombre": "CAÑA CASTER XTREME CHAOS 2,10 MTS 15-30 LBS",
      "slug": "cana-caster-xtreme-chaos-210-mts-15-30-lbs",
      "isActive": true,
      "precio": 100000,
      "descripcion": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "Una caña aburrida"
            }
          ]
        }
      ],
      "stock": 5,
      "createdAt": "2025-03-18T12:46:52.568Z",
      "updatedAt": "2025-03-18T13:12:15.395Z",
      "publishedAt": "2025-03-18T13:12:15.406Z",
      "imagenes": [
        {
          "id": 22,
          "documentId": "fstcg6nnurny0xq1zfolpzux",
          "url": "/uploads/whatsapp_image_2021_11_17_at_6_08_07_pm3_9f8ff5833a547d3c3c16371854061500_1024_1024_161a9a5b7e.webp"
        },
        {
          "id": 12,
          "documentId": "g72wq61bgtiu6906mgn3rnut",
          "url": "/uploads/cana3_414b13760f.jpg"
        },
        {
          "id": 14,
          "documentId": "vvjh1hrptzfsi8t4zciuuwab",
          "url": "/uploads/cana1_6cc5a52fa0.jpg"
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
*/
