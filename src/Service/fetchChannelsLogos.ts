import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function fetchChannelsLogos(channelIds: string) {
  // 1. حماية أولية: لو مفيش IDs مبعوتة، ارجع Object فاضي فوراً
  if (!channelIds) return {};

  try {
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

    // 2. صمام الأمان: استخدم Optional Chaining و Check
    // هنا بنضمن إن الكود مش هيحاول يعمل forEach إلا لو items موجودة فعلاً
    const items = response.data?.items;

    if (items && Array.isArray(items)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items.forEach((channel: any) => {
        logos[channel.id] = channel.snippet.thumbnails.default.url;
      });
    } else {
      console.warn("YouTube API returned no items. Check Quota or IDs.");
    }

    return logos;

  } catch (error) {
    // 3. معالجة الخطأ: عشان لو الـ API ضرب 403 (Quota) الـ App يفضل شغال
    console.error("Error fetching YouTube logos:", error);
    return {}; 
  }
}