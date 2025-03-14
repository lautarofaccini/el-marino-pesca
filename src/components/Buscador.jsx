"use client";

import { useRouter } from "next/navigation";

function Buscador() {
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (name) {
      router.push(`/productos?name=${name}`);
    }
  }

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        className="flex-1 bg-transparent outline-none"
        type="text"
        name="name"
        placeholder="Buscar..."
      />
      <button className="cursor-pointer">Buscar</button>
    </form>
  );
}

export default Buscador;
