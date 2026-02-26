export default async function fetchSearch(searchQuery: string) {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${API_KEY}`);  
    const data = await response.json()
    console.log('Data:',data);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.items.map((item:any) =>{
        return {
            id: item.id.videoId,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            thumbnails: item.snippet.thumbnails,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            viewCount: item.statistics.viewCount,
        }
    })
}