import LoginForm from "@/components/forms/login-form";
import { Button } from "@/components/atoms/button";

export default function Home() {
  return (
    <div className="bg-bw py-8 md:px-8 px-4  w-auto md:max-w-sm rounded-lg">
      <h1 className="text-5xl md:text-6xl font-bold pb-4 pt-4 md:pt-0 select-none">
        Login.
      </h1>
      {/* <h3 className="md:text-3xl text-2xl font-bold">Login</h3> */}
      <div className="flex flex-col w-full mb-2">
        <LoginForm redirect={"/stores"} />
      </div>
      <div className="flex flex-col w-full gap-3 md:max-w-xs">
        <h6 className="text-xl font-sans">Need it for your store?</h6>

        <Button variant={"outline"}>Create Account</Button>
      </div>
    </div>
  );
}
