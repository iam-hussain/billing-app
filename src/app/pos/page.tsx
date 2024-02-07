import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";
import SearchBar from "@/components/organisms/search-bar";

export default function Home() {
  return (
    <>
      <div className="grid grid-first-1fr bg-paper w-full h-full md:row-span-full row-start-1 md:col-span-7 col-span-12 gap-y-4 py-4">
        <CategoriesSlide className="row-start-1 mx-4" />
        <ProductList className="row-start-2 px-4" />
      </div>
      <div className="md:row-span-full row-start-2 md:col-span-7 col-span-12 w-full h-full">
        <div className="flex justify-between align-middle items-center p-2 border-y-2 border-paper">
          <Button
            className="flex justify-center align-middle gap-2"
            variant={"outline"}
          >
            <Icon name="IoPersonAddSharp" className="h-4 w-4" />
            Link Customer
          </Button>
          <div className="flex justify-center align-middle gap-2">
            <Button
              className="flex justify-center align-middle gap-2"
              variant={"outline"}
            >
              <Icon name="IoMdAdd" className="h-4 w-4" />
            </Button>

            <Button
              className="flex justify-center align-middle gap-2"
              variant={"outline"}
            >
              <Icon name="FaListUl" className="h-4 w-4" />
            </Button>

            <Button
              className="flex justify-center align-middle gap-2"
              variant={"destructive"}
            >
              <Icon name="GrPowerReset" className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p>Hello</p>
      </div>
    </>
  );
}
