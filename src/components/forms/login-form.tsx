"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/patterns/button";
import cookies from "js-cookie";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/patterns/form";
import { Input } from "@/components/patterns/input";
import schemas, { LoginSchemaValues } from "@/validations";
import { useRouter } from "next/navigation";

const defaultValues: Partial<LoginSchemaValues> = {};

type LoginFormProps = {
  redirect: string;
};

function LoginForm({ redirect }: LoginFormProps) {
  const router = useRouter();
  const form = useForm<LoginSchemaValues>({
    resolver: zodResolver(schemas.login),
    defaultValues,
    mode: "onSubmit",
  });

  const { setError } = form;

  async function onSubmit(variables: LoginSchemaValues) {
    console.log("Hello", variables);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Slug</FormLabel>
              <FormControl>
                <Input placeholder="aaa-canteen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  autoComplete="username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete="new-password"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-4">
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
