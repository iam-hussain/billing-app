import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { AspectRatio } from "@/components/atoms/aspect-ratio";

function ProductCard({
  id,
  name,
  image,
  deck,
  price,
  active = false,
}: {
  id?: string;
  name: string;
  image?: string;
  deck?: string;
  price?: string;
  active?: Boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col h-full w-full align-middle items-center border rounded-lg px-2 py-4 bg-bw cursor-pointer text-center hover:bg-secondary/20",
        {
          "justify-center": !image,
          "justify-start": image,
        }
      )}
    >
      {image && (
        <AspectRatio ratio={4 / 3} className="h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      )}
      <h5 className="text-base font-semibold">{name || ""}</h5>
      <p className="text-sm text-one-line">{deck || ""}</p>
      <p className="text-sm">{price || "20 ₹"}</p>
    </div>
  );
}

export default ProductCard;
