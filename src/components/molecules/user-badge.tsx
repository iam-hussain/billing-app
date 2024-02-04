import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";

function UserBadge({ name, image }: { name: string; image: string }) {
  return (
    <>
      {/* <div
        className={clsx(
          "flex flex-col text-secondary-foreground justify-center align-middle items-end"
        )}
      >
        <p className="text-sm">{name}</p>
      </div> */}
      <Avatar className="cursor-pointer select-none bg-secondary-foreground h-8 w-8">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-secondary-foreground text-secondary text-sm">
          {name.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    </>
  );
}

export default UserBadge;
