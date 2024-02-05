import React from "react";
import clsx from "clsx";
import { extractClassNames } from "@/lib/utils";

type BrandSvgProps = {
  className?: string;
  fillClass?: string | string[];
};

function BrandSideBySide({ className, fillClass }: BrandSvgProps) {
  const [classOne, classTwo] = extractClassNames(fillClass);
  return (
    <svg
      viewBox="0 0 369.89473684210526 84.97971496882138"
      className={clsx(className)}
    >
      <g
        transform="matrix(1.023391812865497,0,0,1.023391812865497,-5.116959064327485,-8.792395708853737)"
        className={clsx({
          [classOne]: Boolean(classOne),
          "fill-primary ": !Boolean(classOne),
        })}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M85,40v-2.9c2.9-1,5-3.8,5-7.1c0-4.1-3.4-7.5-7.5-7.5H60c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10H17.5  c-4.1,0-7.5,3.4-7.5,7.5c0,3.3,2.1,6,5,7.1V40C9.5,40,5,44.5,5,50c0,5.5,4.5,10,10,10v25c0,1.4,1.1,2.5,2.5,2.5h65  c1.4,0,2.5-1.1,2.5-2.5V60c5.5,0,10-4.5,10-10C95,44.5,90.5,40,85,40z M15,55c-2.8,0-5-2.2-5-5s2.2-5,5-5V55z M50,17.5  c2.8,0,5,2.2,5,5H45C45,19.7,47.2,17.5,50,17.5z M80,82.5H20v-45h60V82.5z M82.5,32.5h-65c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5  h65c1.4,0,2.5,1.1,2.5,2.5S83.9,32.5,82.5,32.5z M85,55V45c2.8,0,5,2.2,5,5S87.8,55,85,55z"
        ></path>
      </g>
      <g
        transform="matrix(2.52615090697567,0,0,2.52615090697567,108.46338547791498,-16.97573356486895)"
        className={clsx({
          [classTwo || classOne]: Boolean(classTwo || classOne),
          "fill-bw-foreground ": !Boolean(classTwo || classOne),
        })}
      >
        <path d="M13.8 40 l0 -9.96 q0 -3.64 0.02 -7.12 t0.06 -7.12 l-3.56 24.2 l-2.68 0 l-3.52 -24.2 q0.04 3.64 0.06 7.12 t0.02 7.12 l0 9.96 l-2.8 0 l0 -32.92 l4.08 0 l3.48 25.72 l3.48 -25.72 l4.2 0 l0 32.92 l-2.84 0 z M21.775 40 l0 -32.92 l8.72 0 l0 3.08 l-5.68 0 l0 11.56 l4 0 l0 3.04 l-4 0 l0 12.24 l5.88 0 l0 3 l-8.92 0 z M43.55 40 l-0.72 -5.52 l-4.92 0 l-0.72 5.52 l-2.96 0 l4.52 -32.92 l3.56 0 l4.28 32.92 l-3.04 0 z M42.47 31.68 q-0.52 -4.24 -1.04 -8.38 t-1 -8.5 q-0.52 4.36 -1.06 8.5 t-1.1 8.38 l4.2 0 z M50.885 40 l0 -32.92 l3.04 0 l0 29.92 l5.88 0 l0 3 l-8.92 0 z M71.7 13.04 q0 -1.48 -0.6 -2.18 t-2.04 -0.7 l-2.08 0 l0 11.24 l2.12 0 q1.32 0 1.96 -0.68 t0.64 -2.2 l0 -5.48 z M63.94 40 l0 -32.92 l5.12 0 q2.88 0 4.26 1.42 t1.38 4.54 l0 5.4 q0 3.12 -1.36 4.52 t-4.24 1.4 l-2.12 0 l0 15.64 l-3.04 0 z M78.835 12.32 q0 -5.6 5.16 -5.6 q5.2 0 5.2 5.6 l0 22.44 q0 5.6 -5.2 5.6 q-5.16 0 -5.16 -5.6 l0 -22.44 z M86.155 12.32 q0 -2.52 -2.16 -2.52 q-2.12 0 -2.12 2.52 l0 22.44 q0 2.6 2.12 2.6 q2.16 0 2.16 -2.6 l0 -22.44 z M96.81 40 l0 -29.84 l-3.68 0 l0 -3.08 l10.36 0 l0 3.08 l-3.68 0 l0 29.84 l-3 0 z"></path>
      </g>
    </svg>
  );
}

export default BrandSideBySide;
