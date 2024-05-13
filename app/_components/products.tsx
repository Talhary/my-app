import Image from "next/image";
import { Phonedata } from "../data";
import { CiStar } from "react-icons/ci";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import HoverComponent from "@/app/_components/hover";
const Products = ({ array }: { array: any }) => {
  // console.log({ array });
  // console.log({ Phonedata });
  return (
    <div className=" flex flex-row flex-wrap gap-2 max-md:justify-center min-w-[320px] mb-[500px] ">
      {array.map((el: any, i: any) => {
        return (
          <HoverCard>
            <HoverCardTrigger>
              <div className="bg-gray-400 text-white p-2 rounded-md   transition-all">
                <div className="flex flex-col max-w-[200px]">
                  <img
                    className="rounded-md"
                    src={el.img_URL}
                    alt={el.brand}
                    height={400}
                    width={200}
                  />
                  <h2 className="text-[14px]">
                    {el.Name + " "} {el.Storage}
                  </h2>
                </div>
                <div className="flex items-center text-white">
                  <CiStar />
                  <h4 className="">
                    {el.Stars} {"/"}5{"("} {el["Rating Score"]} {")"}
                  </h4>
                </div>
                <div className="text-black  font-semibold text-[18px]">
                  <span>RS. </span>
                  <span> {el.Price}</span>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="min-w-[400px]">
              <HoverComponent data={el} />
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
};
export default Products;
