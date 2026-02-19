export default async function fetchSubscribeCount(channelId: string): Promise<number> {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
        return data.items[0].statistics.subscriberCount || 0;
    }
    return 0;
} 