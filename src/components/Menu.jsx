"use client";

import { useState } from "react";
import Link from "next/link";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
      Menu
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px) flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Homepage</Link>
          <Link href="/">Homepage</Link>
          <Link href="/">Homepage</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
