import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import { Separator } from "@/components/atoms/separator";
import { ScrollArea } from "@/components/atoms/scroll-area";
import clsx from "clsx";

const products = [
  {
    name: "Ghee Rava Dosa",
    price: 40.0,
    deck: "Neque porro quisquam est velit...",
    image:
      "https://images.unsplash.com/photo-1612204104655-6c8a57ae235f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2RzfGVufDB8fDB8fHww",
  },
  {
    name: "Cheese Pizza",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Peri Peri Chicken Burger",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mutton Briyani",
    price: 300.0,
    image: "",
    active: true,
  },
  {
    name: "Idly",
    price: 10.0,
    image: "",
  },
  {
    name: "Watermelon Juice",
    price: 50.0,
    image: "",
  },
  {
    name: "Chocolate Moose",
    price: 100.0,
    image: "",
  },
  {
    name: "Chicken Noodles",
    price: 100.0,
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function CartSummary({ className }: { className?: string }) {
  return (
    <div className={clsx("w-full h-full", className)}>
      <div className="flex justify-between align-middle items-center py-2 px-4 border-y-2 border-paper">
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

      <ScrollArea className="grow w-full flex justify-end">
        <div className="flex flex-col py-2 px-4">
          {products.map((each, i) => (
            <>
              <div
                key={i}
                className="flex justify-center items-center align-middle py-2 rounded-md text-base font-medium"
              >
                <span className="grow">{each.name}</span>
                <div className="flex justify-center align-middle items-center text-center border border-paper">
                  <Button className="p-1" variant={"ghost"}>
                    <Icon name="RiSubtractFill" />
                  </Button>
                  <span className="min-w-6">1</span>
                  <Button className="p-1" variant={"ghost"}>
                    <Icon name="IoMdAdd" />
                  </Button>
                </div>
                <span className="min-w-28 flex justify-end mr-8">
                  ₹ {each.price.toFixed(2)}
                </span>
                <Icon name="TiDelete" className="h-6 w-6" />
              </div>
              <Separator className={"my-1"} />
            </>
          ))}
        </div>
      </ScrollArea>
      <div></div>
      {/* <p>Hello</p> */}
    </div>
  );
}

export default CartSummary;
