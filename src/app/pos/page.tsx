import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import { CategoriesSlide } from "@/components/organisms/categories-slide";
import ProductList from "@/components/organisms/product-list";
import SearchBar from "@/components/organisms/search-bar";

const products = [
  {
    name: "Ghee Rava Dosa",
    price: 40,
    deck: "Neque porro quisquam est velit...",
    image:
      "https://images.unsplash.com/photo-1612204104655-6c8a57ae235f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2RzfGVufDB8fDB8fHww",
  },
  {
    name: "Cheese Pizza",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Peri Peri Chicken Burger",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mutton Briyani",
    price: 300,
    image: "",
    active: true,
  },
  {
    name: "Idly",
    price: 10,
    image: "",
  },
  {
    name: "Watermelon Juice",
    price: 50,
    image: "",
  },
  {
    name: "Chocolate Moose",
    price: 100,
    image: "",
  },
  {
    name: "Chicken Noodles",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function POS() {
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
        <ul className="flex flex-col gap-2 p-2">
          {products.map((each, i) => (
            <li
              key={i}
              className="flex justify-center items-center align-middle gap-2 py-2 px-4 bg-paper rounded-md"
            >
              <span className="grow">{each.name}</span>
              <span>1</span>
              <Icon name="TiDelete" className="h-6 w-6" />
            </li>
          ))}
        </ul>
        {/* <p>Hello</p> */}
      </div>
    </>
  );
}
