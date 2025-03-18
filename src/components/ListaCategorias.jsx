import { getCategorias } from "@/libs/get-categorias";
import Categoria from "./Categoria";

async function ListaCategorias() {
  const categorias = await getCategorias();
  if (categorias.length === 0) return null;
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

export default ListaCategorias;
