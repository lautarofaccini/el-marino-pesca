import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full h-[60vh] bg-blue-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cana3.png"
          alt="Fishing equipment"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full px-4 py-16 text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Pescador Pro
        </h1>
        <p className="max-w-md mt-4 text-lg text-muted-foreground">
          Equipamiento de pesca de alta calidad para pescadores exigentes
        </p>
        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          <Link
            href="/productos"
            className="ring-1 ring-blue-400 text-white bg-blue-400 inline-flex text-sm font-medium rounded-md px-8 items-center justify-center"
          >
            Ver Productos
            <ShoppingBag className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/categorias"
            className="ring-1 ring-blue-400 text-blue-400 inline-flex text-sm font-medium rounded-md px-8 items-center justify-center h-11"
          >
            Explorar Categorías
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
