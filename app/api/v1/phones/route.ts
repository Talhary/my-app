import { NextRequest, NextResponse } from "next/server";
import { PhoneSpecs, Phonedata } from "@/app/data";
import axios from "axios";
export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json();
  const criteria = {
    name: data.name[0],
    storage: data.storage[0],
    bettery: data.bettery[0],
    max_price: data.max_price,
    min_price: null,
    rating_score: data.bettery_score,
  };
  const { data: data1 } = await axios.post(
    "http://localhost:5000/search_phones",
    data
  );

  console.log({ data1 });
  console.log(criteria);
  return NextResponse.json(data1);
};
