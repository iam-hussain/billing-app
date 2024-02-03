"use client";

import { Container } from "@/components/atoms/container";
import Icon, { IconKey } from "@/components/atoms/icon";
import { Button } from "@/components/atoms/button";
import clsx from "clsx";
import { useActionStore } from "@/stores/actionSlice";
import BrandSideBySide from "../atoms/brand/side-by-side";
import UserMenu from "@/components/organisms/user-menu";
import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";

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
    icon: "RiAccountPinCircleFill",
    label: "Account",
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

function TopMenu({}: {}) {
  const minimize = useActionStore((state) => state.isSideBarOpen);
  const setMinimize = useActionStore((state) => state.setSideBarOpen);

  return (
    <Container
      className={"border-b-2 border-secondary w-full pr-6 h-[52px]"}
      display={"flex_row_between"}
    >
      <div className="flex justify-center align-middle items-center">
        <Button
          variant={"ghost"}
          className={clsx("flex font-normal md:hidden", {})}
          onClick={() => setMinimize()}
        >
          <Icon
            name={minimize ? "HiMenuAlt2" : "HiMenuAlt1"}
            className={"h-5 w-5"}
          />
        </Button>
        <BrandSideBySide
          className={clsx("h-[40px] py-2 md:ml-0 ml-2", {
            "w-auto md:w-[240px]": !minimize,
            "w-auto md:pl-6": minimize,
          })}
        />
      </div>

      <div className="flex justify-center align-middle items-center gap-2">
        <ThemeModeToggle />
        <UserMenu />
      </div>
    </Container>
  );
}

export default TopMenu;
