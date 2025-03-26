"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Buscador() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      router.push(`/productos?busqueda=${encodeURIComponent(input.trim())}`);
    }
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
      <button className="cursor-pointer" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
