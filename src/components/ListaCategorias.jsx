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
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Categoria categoria={noCategoria} />
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

export default ListaCategorias;
