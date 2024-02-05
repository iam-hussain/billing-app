import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { AspectRatio } from "@/components/atoms/aspect-ratio";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/atoms/button";

function CategoryCard({
  name,
  image,
  active = false,
  onlyText = true,
}: {
  name: string;
  image?: string;
  active?: Boolean;
  onlyText?: Boolean;
}) {
  return (
    <div className="flex bg-bw rounded-lg h-full w-full justify-start align-middle items-center gap-2 select-none">
      {!onlyText && (
        <>
          <Avatar className="cursor-pointer select-none rounded-lg">
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

      {onlyText && (
        <Button
          variant={"ghost"}
          className={clsx("text-sm w-auto rounded-lg", {
            "border-2 border-secondary text-secondary hover:bg-bw bg-secondary/10":
              active,
            "border-2 border-bw text-bw-foreground hover:border-accent":
              !active,
          })}
        >
          {name}
        </Button>
      )}
    </div>
  );
}

export default CategoryCard;
