/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from "@/Context/Context";
import useVideos from "@/Hooks/useVideos";
import { fetchChannelsLogos } from "@/Service/fetchChannelsLogos";
import fetchSearch from "@/Service/FetchSearch";
import { fetchChannelLogo } from "@/Service/LogoApiFetching";
import Skeleton from "@mui/material/Skeleton";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

interface search {
    thumbnails: {
        standard?: {
            url: string
        },
        medium?: {
            url: string
        }
        high: {
            url: string
        }
    },
    title: string,
    id: string,
    channelTitle: string,
    viewCount: number,
    statistics: {
        viewCount: number
    },
    channelId: string
}

export default function SearchResult() {
    const contexts = useContext(Context)
    const {search } = contexts || {}
    const {videos} = useVideos()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data , setData] = useState<search[]>([])
    const [channelLogos, setChannelLogos] = useState<Record<string, string>>({});
    const channelIds = videos.map((video) => video.channelId).join(',')
   
    useEffect(() =>{
        fetchSearch(search || '').then((searchInput) =>{
            setData(searchInput)
        })    
    },[])
    useEffect(() => {
        if (!channelIds) return;
        fetchChannelsLogos(channelIds).then((logos) => {
            setChannelLogos(logos);
        });
    }, [channelIds]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const videoId = data.map((item) => (item.id as any)?.videoId || item.id)
    console.log(videoId)
    if (data.length === 0) return <Skeleton className="w-150 h-auto  rounded-md" />
    if(!contexts) return null
    return(
        <div className="text-white flex flex-col w-full h-auto gap-5 ml-70">
            {data.map((item) => {
            return(
                <div key={item.id} className="w-full  flex items-start gap-5 duration-300 transition-all hover:duration-300 rounded-md cursor-pointer bg-transparent">                    
                    <Link to={`/videos/${(item.id as any)?.videoId || item.id}`} className="bg-transparent">
                        <img src={item.thumbnails.high?.url} alt={item.title} className="rounded-md w-200 object-cover " />
                    </Link>
                    <div className="flex flex-col items-start w-full">
                        <h1 className="font-semibold text-zinc-300 line-clamp-2 text-2xl">{item.title}</h1>
                        <div className="w-full flex flex-col items-start text-start mt-1">
                            <Link to={'/'} className="text-sm font-semibold text-gray-400 duration-300 transition-all hover:text-white hover:duration-300">
                                <div className="flex gap-2 items-center ">
                                    <img src={channelLogos[item.channelId] || ''} alt={item.channelTitle} />
                                    {item.channelTitle}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )})}
        </div>
    )

}