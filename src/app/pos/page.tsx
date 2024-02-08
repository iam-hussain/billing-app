import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";
import CartSummary from "@/components/organisms/cart-summary";
import SearchBar from "@/components/organisms/search-bar";
import BrandSideBySide from "@/components/atoms/brand/side-by-side";
import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";

export default function POS() {
  return (
    <>
      <div className="pos-list-grid bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-8 col-span-12 gap-y-4 py-4">
        <div className="row-start-1 mx-4 flex justify-between align-middle items-center gap-4 select-none">
          <BrandSideBySide className="h-6 w-auto" />
          <SearchBar className="w-full max-w-3xl" />
          <ThemeModeToggle />
        </div>
        <CategoriesSlide className="row-start-2 mx-4" />
        <ProductList className="row-start-3 px-4" />
      </div>
      <CartSummary className="md:row-span-full row-start-2 md:col-span-4 col-span-12" />
    </>
  );
}
