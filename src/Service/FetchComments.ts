export default async function fetchComments(videoId: string) {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&key=${API_KEY}`)
    const data = await response.json()
    console.log('Data:',data);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.items.map((item: any) => ({
        author: item.snippet.topLevelComment.snippet.authorDisplayName,
        text: item.snippet.topLevelComment.snippet.textDisplay,
        date: item.snippet.topLevelComment.snippet.publishedAt,
        avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        LikeCount: item.snippet.topLevelComment.snippet.likeCount,
        ReplyCount: item.snippet.totalReplyCount,
    }))
}