// import { AppSidebar } from "@/components/SideSection/SideSection";
import VideoCard from "@/components/VideoSection/VideoCard";
import useVideos from "@/Hooks/useVideos";


export default function Home() {
    const {videos,loading,error} = useVideos()

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    return(
        <div className="w-full flex-row flex-wrap justify-center gap-12 mx-auto px-4 mt-4">
            <div className='w-full ml-25 flex flex-wrap justify-center gap-4 mx-auto px-4  mt-4'>
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    )

}