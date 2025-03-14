import Image from "next/image";
import Link from "next/link";

function ListaProductos() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel1.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 1</span>
          <span className="font-semibold">$18</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel3.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel4.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 2</span>
          <span className="font-semibold">$28</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion acertada</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel1.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 1</span>
          <span className="font-semibold">$18</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel3.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel4.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 2</span>
          <span className="font-semibold">$28</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion acertada</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel3.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel4.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 2</span>
          <span className="font-semibold">$28</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion acertada</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel3.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel4.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 2</span>
          <span className="font-semibold">$28</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion acertada</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/reel3.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/reel4.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Reel 2</span>
          <span className="font-semibold">$28</span>
        </div>
        <div className="text-sm to-gray-500">Descripcion acertada</div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Ver
        </button>
      </Link>
    </div>
  );
}

export default ListaProductos;
