import LoginForm from "@/components/forms/login-form";
import { Button } from "@/components/atoms/button";
import { CategoriesSlide } from "@/components/organisms/categories-slide";

export default function Home() {
  return (
    <div className="flex w-full gap-4 md:flex-row flex-col">
      <div className="grow flex flex-col w-[500px] max-w-[calc(100vw-2rem)]">
        <CategoriesSlide />
        <p>checking</p>
      </div>
      <div className="md:w-5/12 w-full">
        <p>Hello</p>
      </div>
    </div>
  );
}
