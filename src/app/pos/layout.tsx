import { Container } from "@/components/atoms/container";
import SideMenu from "@/components/organisms/side-menu";
import TopMenu from "@/components/organisms/top-menu";

export default function POS({ children }: { children: React.ReactNode }) {
  return (
    <Container variant={"screen"} display={"flex_col"}>
      <TopMenu />
      <Container display={"flex_row"} className="grow w-full">
        <SideMenu />
        <section className="grow p-4">{children}</section>
      </Container>
    </Container>
  );
}
