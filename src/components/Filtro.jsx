import { Button } from "./ui/button";

function Filtro({categorias}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filtros</h3>
        <Button variant="ghost" size="sm" onClick={() => {}}>
          Limpiar
        </Button>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-medium">Categorías</h4>
        <div className="grid gap-2">
          {categorias.map((categoria) => (
            <div className="flex items-center gap-2" key={categoria.id}>
              <input type="checkbox" />
              <p>{categoria.nombre}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-medium">Precio</h4>
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
            type="number"
            name="min"
            placeholder="precio min."
          />
          <input
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
            type="number"
            name="max"
            placeholder="precio max."
          />
        </div>
      </div>
    </>
  );
}

export default Filtro;
