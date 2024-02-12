import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logoTextVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const logoIconVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const logoRootVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoTextVariants> {
  asChild?: boolean;
}

const Logo = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, size, asChild = false, ...props }) => {
    return (
      <div
        className={cn(logoRootVariants({ variant, size, className }))}
        {...props}
      >
        <span className="w-auto col-span-2 m-auto ml-0 font-display font-thin text-xl ">
          QuickDine
        </span>
      </div>
    );
  }
);

Logo.displayName = "Logo";

export { Logo, logoTextVariants, logoIconVariants };
