import ImagenesProducto from "@/components/ImagenesProducto";
import { getProducto, getProductos } from "@/libs/get-productos";
import Producto from "@/components/Producto";

async function ProductoPage({ params }) {
  const { slug } = await params;
  const productoData = await getProducto(slug);

  if (productoData.length === 0) return null;

  const {
    nombre,
    especificaciones,
    precio,
    descuento,
    imagenes,
    categorias, // Ahora es un arreglo de categorías
  } = productoData[0];

  const precioDescontado = precio * (1 - descuento / 100);

  // Extraer la marca actual del producto (buscando en "especificaciones" donde la característica sea "marca")
  const marcaActual = especificaciones.find(
    (esp) => esp.caracteristica.toLowerCase() === "marca"
  )?.detalle;

  // Seleccionar la primera categoría como criterio para buscar productos relacionados
  const selectedCategory =
    categorias && categorias.length > 0 ? categorias[0].slug : "";

  // Obtener productos de la misma categoría (única llamada asíncrona)
  const relatedData = await getProductos(selectedCategory, 1);
  // Filtrar productos que tengan al menos la categoría seleccionada y que no sean el actual
  const productosFiltrados = relatedData.productos.filter(
    (prod) =>
      prod.slug !== slug &&
      prod.categorias.some((cat) => cat.slug === selectedCategory)
  );

  // Separar en dos grupos:
  // Grupo 1: Productos que comparten la misma marca y la misma categoría
  // Grupo 2: Productos que solo comparten la misma categoría
  let productosRelacionados = [];
  if (marcaActual) {
    const mismosMarca = productosFiltrados.filter((prod) => {
      const prodMarca = prod.especificaciones.find(
        (esp) => esp.caracteristica.toLowerCase() === "marca"
      )?.detalle;
      return prodMarca && prodMarca.toLowerCase() === marcaActual.toLowerCase();
    });
    const otros = productosFiltrados.filter((prod) => {
      const prodMarca = prod.especificaciones.find(
        (esp) => esp.caracteristica.toLowerCase() === "marca"
      )?.detalle;
      return (
        !prodMarca || prodMarca.toLowerCase() !== marcaActual.toLowerCase()
      );
    });
    mismosMarca.sort((a, b) => a.nombre.localeCompare(b.nombre));
    otros.sort((a, b) => a.nombre.localeCompare(b.nombre));
    productosRelacionados = [...mismosMarca, ...otros];
  } else {
    productosRelacionados = productosFiltrados.sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col gap-16 mb-10">
      {/* Contenedor principal: Imágenes y detalles del producto */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ImagenesProducto imagenes={imagenes} />
        </div>
        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">{nombre}</h1>
          <div className="h-[2px] bg-gray-200" />
          <div className="flex items-center gap-4">
            {descuento > 0 && (
              <>
                <h3 className="text-xl text-gray-500 line-through">
                  ${precio.toFixed(2)}
                </h3>
                <h3 className="text-xl text-red-500">%{descuento}</h3>
              </>
            )}
            <h2 className="font-medium text-2xl">
              ${precioDescontado.toFixed(2)}
            </h2>
          </div>
          <div className="h-[2px] bg-gray-200" />
          {/* Especificaciones */}
          <div className="text-sm">
            <h4 className="font-medium mb-4">Características Principales</h4>
            {especificaciones.map((esp) => (
              <div key={esp.id}>
                {esp.caracteristica}: {esp.detalle}
              </div>
            ))}
            {/* Sección de Productos Relacionados */}
            {productosRelacionados.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-medium mb-6">
                  Productos Relacionados
                </h2>
                <div className="w-full grid grid-cols-4 gap-4 lg:grid-cols-2">
                  {productosRelacionados.map(
                    (producto) =>
                      producto.isActive && (
                        <Producto key={producto.id} producto={producto} />
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoPage;
