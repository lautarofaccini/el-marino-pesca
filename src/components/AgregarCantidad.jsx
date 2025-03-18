"use client";
import { useState } from "react";

function AgregarCantidad({stock}) {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidad = (op) => {
    if ((op === -1 && cantidad > 1) || (op === 1 && cantidad < stock)) {
      setCantidad(cantidad + op);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Elige la cantidad</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleCantidad(-1)}
            >
              -
            </button>
            {cantidad}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleCantidad(1)}
            >
              +
            </button>
          </div>
          {stock < 5 && (
            <div>
              Quedan solo <span className="text-orange-500">{stock}</span>{" "}
              unidades!
            </div>
          )}
        </div>
        <button className="w-36 text-sm rounded-3xl cursor-pointer ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default AgregarCantidad;
