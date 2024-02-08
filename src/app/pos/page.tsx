import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";
import CartSummary from "@/components/organisms/cart-summary";

export default function POS() {
  return (
    <>
      <div className="pos-split-grid bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-8 col-span-12 gap-y-4 py-4">
        <CategoriesSlide className="row-start-1 mx-4" />
        <ProductList className="row-start-2 px-4" />
      </div>
      <CartSummary className="md:row-span-full row-start-2 md:col-span-4 col-span-12" />
    </>
  );
}
