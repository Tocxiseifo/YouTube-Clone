import { useState } from 'react'
import logo from '../assets/Images/vecteezy_youtube-logo-png-youtube-icon-transparent_18930572.png'

export default function NavBar() {
    const [search ,SetSearch] = useState('')
    return(
        <nav className="w-full h-18 flex flex-row bg-transparent justify-between  backdrop-blur-xl border  border-transparent  p-8   sticky top-0 z-50">
            <div className="w-full h-full -mt-5 text-white flex justify-center items-center">
                <img src={logo} alt="" className='w-15 h-15' /> 
                <span className='text-lg relative xl:right-2.5 bottom-1'>YouTube</span>
            </div>
            <div className='flex items-center justify-between'>
                <span className='bg-white/30 backdrop-blur-xl w-120'>
                    <input type="text" id="" value={search} onChange={e => SetSearch(e.target.value)} placeholder='Search' />
                </span>
            </div>
        </nav>
    )
}