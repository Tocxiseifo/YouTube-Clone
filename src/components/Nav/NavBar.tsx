import logo from '../Nav/vecteezy_youtube-logo-png-youtube-icon-transparent_18930572.png'
import Category from "../Categarys/Categarys";

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
import { useContext, useState } from 'react'

//=============Router=============
import { Link } from "react-router";
import { Context } from '@/Context/Context';
import MenuDrawer from '../SideSection/SideSection';
// import MenuDrawer from '../SideSection/SideSection';

export default function NavBar() {
    const context = useContext(Context)
    const {search ,setSearch} = context || {}
    const [open, setOpen] = useState<boolean>(() =>{
      return localStorage.getItem('sidebarOpen') === 'true' ? true : false
    })


    if(!context) return null
    return(
        <nav className="w-full min-h-14 lg:h-32 flex flex-col bg-main-backGround/95   lg:justify-center items-center text-center backdrop-blur-sm border border-transparent p-2 sm:p-4 md:p-6 lg:p-8 sticky top-0 z-50 overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto h-auto md:h-18 flex flex-row">
                <div className="flex w-full md:w-[95%] min-h-14 md:h-18 flex-row  md:flex-nowrap flex-wrap justify-between items-center gap-2 sm:gap-3">
                   <div className='flex flex-row justify-center gap-2 sm:gap-4 bg-transparent shrink-0'>
                    <MenuDrawer setOpenDrawer={setOpen} openDrawer={open} /> 
                    <Link to="/" className="w-12 sm:w-15 h-10 sm:h-18 ml-2 sm:ml-5 text-white flex justify-center items-center shrink-0 mt-4 md:mt-0">
                        <img src={logo} alt="" className='w-10 h-10 sm:w-15 sm:h-15 object-contain' /> 
                        <span className='text-base sm:text-lg md:text-[20px] relative xl:right-2.5 bottom-0.5 font-bold'>YouTube</span>
                    </Link>
                    </div>
                    <div className='flex items-center justify-between flex-1 min-w-0 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[600px] ml-2 sm:ml-4 lg:ml-22 relative lg:left-0 md:left-15 h-10 order-3 basis-full sm:order-0 sm:basis-auto'>
                        <span className='w-full sm:w-85 md:w-100 lg:w-150 h-10 flex justify-between items-center gap-1 focus:outline-none min-w-0'>
                            <input type="text" id="" className='w-full min-w-0 border-2  border-white/10 focus:outline-blue-500 focus:border rounded-l-full rounded-r-none h-10 sm:h-12 bg-main-backGround text-white text-sm sm:text-[14px] pl-3 sm:pl-5' value={search} onChange={e => setSearch?.(e.target.value)} placeholder='Search' />
                            <Link to={`/search/${search}`} className="bg-white/10 backdrop-blur-xl w-12 h-10 sm:w-15 sm:h-12 text-center flex justify-center items-center rounded-l-none rounded-r-full shrink-0" >
                                <CiSearch color="white" size={22}/>    
                            </Link>
                            <div className="bg-white/10 ml-1 sm:ml-2 backdrop-blur-xl w-10 h-10 sm:w-15 sm:h-12 cursor-pointer hover:bg-white/30 duration-300 transition-all hover:duration-300 text-center flex justify-center items-center rounded-full shrink-0">
                                <IoMicOutline color="white" size={22}/>
                            </div>
                        </span>
                    </div>
                    <div className="w-auto min-w-0 h-12 flex justify-center items-center gap-1 sm:gap-2 ml-2 sm:ml-4 md:ml-15 shrink-0">
                        <span className="hidden sm:flex justify-center gap-2 cursor-pointer hover:bg-white/30 duration-300 transition-all hover:duration-300 items-center bg-white/10 backdrop-blur-xl w-27 h-10 text-center rounded-full">
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
            </div>
            <div className="mb-2 md:mb-3 w-full overflow-x-auto">
                <Category />
            </div>
        </nav>
    )
}