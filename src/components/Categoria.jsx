import Image from "next/image";
import Link from "next/link";

function Categoria({ categoria }) {
  return (
    <Link
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
      href={categoria.slug ? "/productos?categoria=" + categoria.slug : "/productos"}
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src={categoria.imagen}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="mt-8 font-light text-xl tracking-wide">
        {categoria.nombre}
      </h1>
    </Link>
  );
}

export default Categoria;
