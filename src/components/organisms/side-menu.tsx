"use client";

import { Container } from "@/components/atoms/container";
import { Separator } from "@/components/atoms/separator";
import Icon, { IconKey } from "@/components/atoms/icon";
import MenuItem from "@/components/molecules/menu-item";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Button } from "@/components/atoms/button";
import clsx from "clsx";
import { useActionStore } from "@/stores/actionSlice";

type Menu = {
  icon: IconKey;
  label: string;
};

const AppMenus: Menu[] = [
  {
    icon: "MdDashboard",
    label: "Dashboard",
  },
  {
    icon: "BsPrinterFill",
    label: "Billing / Orders",
  },
  {
    icon: "SiAirtable",
    label: "Table Orders",
  },
  {
    icon: "MdSoupKitchen",
    label: "Kitchen Display",
  },
  {
    icon: "FaCartShopping",
    label: "Customer Display",
  },
];

const SettingMenus: Menu[] = [
  {
    icon: "FaStore",
    label: "Store",
  },
  {
    icon: "MdEventAvailable",
    label: "Availability",
  },
  {
    icon: "IoFastFoodSharp",
    label: "Products",
  },
  {
    icon: "FaTags",
    label: "Tags",
  },
];

function SideMenu({}: {}) {
  const minimize = useActionStore((state) => state.isSideBarOpen);
  const setMinimize = useActionStore((state) => state.setSideBarOpen);

  return (
    <Container
      className={clsx(
        "border-r-2 border-secondary h-full pb-8 relative overflow-hidden top-[52px] md:top-0 z-50 bg-background",
        {
          "absolute md:relative md:left-0 -left-[54px] md:w-[52px] w-auto":
            minimize,
          "absolute md:relative w-[240px] px-4 left-0": !minimize,
        }
      )}
      display={"flex_col"}
    >
      <Button
        variant={"ghost"}
        className={clsx("md:flex font-normal hidden m-auto mr-0 mt-2", {
          // "absolute top-3 right-4": !minimize,
        })}
        onClick={() => setMinimize()}
      >
        <Icon
          name={minimize ? "HiMenuAlt2" : "HiMenuAlt1"}
          className={"h-5 w-5"}
        />
      </Button>
      <Container
        className={clsx("text-center mt-5", {
          hidden: minimize,
        })}
      >
        <p className="text-md font-semibold pb-1">TastyTidbits Tavern</p>
        <p className="text-xs text-slate-600">
          1234 NW Bobcat Lane, St. Robert, MO 65584-5678
        </p>
      </Container>

      <Separator
        className={clsx("my-4", {
          // "mb-28": minimize,
        })}
      />
      <ScrollArea className="grow w-full flex justify-end">
        <Container className="flex flex-col gap-2 text-right">
          <p
            className={clsx("text-base font-semibold px-4 py-2", {
              hidden: minimize,
            })}
          >
            Applications
          </p>
          {AppMenus.map((each, key) => (
            <MenuItem minimize={minimize} active={false} {...each} key={key} />
          ))}
        </Container>
        <Separator className="my-4" />
        <Container className="flex flex-col gap-2 text-right">
          <p
            className={clsx("text-base font-semibold px-4 py-2", {
              hidden: minimize,
            })}
          >
            Settings
          </p>
          {SettingMenus.map((each, key) => (
            <MenuItem minimize={minimize} active={false} {...each} key={key} />
          ))}
        </Container>
      </ScrollArea>
    </Container>
  );
}

export default SideMenu;
