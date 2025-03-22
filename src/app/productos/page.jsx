import Filtro from "@/components/Filtro";
import ListaProductos from "@/components/ListaProductos";
import Paginacion from "@/components/Paginacion";
import { getProductos } from "@/libs/get-productos";

async function ProductosPage({ searchParams }) {
  const { page: pagina } = await searchParams;
  const { productos, pagination } = await getProductos(undefined, pagina);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* FILTRO */}
      <Filtro />
      {/* PRODUCTOS */}
      <h1 className="mt-12 text-xl font-semibold">Cañas, reeles y más!</h1>
      <ListaProductos productos={productos} />
      <Paginacion totalPages={pagination.pageCount} />
    </div>
  );
}

export default ProductosPage;
