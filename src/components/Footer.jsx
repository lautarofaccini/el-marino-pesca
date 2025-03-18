import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* ARRIBA */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* IZQUIERDA */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">COLO PESCA</div>
          </Link>
          <p>Barrio LaBarriada Mz 22 Casa 13, Formosa, Argentina</p>
          <span className="font-semibold">colopesca@gmail.com</span>
          <span className="font-semibold">3704 887766</span>
          <div className="flex gap-6">
            Contacto
            <Image src="/reel1.png" alt="" width={16} height={16} />
            <Image src="/reel1.png" alt="" width={16} height={16} />
            <Image src="/reel1.png" alt="" width={16} height={16} />
            <Image src="/reel1.png" alt="" width={16} height={16} />
            <Image src="/reel1.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex flex-col gap-8 ">
          <h1 className="font-medium text-lg">Comprar</h1>
          <Link href="">Ingresos</Link>
          <Link href="">Accesorios</Link>
          <Link href="/productos">Todos los productos</Link>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUSCRIBIRSE</h1>
          <p>Recibe información sobre nuevos ingresos y más!</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-red-400 text-white">UNIRSE</button>
          </div>
          <span className="font-semibold">Metodos de Pago</span>
          <div className="flex justify-between">
            <Image src="/reel2.png" alt="" width={40} height={20} />
            <Image src="/reel2.png" alt="" width={40} height={20} />
            <Image src="/reel2.png" alt="" width={40} height={20} />
            <Image src="/reel2.png" alt="" width={40} height={20} />
            <Image src="/reel2.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* ABAJO */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Colo Pesca</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Idioma</span>
            <span className="font-medium">Español</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Moneda</span>
            <span className="font-medium">$ ARS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
