// import VideoInfo from "./VideoInfo";
import SuggestionVideos from "./SuggestionVideos";
import VideoPlayer from "./VideoPlayer";
// import { useParams } from "react-router";


export default function VideoPage() {
    return(
        <>
            <section className="flex flex-col lg:flex-row ml-0 sm:ml-4 md:ml-15 w-full min-w-0 h-auto gap-4 lg:gap-0 px-3 sm:px-4">
                <VideoPlayer  />
                <SuggestionVideos  />
            </section>
        </>
    )
}  
