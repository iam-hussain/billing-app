import LoginForm from "@/components/forms/login-form";
import { Button } from "@/components/atoms/button";
import { CategoriesSlide } from "@/components/organisms/categories-slide";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-7 col-span-12 p-2">
        <CategoriesSlide />
        <p>checking</p>
      </div>
      <div className="md:row-span-full row-start-2 md:col-span-7 col-span-12 w-full h-full">
        <p>Hello</p>
      </div>
    </>
  );
}
