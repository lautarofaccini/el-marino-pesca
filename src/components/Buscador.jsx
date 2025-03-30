"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

function Buscador() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      const slug = input
        .normalize("NFD") // separa tildes y diacríticos
        .replace(/[\u0300-\u036f]/g, "") // elimina diacríticos
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-"); // reemplaza espacios por guiones

      router.push(`/productos?busqueda=${encodeURIComponent(slug)}`);
    } else {
      router.push("/productos");
    }
  }

  function handleClear() {
    setInput("");
  }

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-200 p-2 rounded-xl flex-1"
      onSubmit={handleSearch}
    >
      <input
        className="flex-1 bg-transparent outline-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar productos..."
      />
      {input && (
        <Button variant="ghost" size="icon" onClick={handleClear}>
          <X className="w-4 h-4" />
          <span className="sr-only">Limpiar búsqueda</span>
        </Button>
      )}
      <button className="cursor-pointer" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
