import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-7 col-span-12 p-2">
        <CategoriesSlide />
        <ProductList />
      </div>
      <div className="md:row-span-full row-start-2 md:col-span-7 col-span-12 w-full h-full">
        <p>Hello</p>
      </div>
    </>
  );
}
