import ListaProductos from "@/components/ListaProductos";
import ListaCategorias from "@/components/ListaCategorias";
import { getProductos } from "@/libs/get-productos";
import Hero from "@/components/Hero";
import Link from "next/link";

async function HomePage() {
  const { productos: productosDestacados } = await getProductos("destacados");
  const { productos: productosNuevos } = await getProductos(
    "nuevos-ingresos",
    undefined,
    "createdAt:desc"
  );
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl">Productos Destacados</h2>
            <Link
              href="/productos"
              className="text-sm font-medium hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <ListaProductos productos={productosDestacados} />
        </div>
      </div>
      <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-blue-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl">Nuevos Ingresos</h2>
            <Link
              href="/productos"
              className="text-sm font-medium hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <ListaProductos productos={productosNuevos} />
        </div>
      </div>
      <div
        id="categorias"
        className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 bg-white"
      >
        <div className="container mx-auto">
          <h1 className="text-2xl">Categorias</h1>
          <ListaCategorias />
        </div>
      </div>
      {/* TODO: Botón que aparezca en móviles para desplazarte hacia arriba */}
    </div>
  );
}

export default HomePage;
