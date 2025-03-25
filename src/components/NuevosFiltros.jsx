"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

function NuevosFiltros() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="grid gap-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Filtros</h3>
            <Button variant="ghost" size="sm">
              Limpiar
            </Button>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium">Categorías</h4>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Checkbox />
                <Label>Hola</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox />
                <Label>Hola</Label>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NuevosFiltros;
