//==================Components==================
import MenuDrawer from "@/components/SideSection/SideSection";
import VideoCard from "@/components/VideoSection/VideoCard";

//==================Hooks==================
import useVideos from "@/Hooks/useVideos";

export default function Home() {
    const {videos,loading,error} = useVideos()

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    return(
        <div className="w-full flex flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mx-auto px-3 sm:px-4 mt-4">
                <div className='fixed top-0 '>
                    <MenuDrawer />
                </div>
            <div className='w-full ml-0 sm:ml-4 md:ml-15 lg:ml-25 flex flex-wrap justify-center gap-3 sm:gap-4 mx-auto px-3 sm:px-4 mt-4'>
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    )

}