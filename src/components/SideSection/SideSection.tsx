import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Download, HistoryIcon, HomeIcon, Menu, Settings } from 'lucide-react';
import { useState } from 'react';
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from 'react-icons/sl';

export default function MenuDrawer({openDrawer , setOpenDrawer}: {openDrawer?:boolean , setOpenDrawer?: (open: boolean) => void}) {
  const [open, setOpen] = useState(openDrawer);
  

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    setOpenDrawer?.(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className='bg-main-backGround h-full text-white'>
      <List className='flex flex-col gap-4'>
        <div className=' h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <HomeIcon size={25} />
          <span className='text-[16px] font-medium'>Home</span>
        </div>
        <div className=' h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <HistoryIcon size={25} />
          <span className='text-[16px] font-medium'>History</span>
        </div>
        <div className=' h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <MdPlaylistPlay size={25} />
          <span className='text-[16px] font-medium'>Playlists</span>
        </div>
        <div className=' h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <MdOutlineWatchLater size={25} />
          <span className='text-[16px] font-medium'>Watch Later</span>
        </div>
        <div className=' h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <SlLike size={25} />
          <span className='text-[16px] font-medium'>Liked Videos</span>
        </div>
        <div className=' h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <Download size={25} />
          <span className='text-[16px] font-medium'>Downloads</span>
        </div>
        <div className='h-12  flex items-center justify-start gap-4 px-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-300 hover:duration-300 w-60 '>
          <Settings size={25} />
          <span className='text-[16px] font-medium'>Settings</span>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}  className='mt-3.5 w-12 h-10 cursor-pointer hover:bg-white/30 duration-300 transition-all hover:duration-300 text-center flex justify-center items-center rounded-full'>
        <Menu className=' duration-300 transition-all hover:duration-300 items-center text-white mt-1 ' />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
