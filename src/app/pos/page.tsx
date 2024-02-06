import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";

export default function Home() {
  return (
    <>
      <div className="grid grid-first-1fr bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-7 col-span-12 p-4 gap-y-6">
        <CategoriesSlide className="row-start-1" />
        <ProductList className="row-start-2" />
      </div>
      <div className="md:row-span-full row-start-2 md:col-span-7 col-span-12 w-full h-full">
        <p>Hello</p>
      </div>
    </>
  );
}
