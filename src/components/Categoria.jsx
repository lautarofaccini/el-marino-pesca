import Image from "next/image";
import Link from "next/link";

function Categoria({ categoria }) {
  return (
    <div className="rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <Link
        className="overflow-hidden transition-all hover:shadow-md"
        href={
          categoria.slug
            ? "/productos?categoria=" + categoria.slug
            : "/productos"
        }
      >
        <div className="relative h-32">
          <Image
            src={categoria.imagen}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="p-2 text-lg font-bold text-white">
              {categoria.nombre}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Categoria;
