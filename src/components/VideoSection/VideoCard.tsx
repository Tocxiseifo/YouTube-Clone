import { Skeleton } from "@/components/ui/skeleton"
import { Link } from "react-router";

//===================Types=================
import type Video from '@/Types/Videos'


export default function VideoCard({video}: {video?: Video}) {    
    //====================Handlers=====================
    if (!video?.thumbnails?.standard?.url) return <Skeleton className="w-130  rounded-md" />


    // const Width = 'w-130'
    return(
        <>
            <div  className="w-130 hover:shadow-2xl hover:shadow-black duration-300 transition-all hover:duration-300 rounded-md cursor-pointer bg-transparent">
               <Link to={`videos/${video.id}`} className="bg-transparent">
                    <img src={video.thumbnails?.standard?.url} className="rounded-md" alt={video.title}/>
               </Link>
                <h2 className="mt-2 font-semibold text-white ">{video.title}</h2>
                <Link to={'/'} className="mt-2 font-semibold text-white ">{video.channelTitle}</Link>
            </div>
        </>
    )
}