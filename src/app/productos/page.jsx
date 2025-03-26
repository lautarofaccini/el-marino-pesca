"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Filtro from "@/components/Filtro";
import ListaProductos from "@/components/ListaProductos";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import Paginacion from "@/components/Paginacion";

const ProductosPage = () => {
  const searchParams = useSearchParams();
  const pagina = searchParams.get("page") || 1;
  const categoria = searchParams.get("categoria");
  const sort = searchParams.get("sort");
  const busqueda = searchParams.get("busqueda");

  const [productos, setProductos] = useState([]);
  const [pagination, setPagination] = useState({ pageCount: 0 });
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProductos() {
      const queryParams = new URLSearchParams();
      queryParams.set("page", pagina);
      if (categoria) queryParams.set("categoria", categoria);
      if (sort) queryParams.set("sort", sort);
      if (busqueda) queryParams.set("busqueda", busqueda);

      const res = await fetch(`/api/productos?${queryParams.toString()}`);
      const data = await res.json();
      setProductos(data.productos);
      console.log(data.productos)
      setProductosFiltrados(data.productos);
      setPagination(data.pagination);
    }
    async function fetchCategorias() {
      const res = await fetch(`/api/categorias`);
      const data = await res.json();
      setCategorias(data);
    }
    setLoading(true);
    fetchProductos();
    fetchCategorias();
    
    setLoading(false);
  }, [pagina, busqueda]);

  // Función para limpiar filtros, redirigiendo a la versión sin query params
  const limpiarFiltros = () => {
    window.location.href = "/productos";
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl">Productos</h1>
            <p className="text-muted-foreground">
              {productos.length} productos encontrados
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <select
              className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]"
              name="Orden"
              id=""
            >
              <option>Ordenar por</option>
              <option value="">Precio (Menor a Mayor)</option>
              <option value="">Precio (Mayor a Menor)</option>
              <option value="">Más nuevo</option>
              <option value="">Más viejo</option>
            </select>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] px-6">
                <div className="grid gap-6 py-10">
                  <Filtro categorias={categorias} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-4">
          {/* FILTROS - ESCRITORIO */}
          <div className="hidden md:block">
            <div className="sticky top-24 grid gap-6">
              <Filtro categorias={categorias} />
            </div>
          </div>
          {/* PRODUCTOS */}
          <div className="md:col-span-3">
            {productosFiltrados.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64">
                <h3 className="text-lg font-medium">
                  No se encontraron productos
                </h3>
                <p className="text-muted-foreground">
                  Intenta con otros filtros o términos de búsqueda
                </p>
                <Button variant="outline" className="mt-4" onClick={() => {}}>
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <ListaProductos productos={productosFiltrados} />
            )}
          </div>
        </div>
        <Paginacion totalPages={pagination.pageCount} />
      </div>
    </div>
  );
};

export default ProductosPage;
