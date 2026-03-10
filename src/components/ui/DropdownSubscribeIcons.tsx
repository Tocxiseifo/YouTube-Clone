/* eslint-disable @typescript-eslint/no-explicit-any */
//=================Shadcn UI=================
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
//=================React Icons=================
import { PiBellSimpleLight } from "react-icons/pi";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { BsPersonFillX } from "react-icons/bs";
import { TbBellOff } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
// import { AlertDialogDemo } from "./UnSubscribeButton";
import type React from "react";


  
export default function DropdownSubscribeIcons({subscribeButton ,setSubscribeButton,handleButton } :{subscribeButton: any,handleButton:any  ,setSubscribeButton: any ,}) {
  function handleUnsubscribe() {
    setSubscribeButton('unsubscribe');
    handleButton()
    setSubscribeButton('all')
  } 
  
  return ( 
    <DropdownMenu >
        <DropdownMenuTrigger asChild>
            <div className="flex font-bold cursor-pointer bg-white/10 backdrop-blur-xl rounded-full items-center justify-center w-full h-9 gap-5 text-white  text-[18px] hover:bg-white/30 transition-all duration-300 hover:duration-300 " onClick={() => setSubscribeButton('all')}>
              {subscribeButton === 'all' ? <PiBellSimpleRingingBold size={25} /> : subscribeButton === 'personalize' ? <PiBellSimpleLight size={25} /> : subscribeButton === 'none' ? <TbBellOff size={25} /> : subscribeButton === 'unsubscribe' ?  null: null }
              
              <IoIosArrowDown size={25} />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-main-backGround flex flex-col text-lg items-start justify-start gap-4 text-white border-none rounded-md shadow-none  z-50 h-fit w-35 ">
          <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md   cursor-pointer" onClick={() => setSubscribeButton('all')}>
            <PiBellSimpleRingingBold  size={25} />
            All
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md  cursor-pointer" onClick={() => setSubscribeButton('personalize')}>
            <PiBellSimpleLight size={25} />
            personalize
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md  cursor-pointer" onClick={() => setSubscribeButton('none')}>
            <TbBellOff size={25} />
            None
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-start gap-2 hover:bg-white/30 transition-all duration-300 hover:duration-300 w-full rounded-md  cursor-pointer" onClick={handleUnsubscribe}>
            <BsPersonFillX size={25} />
            Unsubscribe
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  