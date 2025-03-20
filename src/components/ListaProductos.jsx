import { getProductos } from "@/libs/get-productos";
import Producto from "./Producto";
import Paginacion from "./Paginacion";

async function ListaProductos({ categoria }) {
  const { productos, pagination } = await getProductos(categoria);
  console.log(pagination);
  
  if (productos.length === 0) return <div>No hay productos cargados</div>;

  return (
    <div>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      <Paginacion totalPages={pagination.pageCount} />
    </div>
  );
}

export default ListaProductos;
