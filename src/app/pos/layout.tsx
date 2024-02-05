"use client";

import { Container } from "@/components/atoms/container";
import SideMenu from "@/components/organisms/side-menu";
import TopMenu from "@/components/organisms/top-menu";
import { useFullScreenHandle, FullScreen } from "react-full-screen";

export default function POS({ children }: { children: React.ReactNode }) {
  return (
    <Container variant={"screen"} className="grid grid-first-auto gap-0">
      <TopMenu className="col-span-full row-span-1" />
      {/* <Container className="grow w-full"> */}
      <SideMenu className="md:row-start-2 md:row-end-13 md:col-span-1 absolute md:relative -left-full md:left-auto top-[56px] md:top-auto z-50" />
      <section className="grid grid-cols-12 md:grid-rows-12 grid-rows-2 h-full w-ful row-start-2 row-end-13 col-start-2 col-end-13">
        {children}
      </section>
      {/* </Container> */}
    </Container>
  );
}
