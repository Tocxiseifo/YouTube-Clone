import axios from "axios"

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = "https://www.googleapis.com/youtube/v3"


export default async function fetchPopularVideos() {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 25,
      key: API_KEY,
    },
  })

  const items = response.data.items

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
    thumbnails: item.snippet.thumbnails,
    channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
    videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
  }))
}
