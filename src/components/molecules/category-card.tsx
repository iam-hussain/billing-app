import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { AspectRatio } from "@/components/atoms/aspect-ratio";
import Image from "next/image";

function CategoryCard({
  name,
  image,
  onlyText = true,
}: {
  name: string;
  image?: string;
  onlyText?: Boolean;
}) {
  return (
    <div className="p-2 flex bg-secondary text-secondary-foreground rounded-lg h-full w-full justify-start align-middle items-center gap-2 select-none">
      {!onlyText && (
        <>
          <Avatar className="cursor-pointer select-none bg-secondary rounded-lg">
            <AspectRatio ratio={1 / 1} className="h-full">
              {image ? (
                <Image
                  src={image}
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              ) : (
                <AvatarFallback className=" text-4xl ">
                  {name.slice(0, 1)}
                </AvatarFallback>
              )}
            </AspectRatio>
          </Avatar>
          <div className="flex flex-col justify-center align-middle items-start">
            <span className="text-sm w-auto">{name}</span>
            <span className="text-xs w-auto">20 Items</span>
          </div>
        </>
      )}

      {onlyText && <span className="text-sm w-auto px-2">{name}</span>}
    </div>
  );
}

export default CategoryCard;
