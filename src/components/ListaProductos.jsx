import Producto from "./Producto";

function ListaProductos({ productos }) {
  if (productos.length === 0) return <div>No hay productos cargados</div>;

  return (
    <div>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default ListaProductos;
