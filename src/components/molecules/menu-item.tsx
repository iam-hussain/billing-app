import React from "react";
import { Button } from "@/components/atoms/button";
import Icon, { IconKey } from "@/components/atoms/icon";
import clsx from "clsx";

function MenuItem({
  icon,
  label,
  minimize,
  active,
}: {
  icon: IconKey;
  label: string;
  minimize: Boolean;
  active: Boolean;
}) {
  return (
    <Button variant={"ghost"} className={"flex justify-end gap-2 font-normal"}>
      <div
        className={clsx({
          hidden: minimize,
        })}
      >
        {label}
      </div>
      <Icon name={icon} className="h-5 w-5" />
    </Button>
  );
}

export default MenuItem;
