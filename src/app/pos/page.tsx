import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";
import CartSummary from "@/components/organisms/cart-summary";
import SearchBar from "@/components/organisms/search-bar";
import BrandSideBySide from "@/components/atoms/brand/side-by-side";
import ButtonToolTip from "@/components/molecules/button-tooltip";
import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";
import Icon from "@/components/atoms/icon";

export default function POS() {
  return (
    <>
      <div className="pos-list-grid bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-8 col-span-12 gap-y-4 py-4">
        <div className="row-start-1 mx-4 grid grid-cols-12 gap-2 select-none place-content-around">
          {/* <BrandSideBySide className="h-6 w-auto col-span-2 m-auto ml-0" /> */}

          <div className="col-span-2 flex w-auto m-auto ml-0 font-display font-thin text-xl gap-2 justify-center align-middle items-center text-primary">
            <Icon name="FaBowlFood" />
            <h1 className="">QuickDine</h1>
          </div>

          <SearchBar className="w-auto col-span-7" />
          <ThemeModeToggle className="" />
          <ButtonToolTip label="New Order" icon="IoMdAdd" variant={"outline"} />
          <ButtonToolTip
            label="Order List"
            icon="FaListUl"
            variant={"outline"}
          />
        </div>

        <CategoriesSlide className="row-start-2 mx-4" />
        <ProductList className="row-start-3 px-4" />
      </div>
      <CartSummary className="md:row-span-full row-start-2 md:col-span-4 col-span-12" />
    </>
  );
}
