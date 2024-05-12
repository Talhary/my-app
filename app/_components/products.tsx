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
  console.log({ array });
  console.log({ Phonedata });
  return (
    <div className=" flex flex-row flex-wrap gap-2 mb-[500px]">
      {array.map((el: any, i: any) => {
        return (
          <HoverCard>
            <HoverCardTrigger>
              <div className="bg-gray-100 p-2 rounded-md hover:bg-white transition-all">
                <div className="flex flex-col max-w-[200px]">
                  <img
                    src={el.img_URL}
                    alt={el.brand}
                    height={400}
                    width={200}
                  />
                  <h2 className="text-[14px]">
                    {el.Name + " "} {el.Storage}
                  </h2>
                </div>
                <div className="flex items-center text-gray-400">
                  <CiStar />
                  <h4 className="">
                    {el.Stars} {"/"}5{"("} {el["Rating Score"]} {")"}
                  </h4>
                </div>
                <div className="text-orange-600  font-semibold text-[18px]">
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
