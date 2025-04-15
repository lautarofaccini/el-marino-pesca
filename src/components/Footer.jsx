import { getCategorias } from "@/libs/get-categorias";
import Link from "next/link";

const Footer = async () => {
  const categorias = await getCategorias();
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-blue-50 text-sm">
      {/* ARRIBA */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* IZQUIERDA */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">EL MARINO PESCA</div>
          </Link>
          <p>Barrio LaBarriada Mz 22 Casa 13, Formosa, Argentina</p>
          <span className="font-semibold">colopesca@gmail.com</span>
          <span className="font-semibold">+54 9 3704 887766</span>
        </div>

        {/* CENTER */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Categorias</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categorias &&
              categorias.map((categoria) => (
                <Link key={categoria.slug} href={"/productos?categoria=" + categoria.slug}>
                  {categoria.nombre}
                </Link>
              ))}
            <Link href="/productos">Todos los productos</Link>
          </div>
        </div>
      </div>

      {/* ABAJO */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Colo Pesca</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Idioma</span>
            <span className="font-medium">Español</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Moneda</span>
            <span className="font-medium">$ ARS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
