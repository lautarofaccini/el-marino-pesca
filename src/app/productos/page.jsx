import Filtro from "@/components/Filtro";
import ListaProductos from "@/components/ListaProductos";
import Paginacion from "@/components/Paginacion";
import { getProductos } from "@/libs/get-productos";

async function ProductosPage({ searchParams }) {
  const { page: pagina } = await searchParams;
  const { productos, pagination } = await getProductos(undefined, pagina);

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl">Productos</h1>
            <p className="text-muted-foreground">
              {productos.length} productos encontrados
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
              <select
                className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                name="Orden"
                id=""
              >
                <option>Ordenar por</option>
                <option value="">Precio (Menor a Mayor)</option>
                <option value="">Precio (Mayor a Menor)</option>
                <option value="">Más nuevo</option>
                <option value="">Más viejo</option>
              </select>
          </div>
        </div>
        {/* FILTRO */}
        <Filtro />
        {/* PRODUCTOS */}
        <ListaProductos productos={productos} />
        <Paginacion totalPages={pagination.pageCount} />
      </div>
    </div>
  );
}

export default ProductosPage;
