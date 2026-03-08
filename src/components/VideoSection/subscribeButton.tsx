/* eslint-disable @typescript-eslint/no-explicit-any */
//=================HOOKS=================
import { useState } from "react";

//=======================Shadcn UI==================
import DropdownSubscribeIcons from "../ui/DropdownSubscribeIcons";


export default function SubscribeButton({   setSubscribe , subscribe} : {channelTitle: string , setSubscribeButton: any , setSubscribe: any, subscribe: any}) {
    const [subscribeButton , setSubscribeButton] = useState<string>('all')    
    return(
        <div  className="bg-white/10 backdrop-blur-xl gap-4 text-white hover:bg-white/30 w-22 flex items-center justify-center font-bold rounded-full h-9 cursor-pointer transition duration-300 hover:duration-300  border-transparent">
            {subscribeButton === 'unsubscribe' ? (
                <button className="bg-white w-22 font-bold text-black rounded-full h-9 cursor-pointer transition duration-300 hover:duration-300 hover:bg-gray-300 border-transparent" onClick={() => setSubscribeButton('all')}>Subscribe</button>
            ):<DropdownSubscribeIcons   subscribeButton={subscribeButton} setSubscribeButton={setSubscribeButton} setSubscribe={setSubscribe} subscribe={subscribe}/>}
            
        </div>
          
    )
}