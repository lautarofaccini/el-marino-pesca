"use client"

import dynamic from "next/dynamic";

const ProductosWrapper = dynamic(
  () => import("./ProductosWrapper"),
  {
    ssr: false, // Evita que se renderice en SSR ya que depende de `useSearchParams`
  }
);

export default function ProductosPage() {
  return <ProductosWrapper />;
}
