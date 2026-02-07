import { Skeleton } from "@/components/ui/skeleton"
import { Link } from "react-router";

interface Video {
    id:string,
        thumbnails: {
        standard?: {
            url: string
        }
    },
    title:string,
    channelTitle:string
    // Date:string
}

export default function VideoCard({video}: {video?: Video}) {   
    // const now = new Date().getTime();
 
    //====================Handlers=====================
    function HandleVideoLink(Id:string) {
        console.log("Navigate to video:", Id);
    }
    if (!video?.thumbnails?.standard?.url) return <Skeleton className="w-60 h-40 rounded-md" />



    return(
        <>
            <div className="w-140">
               <Link to={'/'}>
                    <img src={video.thumbnails?.standard?.url} className="rounded-md" alt={video.title} onClick={() => HandleVideoLink(video.id)} />
               </Link>
                <h2 className="mt-2 font-semibold text-white">{video.title}</h2>
                <Link to={'/'} className="mt-2 font-semibold text-white" >{video.channelTitle}</Link>
                {/* <h2>{Number(video.Date) - now}</h2> */}
            </div>
        </>
    )
}