//===============Shadcn UI======================
import { Skeleton } from "@/components/ui/skeleton"

//=============Router==============
import { Link } from "react-router"; // شيلنا useParams لأنه مش محتاجينه في الكارت

//===================Types=================
import type Video from '@/Types/Videos'

//=================Hooks=====================
import { useEffect, useState } from "react";
import { fetchChannelsLogos } from "@/Service/fetchChannelsLogos";
import { useFormatViews } from "@/Hooks/useformatViews";

export default function VideoCard({ video }: { video?: Video }) {
    
    // 1. شيلنا useVideos عشان نمنع التكرار، إحنا بنعتمد على الـ prop video
    const [channelLogo, setChannelLogo] = useState<string>(""); 

    // 2. تصحيح الوصول للـ ViewCount (تأكد من الـ Path ده في الـ Console)
    // Youtube API standard: video.statistics.viewCount
    // If you mapped it: video.viewCount
    const rawViews = video?.statistics?.viewCount || video?.viewCount || 0; 
    const formattedViews = useFormatViews(rawViews);

    useEffect(() => {
        if (!video?.channelId) return;

        // بنجيب اللوجو للقناة دي بس
        fetchChannelsLogos(video.channelId).then((logos) => {
            // مفترض الدالة دي بترجع object فيه id: url
            if(logos && logos[video.channelId]) {
                setChannelLogo(logos[video.channelId]);
            }
        });

    }, [video?.channelId]);

    // Validation
    if (!video?.thumbnails?.standard?.url) return <Skeleton className="w-130 h-72 rounded-md" />

    // // Debugging: بص هنا في الكونسول عشان تتأكد الاسم صح
    // console.log('Stats Object:', video.statistics); 
    // console.log('Raw Views:', rawViews);

    return (
        <div className="w-130 hover:shadow-2xl hover:shadow-black duration-300 transition-all hover:duration-300 rounded-md cursor-pointer bg-transparent">
            <Link to={`/videos/${video.id}`} className="bg-transparent">
                <img src={video.thumbnails?.standard?.url} className="rounded-md w-full" alt={video.title} />
            </Link>
            
            <div className="flex w-full mt-3">
                {/* Channel Logo */}
                {channelLogo ? (
                    <img src={channelLogo} className="h-12 w-12 rounded-full mr-3" alt="channel logo" />
                ) : (
                    <Skeleton className="h-12 w-12 rounded-full mr-3" />
                )}

                <div className="flex flex-col items-start w-full">
                    <h2 className="font-semibold text-white line-clamp-2">{video.title}</h2>
                    <div className="w-full flex flex-col items-start text-start mt-1">
                        <Link 
                            to={'/'} 
                            className="text-sm font-semibold text-gray-400 duration-300 transition-all hover:text-white hover:duration-300"
                        >
                            {video.channelTitle}
                        </Link>
                        
                        {/* 3. هنا عرض المشاهدات بعد التصليح */}
                        <p className="text-sm text-gray-400 mt-1">
                            {formattedViews} views
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}