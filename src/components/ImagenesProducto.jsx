"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, url: "/reel1.png" },
  { id: 2, url: "/reel2.png" },
  { id: 3, url: "/reel3.png" },
  { id: 4, url: "/reel4.png" },
];

function ImagenesProducto() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => (
          <div
            className="w-1/4 h-32 relative gap-4 cursor-pointer"
            key={image.id}
            onClick={() => setIndex(index)}
          >
            <Image
              src={image.url}
              alt=""
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
