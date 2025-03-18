"use client";
import Image from "next/image";
import { useState } from "react";

function ImagenesProducto({ imagenes }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={imagenes[index]}
          alt="Imagen del producto"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
          priority={true} // Priorizar la carga de la imagen por ser Largest Contentful Paint (LCP)
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {imagenes.map((imagen, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={imagen}
              alt="Miniatura del producto"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagenesProducto;
