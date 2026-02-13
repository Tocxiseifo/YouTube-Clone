import useVideos from "@/Hooks/useVideos";
import { useParams } from "react-router";

export default function VideoPlayer() {
    const {videos , loading , error} = useVideos()
    const param = useParams()
    const videoId = param.id
    console.log(videoId);
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    return(
        <>
            {videos.filter(video => video.id === videoId).map((video) => (
                <div key={video.id} className="flex flex-col  text-start">
                    <iframe  src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" height={650} width={1125} allowFullScreen className="aspect-video rounded-md" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <div className="flex flex-col items-start text-start">
                        <div className="flex flex-col mt-2 text-start">
                            <h1 className="text-white mt-2 text-2xl">{videos.filter(video => video.id === videoId)[0].title}</h1>
                            <p className="text-white mt-2 text-[16px]">{videos.filter(video => video.id === videoId)[0].channelTitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}