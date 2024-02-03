import React from "react";
import { Button } from "@/components/patterns/button";
import Icon, { IconKey } from "@/components/patterns/icon";

function MenuItem({ icon, label }: { icon: IconKey; label: string }) {
  return (
    <Button variant={"ghost"} className="flex justify-end gap-2 font-normal">
      <span>{label}</span>
      <Icon name={icon} className="h-6 w-6" />
    </Button>
  );
}

export default MenuItem;
