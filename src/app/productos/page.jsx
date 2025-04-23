"use client";
export const dynamic = 'force-dynamic';  // ← fuerza SSR en cada request

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filtro from "@/components/Filtro";
import ListaProductos from "@/components/ListaProductos";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, Filter } from "lucide-react";
import Paginacion from "@/components/Paginacion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const ProductosPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pagina = searchParams.get("page") || 1;
  const busqueda = searchParams.get("busqueda");
  const sortBy = searchParams.get("sort");
  const filtroCat = searchParams.get("categoria");
  // Usamos valor por defecto "" para evitar null
  const filtroMin = searchParams.get("filtroMin") || "";
  const filtroMax = searchParams.get("filtroMax") || "";

  const [productos, setProductos] = useState([]);
  const [pagination, setPagination] = useState({ pageCount: 0 });
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para actualizar la URL con nuevos parámetros
  // Aquí forzamos el orden: primero filtroMin, luego filtroMax y después el resto
  const actualizarUrl = (nuevosParams) => {
    const params = new URLSearchParams();

    // Agregamos manualmente filtroMin y filtroMax si existen
    if (nuevosParams.filtroMin !== undefined) {
      if (nuevosParams.filtroMin)
        params.set("filtroMin", nuevosParams.filtroMin);
      else params.delete("filtroMin");
    } else if (filtroMin) {
      params.set("filtroMin", filtroMin);
    }

    if (nuevosParams.filtroMax !== undefined) {
      if (nuevosParams.filtroMax)
        params.set("filtroMax", nuevosParams.filtroMax);
      else params.delete("filtroMax");
    } else if (filtroMax) {
      params.set("filtroMax", filtroMax);
    }

    // Para el resto de los parámetros, conservamos el orden que queramos
    const otrosParams = {
      page: nuevosParams.page,
      categoria:
        nuevosParams.categoria !== undefined
          ? nuevosParams.categoria
          : filtroCat,
      sort: nuevosParams.sort !== undefined ? nuevosParams.sort : sortBy,
      busqueda:
        nuevosParams.busqueda !== undefined ? nuevosParams.busqueda : busqueda,
    };

    Object.entries(otrosParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/productos?${params.toString()}`);
  };

  // Funciones para manejar cambios en sort y filtro de categoría
  const handleSortChange = (value) => {
    actualizarUrl({ sort: value });
  };

  const handleFiltroCatChange = (value) => {
    actualizarUrl({ categoria: value });
  };

  // Función para manejar el envío de los filtros de precio (mín y máx)
  const handlePrecioSubmit = (min, max) => {
    actualizarUrl({ filtroMin: min, filtroMax: max });
  };

  useEffect(() => {
    async function fetchProductos() {
      const queryParams = new URLSearchParams();
      queryParams.set("page", pagina);
      if (filtroCat) queryParams.set("categoria", filtroCat);
      if (sortBy) queryParams.set("sort", sortBy);
      if (busqueda) queryParams.set("busqueda", busqueda);
      if (filtroMin) queryParams.set("filtroMin", filtroMin);
      if (filtroMax) queryParams.set("filtroMax", filtroMax);

      const res = await fetch(`/api/productos?${queryParams.toString()}`);
      const data = await res.json();
      setProductos(data.productos);
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
    // Si aún no se han cargado categorías, se hace el fetch
    if (categorias.length === 0) fetchCategorias();
    setLoading(false);
  }, [pagina, searchParams]);

  // Función para limpiar filtros (redirige a la URL base)
  const limpiarFiltros = () => {
    router.push("/productos");
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="pb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-medium text-blue-400 hover:underline"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Volver al inicio
      </Link>
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl">Productos</h1>
            <p className="text-muted-foreground">
              {productos.length} productos encontrados
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Select value={sortBy || ""} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="createdAt:desc">Más recientes</SelectItem>
                <SelectItem value="createdAt:asc">Más antiguo</SelectItem>
                <SelectItem value="precio:asc">
                  Precio: menor a mayor
                </SelectItem>
                <SelectItem value="precio:desc">
                  Precio: mayor a menor
                </SelectItem>
              </SelectContent>
            </Select>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] px-6">
                <div className="grid gap-6 py-10">
                  <Filtro
                    categorias={categorias}
                    filtroCat={filtroCat || ""}
                    onFiltroCatChange={handleFiltroCatChange}
                    onPrecioRangeChange={handlePrecioSubmit}
                    filtroMin={filtroMin}
                    filtroMax={filtroMax}
                    limpiarFiltros={limpiarFiltros}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-4">
          {/* FILTROS - ESCRITORIO */}
          <div className="hidden md:block">
            <div className="sticky top-24 grid gap-6">
              <Filtro
                categorias={categorias}
                filtroCat={filtroCat || ""}
                onFiltroCatChange={handleFiltroCatChange}
                onPrecioRangeChange={handlePrecioSubmit}
                filtroMin={filtroMin}
                filtroMax={filtroMax}
                limpiarFiltros={limpiarFiltros}
              />
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
                <Button
                  variant="outline"
                  className="mt-4 cursor-pointer"
                  onClick={limpiarFiltros}
                >
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
