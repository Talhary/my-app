"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { CiHome, CiLogin, CiMenuBurger, CiSearch } from "react-icons/ci";
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
import { Run } from "@/actions/phones";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownMenu } from "./_components/dropDown-menu";
import { DropdownFilter } from "./_components/dropDown-filter";
import { ThemeChange } from "./_components/theme";
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
] as const;

export default function Home() {
  const [array, setArray] = useState();
  const [isPending, StartTransition] = useTransition();
  const [search, setSearch] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ["Samsung"],
      max_price: "20000",
      min_price: "2000",
      bettery: [5000],
      storage: [64],
      rating_score: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = values;
    const criteria = {
      name: data.name?.[0],
      storage: data.storage?.[0],
      battery: data.bettery[0],
      max_price: parseInt(data.max_price),
      min_price: parseInt(data.min_price),
      rating_score: data.rating_score,
    };
    console.log(criteria);
    StartTransition(() => {
      fetch("http://localhost:5000/search_phones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(criteria),
      })
        .then((response) => response.json())
        .then((data) => {
          setArray(data);
          console.log({ data });
        });
    });
  }
  return (
    <main className="min-w-[320px] h-full bg-gray-500">
      <nav className="max-md:hidden h-20  text-white bg-gray-900 flex flex-row justify-between px-10 gap-4 items-center">
        <div>
          <h2 className="text-4xl">Shoaib Ahmed</h2>
        </div>

        <div>
          <div className=" w-[500px] bg-white rounded-xl flex relative">
            <Input
              type="text"
              placeholder="samsung"
              className="rounded-xl text-black"
              onChangeCapture={(e) => {
                setSearch(e.currentTarget.value);
              }}
            />
            <div
              onClick={(e) => {
                e.preventDefault();
                fetch("http://localhost:5000/search_phones", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: search,
                    storage: null,
                    battery: null,
                    max_price: null,
                    min_price: null,
                    rating_score: "top",
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    // Handle the response data (the list of recommended phones)

                    setArray(data);
                    console.log({ data });
                    // Update your UI here
                  });
              }}
            >
              <CiSearch className="absolute right-0 size-7 top-1 bg-black w-14 mr-2 rounded-md " />
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="flex flex-row items-center ">
            <CiLogin className="size-8" />
            <Link href="/">Login</Link>
          </div>
          <div className="flex flex-row items-center ">
            <CiHome className="size-8" />
            <Link href="/">Home</Link>
          </div>{" "}
          <div className="flex flex-row items-center ">
            <CiHome className="size-8" />
            <Link href="/feedback">feed back</Link>
          </div>
        </div>
      </nav>
      <nav className="md:hidden flex justify-center p-4 bg-black space-x-2">
        <div className="bg-gray-400 md:hidden"></div>
        <DropDownMenu />
        <div className=" w-[50%] mx-5 bg-white rounded-xl flex relative">
          <Input
            type="text"
            placeholder="samsung"
            className="rounded-xl text-black"
            onChangeCapture={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <div
            className="hover:scale-[1.02] transition-all"
            onClick={(e) => {
              e.preventDefault();
              fetch("http://localhost:5000/search_phones", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: search,
                  storage: null,
                  battery: null,
                  max_price: null,
                  min_price: null,
                  rating_score: "top",
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  // Handle the response data (the list of recommended phones)
                  setArray(data);
                  console.log({ data });
                  // Update your UI here
                });
            }}
          >
            <CiSearch className="absolute right-0 size-7 top-1 bg-black text-white w-14 mr-2 rounded-md " />
          </div>
        </div>
      </nav>

      <div className="flex  flex-row">
        <div className="bg-gray-400 max-md:hidden  text-white   w-[300px] m-4 p-4 min-w-[300px]">
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

              <div className="flex flex-col">
                <div>
                  <FormLabel className="text-[20px]"> Price</FormLabel>
                </div>
                <div className="flex-row flex gap-x-1">
                  <FormField
                    control={form.control}
                    name="max_price"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="">Max Price</FormLabel>

                        <FormControl>
                          <Input
                            disabled={isPending}
                            className="border border-gray-400"
                            placeholder="minimum"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="min_price"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className=""> Min Price</FormLabel>

                        <FormControl>
                          <Input
                            disabled={isPending}
                            className="border border-gray-400"
                            placeholder="maximum"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
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

        <div className="p-4 ">
          {array?.[0] && <ProductPage array={array} />}
        </div>
        {!array?.[0] && (
          <div className="flex h-screen items-center justify-center w-[80%] ">
            Please Search or Submit
          </div>
        )}
      </div>
    </main>
  );
}
