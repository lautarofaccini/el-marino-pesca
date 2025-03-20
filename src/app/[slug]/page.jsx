import AgregarCantidad from "@/components/AgregarCantidad";
import ImagenesProducto from "@/components/ImagenesProducto";
import PersonalizarProducto from "@/components/PersonalizarProducto";
import { getProducto } from "@/libs/get-productos";

async function ProductoPage({ params }) {
  const { slug } = await params;
  const producto = await getProducto(slug);

  if (producto.length === 0) return null;

  const { nombre, especificaciones, precio, descuento, stock, imagenes } =
    producto[0];

  const precioDescontado = precio * (1 - descuento / 100);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ImagenesProducto imagenes={imagenes} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{nombre}</h1>
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">${precio}</h3>
          <h3 className="text-xl text-red-500">%{descuento}</h3>
          <h2 className="font-medium text-2xl">${precioDescontado}</h2>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <PersonalizarProducto />
        <AgregarCantidad stock={stock} />
        <div className="h-[2px] bg-gray-200" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Características Principales</h4>
          {especificaciones.map((esp) => (
            <div key={esp.id}>
              {esp.caracteristica}: {esp.detalle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductoPage;
