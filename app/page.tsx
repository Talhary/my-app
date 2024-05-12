"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { CiHome, CiSearch } from "react-icons/ci";
import { AvatarIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import ProductPage from "@/app/_components/products";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
const name = [
  {
    id: "Samsung",
    label: "Samsung",
  },
  {
    id: "Xiaomi",
    label: "Xiaomi",
  },
  {
    id: "Tecno",
    label: "Tecno",
  },
  {
    id: "Sparx",
    label: "Sparx",
  },

  {
    id: "Infinix",
    label: "Infinix",
  },
  {
    id: "Realme",
    label: "Realme",
  },
  {
    id: "Apple",
    label: "Apple",
  },
] as const;

const storage = [
  {
    id: 128,
    label: "128GB",
  },
  {
    id: 256,
    label: "256GB",
  },
  {
    id: 64,
    label: "64GB",
  },
  {
    id: 32,
    label: "32GB",
  },

  {
    id: 512,
    label: "512GB",
  },
] as const;
const bettery = [
  {
    id: 5000,
    label: "5000 mAh",
  },
  {
    id: 3000,
    label: "3000 mAh",
  },
  {
    id: 1000,
    label: "1000 mAh",
  },
  {
    id: 2000,
    label: "2000 mAh",
  },

  {
    id: 4000,
    label: "4000 mAh",
  },

  {
    id: 5001,
    label: "5001 mAh",
  },
] as const;

export default function Home() {
  const [array, setArray] = useState([{ lol: "lol" }]);
  const [isPending, StartTransition] = useTransition();
  const [search, setSearch] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ["Samsung"],
      max_price: 2000,
      bettery: [5000],
      storage: [128],
      rating_score: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    StartTransition(() => {
      fetch("/api/v1/phones", {
        method: "POST",
        headers: {
          ContentType: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    });

    console.log(search);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <main className=" h-full">
      <nav className=" h-20  bg-pink-400 flex flex-row justify-between px-10 gap-4 items-center">
        <div>
          <h2 className="text-4xl">Daraz</h2>
        </div>
        <div>
          <div className=" w-[500px] bg-white rounded-xl flex relative">
            <Input
              type="text"
              placeholder="samsung"
              className="rounded-xl"
              onChangeCapture={(e) => {
                setSearch(e.currentTarget.value);
              }}
            />
            <CiSearch className="absolute right-0 size-7 top-1 bg-pink-300 w-14 mr-2 rounded-md " />
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center ">
            <CiHome className="size-8" />
            <Link href="/">Home</Link>
          </div>
        </div>
      </nav>
      <div className="flex  flex-row">
        <div className="bg-gray-200 w-[300px] m-4 p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <FormLabel className="text-[20px] ">Brand</FormLabel>
                <div className="w-full bg-gray-400 h-[1px]"></div>
                {name.map((item: { id: string; label: string }, i) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={i}
                          className=" flex items-center gap-x-2 space-y-0 "
                        >
                          <FormControl>
                            <Checkbox
                              disabled={isPending}
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked: any) => {
                                return checked
                                  ? field.onChange([item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>

              <FormField
                control={form.control}
                name="max_price"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-[20px]">Price</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        
                        className="border border-gray-400"
                        placeholder="50000"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <FormLabel className="text-[20px] ">Storage Capacity</FormLabel>
                <div className="w-full bg-gray-400 h-[1px]"></div>
                {storage.map((item: { id: number; label: string }) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="storage"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className=" flex items-center gap-x-2 space-y-0 "
                        >
                          <FormControl>
                            <Checkbox
                              disabled={isPending}
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked: any) => {
                                return checked
                                  ? field.onChange([item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                <FormLabel className="text-[20px] ">Battery Capacity</FormLabel>
                <div className="w-full bg-gray-400 h-[1px]"></div>
                {bettery.map((item1: { id: number; label: string }) => (
                  <FormField
                    key={item1.id}
                    control={form.control}
                    name="bettery"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item1.id}
                          className=" flex items-center gap-x-2 space-y-0 "
                        >
                          <FormControl>
                            <Checkbox
                              disabled={isPending}
                              checked={field.value?.includes(item1.id)}
                              onCheckedChange={(checked: any) => {
                                return checked
                                  ? field.onChange([item1.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item1.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item1.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormField
                control={form.control}
                name="rating_score"
                render={({ field }) => (
                  <FormItem className=" space-x-2 ">
                    <FormLabel className="text-[20px]">Rating Score</FormLabel>
                    <FormControl>
                      <Checkbox
                        disabled={isPending}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <div className="">{array?.[0] && <ProductPage array={array} />}</div>
      </div>
    </main>
  );
}
