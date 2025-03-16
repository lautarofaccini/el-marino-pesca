import AgregarCantidad from "@/components/AgregarCantidad";
import ImagenesProducto from "@/components/ImagenesProducto";
import PersonalizarProducto from "@/components/PersonalizarProducto";

function ProductoPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ImagenesProducto />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Producto 1</h1>
        <p className="to-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          tenetur est iusto autem. Illo corrupti fuga nisi eos neque quidem
          natus tenetur doloribus? Hic doloremque sed et optio ipsam possimus.
        </p>
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl to-gray-500 line-through">$12000</h3>
          <h2 className="font-medium text-2xl">$10000</h2>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <PersonalizarProducto />
        <AgregarCantidad />
        <div className="h-[2px] bg-gray-200" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Titulo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magnam officiis in vero maiores distinctio, earum aliquid cupiditate
            doloremque! Provident laboriosam quis quaerat temporibus nisi maxime
            asperiores eveniet culpa unde!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Titulo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magnam officiis in vero maiores distinctio, earum aliquid cupiditate
            doloremque! Provident laboriosam quis quaerat temporibus nisi maxime
            asperiores eveniet culpa unde!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Titulo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            magnam officiis in vero maiores distinctio, earum aliquid cupiditate
            doloremque! Provident laboriosam quis quaerat temporibus nisi maxime
            asperiores eveniet culpa unde!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductoPage;
