"use server";
import { formSchema } from "@/lib/schema";
import { z } from "zod";
import axios from "axios";
export const Run = async (values: z.infer<typeof formSchema>) => {
  const data = values;
  const criteria = {
    name: data.name?.[0],
    storage: data.storage?.[0],
    battery: data.bettery[0],
    max_price: data.max_price,
    min_price: null,
    rating_score: data.rating_score,
  };

  // const { data: data1 } = await axios.post(
  //   "http://localhost:5000/search_phones",
  //   {
  //     name: "Samsung",
  //     storage: 128,
  //     battery: 3000,
  //     max_price: 2000,
  //     min_price: null,
  //     rating_score: true,
  //   }
  // );

  
  return criteria;
};
