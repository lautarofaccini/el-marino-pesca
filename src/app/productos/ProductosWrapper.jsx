"use client";

import { Suspense } from "react";
import ProductosPage from "./ProductosPageInner";

export default function ProductosWrapper() {
  return (
    <Suspense fallback={<p className="p-8">Cargando productos...</p>}>
      <ProductosPage />
    </Suspense>
  );
}
