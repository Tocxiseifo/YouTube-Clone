import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export async function fetchChannelsLogos(channelIds: string) {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        part: "snippet",
        id: channelIds,
        key: API_KEY,
      },
    }
  );

  const logos: Record<string, string> = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.data.items.forEach((channel: any) => {
    logos[channel.id] = channel.snippet.thumbnails.default.url;
  });

  return logos;
}
