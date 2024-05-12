import { NextRequest, NextResponse } from "next/server";
import { PhoneSpecs, Phonedata } from "@/app/data";
import axios from "axios";
export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json();
  const criteria = {
    name: data.name[0],
    storage: data.storage[0],
    battery: data.bettery[0],
    max_price: data.max_price,
    min_price: null,
    rating_score: data.rating_score,
  };
  const response = await axios.post(
    "http://localhost:5000/search_phones",
    criteria
  );
  console.log(response.data);
  // console.log(response.data);
  //   console.log({ data1 });
  // console.log(criteria);
  return NextResponse.json(criteria);
};
