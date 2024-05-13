"use client";

import { useEffect, useState } from "react";
import Component from "@/app/_components/hover";
const ProductPage = (object: any) => {
  try {
    const id = object?.params?.id;
    const [phone, setPhone] = useState();
    useEffect(() => {
      fetch("http://localhost:5000/search_phones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: id.split("_").join(" "),
          storage: null,
          battery: null,
          max_price: null,
          min_price: null,
          rating_score: "top",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res?.[0]);
          setPhone(res?.[0]);
        });
    }, []);
    if (!phone) {
      return <div>Please Wait</div>;
    }
    return (
      <div className="flex justify-center items-center h-screen">
        <Component data={phone} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Error</div>;
  }
};
export default ProductPage;
