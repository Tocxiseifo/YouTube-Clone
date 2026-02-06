import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY
const BaseUrl =  "https://www.googleapis.com/youtube/v3"

export default async  function fetchPopularVideos() {
    const Response = axios.get(`${BaseUrl}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`)
    if (!Response) throw new Error('Failed to fetch popular videos')
    const ResponseData = (await Response).data.items
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ResponseData.map((item: any) => ({
        ...item,
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        thumbnails: item.snippet.thumbnails,
    }))

}