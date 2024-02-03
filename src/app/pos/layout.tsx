"use client";

import { Container } from "@/components/atoms/container";
import SideMenu from "@/components/organisms/side-menu";
import TopMenu from "@/components/organisms/top-menu";
import { useFullScreenHandle, FullScreen } from "react-full-screen";

export default function POS({ children }: { children: React.ReactNode }) {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <Container variant={"screen"} display={"flex_col"}>
        <TopMenu onFullScreenClick={handle.enter} />
        <Container display={"flex_row"} className="grow w-full">
          <SideMenu />
          <section className="grow p-4">{children}</section>
        </Container>
      </Container>
    </FullScreen>
  );
}
