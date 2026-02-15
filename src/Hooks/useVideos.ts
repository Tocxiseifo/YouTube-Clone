import fetchPopularVideos from "@/Service/YoutubeApi";
import {  useEffect , useState } from "react";

export default function useVideos() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [videos, setVideos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchPopularVideos().then((data) => {
            setVideos(data)
            setLoading(false)
            setError(null)
        }).catch((error) => {
            setError(error.message)
            setLoading(false)
        })
    },[])
    // console.log(videos);
    return {videos, loading, error}
}