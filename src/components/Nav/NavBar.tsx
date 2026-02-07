//=================React Icons=============
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

//================Shadcn UI============
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//======================Material UI=========
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

//============Hooks============
import { useState } from 'react'
import logo from '../Nav/vecteezy_youtube-logo-png-youtube-icon-transparent_18930572.png'

export default function NavBar() {
    const [search ,SetSearch] = useState('')
    return(
        <nav className="w-full h-18 flex flex-row bg-main-backGround/95 justify-center items-center text-center backdrop-blur-sm border  border-transparent  p-8   sticky top-0 z-50">
            <div className="flex w-[95%] h-18 flex-row justify-between items-center ">
                <div className="w-15 h-18 ml-5  text-white flex justify-center items-center">
                    <img src={logo} alt="" className='w-15 h-15' /> 
                    <span className='text-lg relative xl:right-2.5 bottom-1 font-bold'>YouTube</span>
                </div>
                <div className='flex items-center justify-between w-120 h-5'>
                    <span className='w-150 h-10 flex justify-between items-center gap focus:outline-none '>
                        <input type="text" id="" className='w-150 border-2 border-white/10 focus:outline-blue-500 focus:border  rounded-l-full rounded-r-none h-12 bg-main-backGround  text-white text-[14px] pl-5' value={search} onChange={e => SetSearch(e.target.value)} placeholder='Search' />
                        <div className="bg-white/10  backdrop-blur-xl w-15 h-12  text-center flex justify-center items-center rounded-l-none rounded-r-full">
                            <CiSearch   color="white" size={22}/>    
                        </div>
                        <div className="bg-white/10 ml-2  backdrop-blur-xl w-15 h-12 cursor-pointer hover:bg-white/30 text-center flex justify-center items-center rounded-full">
                            <IoMicOutline color="white" size={22}/>
                        </div>
                    </span>
                </div>
                <div className="w-50 h-12 flex justify-center items-center gap-2 ml-15">
                    <span className="flex justify-center gap-2 cursor-pointer hover:bg-white/30 items-center bg-white/10  backdrop-blur-xl w-27 h-10  text-center  rounded-full">
                        <FaPlus color="white" size={22}/>
                        <span className="text-white">Create</span>
                    </span>
                        <div className="hover:bg-white/10 hover:backdrop-blur-xl cursor-pointer duration-300 transition-all hover:duration-300  w-10 h-10 flex justify-center items-center rounded-full">
                            <NotificationsNoneIcon  className="text-white" />
                            <CartBadge badgeContent={9} color="error" overlap="circular" />
                        </div>
                    <div className="ml-2 cursor-pointer">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                                className="grayscale"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </nav>
    )
}