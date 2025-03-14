import Filtro from "@/components/Filtro";
import ListaProductos from "@/components/ListaProductos";

function ProductosPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* FILTRO */}
      <Filtro />
      {/* PRODUCTOS */}
      <h1 className="mt-12 text-xl font-semibold">Cañas, reeles y más!</h1>
      <ListaProductos />
    </div>
  );
}

export default ProductosPage;
