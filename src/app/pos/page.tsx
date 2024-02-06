import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";
import SearchBar from "@/components/organisms/search-bar";

export default function Home() {
  return (
    <>
      <div className="grid grid-2auto-1fr bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-7 col-span-12 gap-y-4 py-4">
        <CategoriesSlide className="row-start-1 px-4" />
        <SearchBar className="row-start-2 px-4 flex md:hidden" />
        <ProductList className="row-start-3 px-4" />
      </div>
      <div className="md:row-span-full row-start-2 md:col-span-7 col-span-12 w-full h-full">
        <p>Hello</p>
      </div>
    </>
  );
}
