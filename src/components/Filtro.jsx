"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { ChevronRight } from "lucide-react";

function Filtro({
  categorias,
  filtroCat,
  onFiltroCatChange,
  onPrecioRangeChange,
  filtroMin,
  filtroMax,
  limpiarFiltros,
}) {
  // Estados locales para los inputs de precio; se inicializan a cadena vacía si no hay valor
  const [localMin, setLocalMin] = useState(filtroMin || "");
  const [localMax, setLocalMax] = useState(filtroMax || "");
  const [error, setError] = useState("");

  // Sincroniza los estados locales cuando cambian los valores en el padre
  useEffect(() => {
    setLocalMin(filtroMin || "");
  }, [filtroMin]);

  useEffect(() => {
    setLocalMax(filtroMax || "");
  }, [filtroMax]);

  // Manejadores simples: actualizar el estado sin restricciones para permitir borrar
  const handleMinChange = (e) => {
    setLocalMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setLocalMax(e.target.value);
  };

  // Al presionar "Enviar", se verifica si los valores son negativos
  const handleEnviarPrecios = () => {
    const minNumber = Number(localMin);
    const maxNumber = Number(localMax);
    if (minNumber < 0 || maxNumber < 0) {
      setError("Los valores no pueden ser negativos");
      return;
    }
    setError("");
    onPrecioRangeChange(localMin, localMax);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filtros</h3>
        <Button
          className="hover:cursor-pointer hover:underline"
          variant="ghost"
          size="sm"
          onClick={limpiarFiltros}
        >
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
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <Input
            type="number"
            name="min"
            placeholder="precio min."
            value={localMin}
            onChange={handleMinChange}
          />
          <Input
            type="number"
            name="max"
            placeholder="precio max."
            value={localMax}
            onChange={handleMaxChange}
          />
          <Button
            onClick={handleEnviarPrecios}
            size="sm"
            className="cursor-pointer"
          >
            <ChevronRight />
          </Button>
        </div>
        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </div>
    </>
  );
}

export default Filtro;
