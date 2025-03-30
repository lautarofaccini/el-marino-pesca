import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function Filtro({ categorias, filtroCat, onFiltroCatChange, limpiarFiltros }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filtros</h3>
        <Button variant="ghost" size="sm" onClick={limpiarFiltros}>
          Limpiar
        </Button>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-medium">Categorías</h4>
        <div className="grid gap-2">
          <Select value={filtroCat} onValueChange={onFiltroCatChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((categoria) => (
                <SelectItem value={categoria.slug} key={categoria.id}>
                  {categoria.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
