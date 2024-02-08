import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import { Separator } from "@/components/atoms/separator";
import { ScrollArea } from "@/components/atoms/scroll-area";
import clsx from "clsx";
import ButtonToolTip from "@/components/molecules/button-tooltip";

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
    <div className={clsx("w-full h-full cart-grid gap-4 bg-paper", className)}>
      <div className="flex justify-between align-middle items-center py-2 px-4 bg-background">
        <p>Order ID: JJ782328</p>
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
        </div>
      </div>
      <div className="flex justify-between align-middle items-center py-2 px-4 bg-background">
        <div className="flex justify-center align-middle gap-2">
          <ButtonToolTip
            label="Select Table"
            icon="MdTableRestaurant"
            variant={"outline"}
          />
          <ButtonToolTip
            label="Link Customer"
            icon="IoPersonAddSharp"
            variant={"outline"}
          />

          <ButtonToolTip
            label="Add Discount"
            icon="TbDiscount2"
            variant={"outline"}
          />

          <ButtonToolTip
            label="Add Package Charge"
            icon="PiPackageFill"
            variant={"outline"}
          />

          <ButtonToolTip
            label="Add Delivery Charge"
            icon="TbMotorbike"
            variant={"outline"}
          />
        </div>

        <ButtonToolTip
          label="Reset Order"
          icon="GrPowerReset"
          variant={"destructive"}
        />
      </div>

      <ScrollArea className="w-full flex justify-end grow bg-background">
        <div className="flex flex-col py-2 px-4">
          {products.map((each, i) => (
            <>
              <div
                key={i}
                className="flex justify-center items-center align-middle gap-4 rounded-md text-sm font-medium"
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
                <span className="min-w-28 flex justify-end">
                  ₹ {each.price.toFixed(2)}
                </span>
                <Button variant={"transparent"} className="p-2">
                  <Icon name="TiDelete" className="h-6 w-6" />
                </Button>
              </div>
              <Separator className={"my-2"} />
            </>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 flex justify-center align-middle items-center gap-2 flex-col text-sm bg-background">
        <div className="flex gap-2 justify-between align-middle items-center w-full px-14">
          <span>Subtotal</span>
          <span>₹ 1030.00</span>
        </div>
        <div className="flex gap-2 justify-between align-middle items-center w-full px-14">
          <span>Tax</span>
          <span>₹ 199.00</span>
        </div>
        <div className="flex gap-2 justify-between align-middle items-center w-full px-14">
          <span>Coupon</span>
          <span>₹ 0.00</span>
        </div>
        <div className="flex gap-2 justify-between align-middle items-center w-full px-14">
          <span>Grand Total</span>
          <span>₹ 1300.00</span>
        </div>
        <div className="flex gap-4 justify-between align-middle items-center w-full px-10 pt-6">
          <ButtonToolTip
            label="Hold Order"
            icon="MdPendingActions"
            variant={"outline"}
          />
          <Button variant={"outline"} className="w-full">
            Hold Order
          </Button>
          <Button className="w-full">Express Order</Button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
