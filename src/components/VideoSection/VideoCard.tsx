//===============Shadcn UI======================
import { Skeleton } from "@/components/ui/skeleton"

//=============Router==============
import { Link, useParams } from "react-router";

//===================Types=================
import type Video from '@/Types/Videos'

//=================Hooks=====================
import { useEffect, useState } from "react";
import useVideos from "@/Hooks/useVideos";
import { fetchChannelsLogos } from "@/Service/fetchChannelsLogos";
import { useFormatViews } from "@/Hooks/useformatViews";



export default function VideoCard({video}: {video?: Video}) {    
    const {videos , loading , error} = useVideos()
    const [channelLogos, setChannelLogos] = useState<Record<string, string>>({});
    const param = useParams()
    const videoId = param.id
    const formattedViews = useFormatViews(video?.ViewCount);

    useEffect(() => {
      if (!videos.length) return;

      const channelIds = videos
        .map(v => v.channelId)
        .join(",");

      fetchChannelsLogos(channelIds).then(setChannelLogos);

    }, [videos]);

    
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    if (!video?.thumbnails?.standard?.url) return <Skeleton className="w-130  rounded-md" />
    console.log('view:',video.ViewCount);

    return(
        <>
            <div className="w-130 hover:shadow-2xl hover:shadow-black duration-300 transition-all hover:duration-300 rounded-md cursor-pointer bg-transparent">
               <Link to={`videos/${video.id}`} className="bg-transparent">
                    <img src={video.thumbnails?.standard?.url} className="rounded-md " alt={video.title}/>
               </Link>
                <div className="flex w-full ">{channelLogos[video.channelId] ? (  <img src={channelLogos[video.channelId]} className="h-12 w-12 rounded-full mr-3 mt-2" alt="channel logo"/>) : (  <Skeleton className="h-12 w-12 rounded-full mr-3 mt-2" />)}                    <div className="flex flex-col items-start w-full   ">
                        <h2 className="mt-2 mb-4 font-semibold text-white ">{video.title}</h2>
                        <div className="w-full flex-col flex items-start text-start ">
                            <Link to={'/'} className=" font-semibold text-gray-400  duration-300 transition-all hover:text-white hover:duration-300 ">{video.channelTitle}</Link>
                            {/* <p className="text-lg text-white">{formattedViews} views</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}