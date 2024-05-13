import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
export const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hover:scale-[1.02] transition-all">
          <CiMenuBurger />
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        <DropdownMenuLabel>Shoaib Ahmed</DropdownMenuLabel>
        <DropdownMenuGroup className="flex space-y-1 flex-col">
          <DropdownMenuItem className="border hover:scale-[1.02] transition-all">
            <Link href="/"> Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border hover:scale-[1.02] transition-all">
            <Link href="/feedback"> feedback</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border hover:scale-[1.02] transition-all">
            <Link href="/"> Login</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
