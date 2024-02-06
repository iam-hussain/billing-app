import React from "react";
import clsx from "clsx";

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
        "flex flex-col h-full w-full justify-center align-middle items-center border rounded-lg px-2 py-4 bg-bw cursor-pointer text-center hover:bg-secondary/20",
        {}
      )}
    >
      <h5 className="text-md font-semibold">{name || ""}</h5>
      <p className="text-sm">{deck || ""}</p>
      <p className="text-sm">{price || "20 ₹"}</p>
    </div>
  );
}

export default ProductCard;
