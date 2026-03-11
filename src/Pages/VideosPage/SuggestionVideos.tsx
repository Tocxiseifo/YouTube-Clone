//===================Hooks==============
import useVideos from "@/Hooks/useVideos"
import { useFormatViews } from "@/Hooks/useformatViews"

//===============Shadcn UI======================
import { Skeleton } from "@/components/ui/skeleton"

//================Router=====================
import { Link, useParams } from "react-router"



export default function SuggestionVideos() {
    const {videos , loading , error} = useVideos()
    const param = useParams()
    const videoId = param.id

    const formatViews = useFormatViews;

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return(
           <div className="flex flex-col w-full lg:w-auto lg:min-w-[320px] lg:max-w-[400px] ml-0 lg:ml-10 gap-4 px-3 sm:px-4 lg:px-0 flex-shrink-0">
                   {videos.filter(video => video.id !== videoId).map(video => (
                       <div key={video.id}>
                           {!video?.thumbnails?.medium?.url && <Skeleton className="w-45 h-24 rounded-md" />}
                            <div className="flex flex-row text-start gap-2 min-w-0">
                                {/* // IMPORTANT:
                                    // Always use absolute path (start with "/") when navigating to main routes.
                                    // If you don't add "/", React Router treats it as a relative path
                                    // and appends it to the current URL.
                                    // Example:
                                    // Current: /videos/abc123
                                    // navigate("videos/xyz")  ❌ => /videos/abc123/videos/xyz
                                    // navigate("/videos/xyz") ✅ => /videos/xyz
                                */}
                                <Link to={`/videos/${video.id}`}   className="bg-transparent">  
                                    <img src={video.thumbnails?.medium?.url} className="rounded-md w-32 sm:w-40 md:w-45 shrink-0 object-cover aspect-video" alt={video.title}/>
                                </Link>
                                <div className="flex flex-col min-w-0 flex-1">
                                    <h2 className="font-semibold text-white line-clamp-2">{video.title}</h2>
                                    <Link to={'/'} className="mt-2 font-semibold text-sm text-gray-400 ">{video.channelTitle}</Link>
                                    <p className="text-sm text-gray-400 mt-1">{formatViews(video.viewCount)} views</p>
                                </div>
                            </div>
                       </div>
                   ))}
               </div>
    )
}