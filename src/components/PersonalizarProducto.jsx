function PersonalizarProducto() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Elegir color</h4>
      <ul className="flex items-center gap-3">
        {/* SELECCIONADO */}
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 ring-gray-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        {/* DISPONIBLE */}
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        {/* DESHABILITADO */}
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Elegir tamaño</h4>
      <ul className="flex items-center gap-3">
        {/* DISPONIBLE */}
        <li className="ring-1 ring-red-400 text-red-400 rounded-md py-1 px-4 text-sm cursor-pointer">
          Chico
        </li>
        {/* SELECCIONADO */}
        <li className="ring-1 ring-red-400 text-white bg-red-400 rounded-md py-1 px-4 text-sm cursor-pointer">
          Medio
        </li>
        {/* DESHABILITADO */}
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Grande
        </li>
      </ul>
    </div>
  );
}

export default PersonalizarProducto;
