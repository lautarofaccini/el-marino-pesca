import ListaProductos from "@/components/ListaProductos";
import ListaCategorias from "@/components/ListaCategorias";
import { getProductos } from "@/libs/get-productos";

async function HomePage() {
  const { productos: productosDestacados } = await getProductos("destacados");
  const { productos: productosNuevos } = await getProductos("nuevos-ingresos");
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Productos Destacados</h1>
        <ListaProductos productos={productosDestacados} />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categorias
        </h1>
        <ListaCategorias />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Productos nuevos</h1>
        <ListaProductos productos={productosNuevos} />
      </div>
    </div>
  );
}

export default HomePage;
