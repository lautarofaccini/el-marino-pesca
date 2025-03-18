import AgregarCantidad from "@/components/AgregarCantidad";
import ImagenesProducto from "@/components/ImagenesProducto";
import PersonalizarProducto from "@/components/PersonalizarProducto";
import { getProducto } from "@/libs/get-productos";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

async function ProductoPage({ params }) {
  const { slug } = await params;
  const producto = await getProducto(slug);

  if (producto.length === 0) return null;

  const { nombre, descripcion, precio, stock, imagenes } = producto[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ImagenesProducto imagenes={imagenes} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{nombre}</h1>
        <BlocksRenderer className="to-gray-500" content={descripcion} />
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl to-gray-500 line-through">${precio}</h3>
          <h2 className="font-medium text-2xl">$10000</h2>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <PersonalizarProducto />
        <AgregarCantidad stock={stock} />
        <div className="h-[2px] bg-gray-200" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Características Principales</h4>
          <p>Marca: BAMBOO</p>
          <p>Modelo SILVERTECH</p>
          <p>Largo total 240 cm</p>
          <p>Peso de la caña de pescar 380 g</p>
          <p>Resistencia 12-25 lb</p>
          <p>Acción MEDIA</p>
        </div>
      </div>
    </div>
  );
}

export default ProductoPage;
