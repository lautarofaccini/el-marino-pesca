import { getProductos } from "@/libs/get-productos";
import Producto from "./Producto";

async function ListaProductos({ categoria }) {
  const datos = await getProductos(categoria);

  const productos = datos.productos;
  if (productos.length === 0) return null;
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ListaProductos;
