import LoginForm from "@/components/forms/login-form";
import { Button } from "@/components/atoms/button";
import { CategoriesSlide } from "@/components/organisms/categories-slide";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-paper w-full h-full row-span-full col-span-7 p-2">
        <CategoriesSlide />
        <p>checking</p>
      </div>
      <div className="row-span-full col-span-7 w-full h-full">
        <p>Hello</p>
      </div>
    </>
  );
}
