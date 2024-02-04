"use client";

import { Container } from "@/components/atoms/container";
import SideMenu from "@/components/organisms/side-menu";
import TopMenu from "@/components/organisms/top-menu";
import { useFullScreenHandle, FullScreen } from "react-full-screen";

export default function POS({ children }: { children: React.ReactNode }) {
  return (
    <Container variant={"screen"} display={"flex_col"} className="w-full">
      <TopMenu />
      <Container display={"flex_row"} className="grow w-full">
        <SideMenu />
        <section className="flex p-4 h-full grow md:flex-row flex-col">
          {children}
        </section>
      </Container>
    </Container>
  );
}
