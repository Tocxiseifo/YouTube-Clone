// import VideoInfo from "./VideoInfo";
import SuggestionVideos from "./SuggestionVideos";
import VideoPlayer from "./VideoPlayer";
// import { useParams } from "react-router";


export default function VideoPage() {
    return(
        <>
            <section className="flex ml-15 w-full h-auto  ">
                <VideoPlayer  />
                <SuggestionVideos />
            </section>
        </>
    )
}  
