import Producto from "./Producto";

function ListaProductos({ productos }) {
  if (productos.length === 0) return <div>No hay productos cargados</div>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ListaProductos;
