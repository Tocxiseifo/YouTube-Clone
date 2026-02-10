import { Skeleton } from "@/components/ui/skeleton"
import { Link } from "react-router";

interface Video {
    id:string,
        thumbnails: {
        standard?: {
            url: string
        },
        medium?: {
            url: string
        }
        high?: {
            url: string
        }
    },
    title:string,
    channelTitle:string
    // Date:string
}

export default function VideoCard({video}: {video?: Video}) {    
    //====================Handlers=====================
    function HandleVideoLink(Id:string) {
        console.log("Navigate to video:", Id);
    }
    if (!video?.thumbnails?.standard?.url) return <Skeleton className="w-140  rounded-md" />



    return(
        <>
            <div className="w-130  hover:shadow-2xl hover:shadow-black duration-300 transition-all hover:duration-300 rounded-md cursor-pointer bg-transparent">
               <Link to={'/'} className="bg-transparent">
                    <img src={video.thumbnails?.standard?.url} className="rounded-md" alt={video.title} onClick={() => HandleVideoLink(video.id)} />
               </Link>
                <h2 className="mt-2 font-semibold text-white ">{video.title}</h2>
                <Link to={'/'} className="mt-2 font-semibold text-white ">{video.channelTitle}</Link>
            </div>
        </>
    )
}