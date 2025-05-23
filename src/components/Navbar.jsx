import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Buscador from "./Buscador";
import NavIcons from "./NavIcons";

function Navbar() {
  const nombre = "EL MARINO PESCA";
  //TODO: Al compactar, mostrar solo barra de busqueda, menu, carrito y logo opcional
  //LOGO        Carrito
  //menu    Busqueda
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between gap-4 md:hidden">
        <Link className="flex items-center gap-3" href="/">
          <Image src="/logo.png" alt="" width={30} height={30} />
        </Link>
        <Buscador />
      </div>
      {/* PANTALLAS MAS GRANDES */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* IZQUIERDA */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link className="flex items-center gap-3" href="/">
            <Image src="/logo.png" alt="" width={30} height={30} />
            <div className="text-2xl tracking-wide">{nombre}</div>
          </Link>
          {/* Agregar links de cosas como /productos */}
        </div>
        {/* DERECHA */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Buscador />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
