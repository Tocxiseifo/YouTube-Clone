import axios from "axios";

export async function fetchChannelLogo(channelId: string) {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        part: "snippet",
        id: channelId,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    }
  );
  console.log("CHANNEL RESPONSE:", response.data);

  return response.data.items[0].snippet.thumbnails.default.url;
}
