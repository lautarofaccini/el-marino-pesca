"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImagenesProducto({ imagenes }) {
  const [index, setIndex] = useState(0);

  const handlePrevImage = () => {
    setIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-row items-start gap-4">
      {/* Imagen Grande */}
      <div className="relative overflow-hidden aspect-square flex-[5]">
        <Image
          src={imagenes[index] || "/productoPlaceholder.jpg"}
          alt={`Imagen del producto ${index}`}
          fill
          className="object-cover rounded-md border"
          priority
        />
        {imagenes.length > 1 && (
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Imagen anterior</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Imagen siguiente</span>
            </Button>
          </div>
        )}
      </div>

      {/* Imagenes Pequeñas */}
      {imagenes.length > 1 && (
        <div className="flex flex-col overflow-y-auto gap-2 pr-2 flex-[1] max-h-[500px]">
          {imagenes.map((imagen, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-full aspect-square overflow-hidden border-2 transition-colors ${
                i === index ? "border-primary" : "border-transparent"
              }`}
            >
              <Image
                src={imagen || "/productoPlaceholder.jpg"}
                alt={`Miniatura del producto ${i + 1}`}
                fill
                className="object-cover border rounded-md"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImagenesProducto;
