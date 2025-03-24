import { getCategorias } from "@/libs/get-categorias";
import Categoria from "./Categoria";

async function ListaCategorias() {
  const categorias = await getCategorias();
  if (categorias.length === 0) return <div>No hay categorías cargadas</div>;
  const noCategoria = {
    nombre: "Todos los productos",
    imagen: "http://localhost:1337/uploads/canas_05fb6ded91.jpg",
  };
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <Categoria categoria={noCategoria} />
      {categorias.map((categoria) => (
        <Categoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
}

export default ListaCategorias;
