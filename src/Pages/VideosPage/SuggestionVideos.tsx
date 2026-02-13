//===================Hooks==============
import useVideos from "@/Hooks/useVideos"

//================Router=====================
import { Link, useParams } from "react-router"

export default function SuggestionVideos() {
    const {videos , loading , error} = useVideos()
    const param = useParams()
    const videoId = param.id
    
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    return(
        <div className="flex flex-col ml-10 gap-4">
            {videos.filter(video => video.id !== videoId).map(video => (
                <div key={video.id} className="flex flex-row  text-start gap-2">
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
                        <img src={video.thumbnails?.default?.url} className="rounded-md" alt={video.title}/>
                    </Link>
                    <div className="flex flex-col ">
                        <h2 className=" font-semibold text-white ">{video.title}</h2>
                        <Link to={'/'} className="mt-2 font-semibold text-sm text-gray-400 ">{video.channelTitle}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}