//=================Shadcn UI=================
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//=================React Icons=================
import { BsThreeDots } from "react-icons/bs"
import { PiScissors } from "react-icons/pi";
import { IoFlagOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";


export default function DropdownMenuIcons() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl cursor-pointer ">
                <div className="flex font-bold cursor-pointer rounded-full items-center justify-center w-full h-full gap-2 text-white  text-[18px] hover:bg-white/30 transition-all duration-300 hover:duration-300">
                    <BsThreeDots size={20} />
                </div>
            </div>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-main-backGround flex flex-col text-lg items-start justify-start gap-4 text-white border-none rounded-md shadow-none  z-50 h-fit w-35 ">
        <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md   cursor-pointer">
          <IoFlagOutline size={35} />
          Report
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md  cursor-pointer">
          <PiScissors size={35} />
          Clip
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md  cursor-pointer">
          <BsHeart size={35} />
          Thanks
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
