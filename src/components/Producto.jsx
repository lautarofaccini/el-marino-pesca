import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Producto({ producto }) {
  return (
    <Link
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      href={"/" + producto.slug}
    >
      <div className="relative w-full h-80">
        {
          //Si existe una segunda imagen, mostrarla
          producto.imagenes[1] && (
            <Image
              src={producto.imagenes[1]}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md opacity-0 z-10 hover:opacity-100 transition-opacity easy duration-500"
            />
          )
        }
        <Image
          src={producto.imagenes[0]}
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">{producto.nombre}</span>
        <span className="font-semibold">${producto.precio}</span>
      </div>
      <BlocksRenderer
        className="text-sm to-gray-500"
        content={producto.descripcion}
      />
      <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
        Ver
      </button>
    </Link>
  );
}

export default Producto;
