import Image from "next/image";
import Link from "next/link";
import React from "react";
//TODO: Agregar una etiqueta de AGOTADO si el stock es 0
function Producto({ producto }) {
  return (
    <Link
      className="rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
      href={"/" + producto.slug}
    >
      <div className="relative h-48">
        {
          //Si existe una segunda imagen, mostrarla
          producto.imagenes[1] && (
            <Image
              src={producto.imagenes[1]}
              alt=""
              fill
              sizes="25vw"
              priority={true}
              className="absolute object-cover rounded-md opacity-0 z-10 hover:opacity-100 transition-opacity easy duration-500"
            />
          )
        }
        <Image
          src={producto.imagenes[0]}
          alt=""
          fill
          sizes="25vw"
          priority={true}
          className="absolute object-cover rounded-md"
        />
        {/* Mostrar etiqueta de nuevo, descuento, etc */}
        {producto.stock <= 2 && (
          <div className="absolute top-2 right-2 bg-blue-400 text-white text-xs px-2 py-1 rounded">
            Ultimos Productos
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium line-clamp-1">{producto.nombre}</h3>
        <p className="mt-2 font-bold text-blue-400">
          $
          {producto.precio.toLocaleString("es-AR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </Link>
  );
}

export default Producto;
