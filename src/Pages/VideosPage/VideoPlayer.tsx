//=================Hooks=================
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useFormatViews } from "@/Hooks/useformatViews";

//=================Shadcn UI=================
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react";

//=================Components=================
import DropdownMenuIcons from "@/components/ui/DropDown";

//=================Services=================
import { fetchChannelLogo } from "@/Service/LogoApiFetching";
import fetchSubscribeCount from "@/Service/fetchSubscribeCount";

//=================React Icons=================
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";

//===================Components==============
import CommentSection from "./CommentSection";
import fetchTheVideoData from "@/Service/FetchTheVideoData";
import type Video from "@/Types/Videos";
import DropdownSubscribeIcons from "@/components/ui/DropdownSubscribeIcons";

export default function VideoPlayer() {
    //====================States======================
    const [open, setOpen] = useState<boolean>(false)
    const [channelLogo, setChannelLogo] = useState<string>();
    const [subscriberCount, setSubscriberCount] = useState<number>(0);
    const [videoData, setVideoData] = useState<Video[]>([]);
    const [subscribeButton , setSubscribeButton] = useState<string>('all')    
    const [likeButton , setLikeButton] = useState<boolean>(false)
    const [dislikeButton , setDisLikeButton] = useState<boolean>(false)
    //=================ROUTER============
    const param = useParams()
    const videoId = param.id
    
    const currentVideo = videoData.find(v => v.id === videoId);
    const channelId = currentVideo?.channelId;
    const formattedLikes = useFormatViews(currentVideo?.like || 0) // Assuming like count is directly on the video object, adjust if it's nested under statistics
    const formattedViews = useFormatViews(currentVideo?.viewCount || 0); // Assuming viewCount is directly on the video object, adjust if it's nested under statistics

    const [subscribedChannels, setSubscribedChannels] = useState<string[]>(() =>{
        try{
            const storedChannels = localStorage.getItem('subscriptions');
            const parsed = storedChannels ? JSON.parse(storedChannels) : []
            return Array.isArray(parsed) ? parsed : []
        }
        catch{
            return []
        }
    })
    // هترجع true لو الـ id موجود، و false لو مش موجود
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isSubscribed = subscribedChannels.includes(channelId as string) 
    const formattedSubCount = useFormatViews(subscriberCount); // Assuming subscriber count is directly on the video object, adjust if it's nested under statistics    
    const currentIdVideo = videoData.find(v => v.id === videoId);
    const channelIdVideo = currentIdVideo?.channelId;

    //=====================Handlers======================
    function handleToggleSubscribe() {
        if (!channelIdVideo) return;
        const isAlreadySubscribe = subscribedChannels.includes(channelIdVideo);

        let updateSubscribe:string[]
        if (isAlreadySubscribe) {
            updateSubscribe = subscribedChannels.filter(id => id !== channelIdVideo)
            // setSubscribe(false)
            console.log('unsubscribe' , updateSubscribe);
        }else{
            updateSubscribe = [...subscribedChannels , channelIdVideo]
            console.log('subscribe' , channelIdVideo);
        }
        setSubscribedChannels(updateSubscribe)
        localStorage.setItem('subscriptions' , JSON.stringify(updateSubscribe))
    }

    //=====================Effects======================
    useEffect(() => {
        fetchSubscribeCount(channelId || "").then(count => {
        console.log("Fetched Subscriber Count:", count);
        setSubscriberCount(count);
    })
    },[channelId])
    useEffect(() => {
        fetchTheVideoData(videoId || "").then((data: Video[]) => {
        setVideoData(data);
      });
    }, [videoId]);
    useEffect(() => {
      if (!channelId) return;
      fetchChannelLogo(channelId).then((logo) => {
        setChannelLogo(logo);
      });
    }, [channelId]);

    console.log(subscribedChannels);
    
    return(
        <>
            {videoData.map((video) => (
                <div key={video.id} className="flex flex-col  text-start">
                    <iframe  src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" height={720} width={1525} allowFullScreen className="aspect-video rounded-md " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <div className="flex flex-col items-start text-start">
                        <div className="flex flex-col mt-2 text-start w-full">
                            <h1 className="text-white mt-2 text-2xl">{video.title}</h1>
                            <div className="flex justify-between items-center w-full ">
                                <div className=" flex  items-center justify-between w-full  gap-2">
                                    <div className="flex gap-2 items-center ">
                                        <img  src={channelLogo} alt="channel logo" className="rounded-[50%] h-10 w-10 mt-2 object-cover" />
                                        <div className="flex flex-col ">
                                            <p className="text-white mt-2 w-65 text-[16px]">{video.channelTitle}</p>
                                            <p className="text-gray-400 text-sm">{formattedSubCount} subscribers</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 w-full mt-2">
                                        <div className="flex   items-center gap-3 w-45">
                                            <button className="hover:bg-white/30 cursor-pointer duration-300 transition-all  hover:duration-300  w-15 h-8 rounded-full  text-white text-sm text-center bg-white/10  backdrop-blur-xl border-transparent">Join</button>
                                            {!isSubscribed ?
                                                // <  className="bg-white/30  w-22 font-bold text-black rounded-full h-9 cursor-pointer transition duration-300 hover:duration-300 hover:bg-gray-300 border-transparent">
                                                <button className="bg-white w-22 font-bold rounded-full h-9 cursor-pointer transition duration-300 hover:duration-300 hover:bg-gray-300 border-transparent" onClick={handleToggleSubscribe}>
                                                    Subscribed
                                                </button>
                                                :
                                                <DropdownSubscribeIcons subscribeButton={subscribeButton} setSubscribeButton={setSubscribeButton} handleButton={handleToggleSubscribe} />
                                            }
                                        </div>
                                        <div className="flex gap-2 w-full h-auto items-center justify-end">
                                            <div className="flex items-center justify-center w-38 h-10 rounded-full bg-white/10 backdrop-blur-xl ">
                                                <button className="flex cursor-pointer rounded-r-sm items-center justify-center w-28 h-full gap-2 text-white font-bold text-sm hover:bg-white/30 transition-all duration-300 hover:duration-300 rounded-full" onClick={() => setLikeButton(!likeButton)}>
                                                    {likeButton ? <AiFillLike size={22} /> : <SlLike size={22} />}
                                                    
                                                    {formattedLikes}
                                                </button>
                                                <span className="text-white ">|</span>
                                                <button className="text-white cursor-pointer rounded-l-sm mt-1 hover:bg-white/30 transition-all duration-300 hover:duration-300 rounded-full w-12 h-10 flex items-center justify-center" onClick={() => setDisLikeButton(!dislikeButton)}>
                                                    {dislikeButton ? <SlDislike size={22} /> : <BiSolidDislike size={22} />}
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-center w-28 h-10 rounded-full bg-white/10 backdrop-blur-xl">
                                                <button className="flex f cursor-pointer rounded-full items-center justify-center w-full h-full gap-2 text-white font-bold text-sm hover:bg-white/30 transition-all duration-300 hover:duration-300">
                                                    <TbShare3 size={25} />
                                                    Share
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-center w-35 h-10 rounded-full bg-white/10 backdrop-blur-xl">
                                                <button className="flex f cursor-pointer rounded-full items-center justify-center w-full h-full gap-2 text-white font-bold text-sm hover:bg-white/30 transition-all duration-300 hover:duration-300">
                                                    <HiDownload size={25} />
                                                    Download
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-center w-25 h-10 rounded-full bg-white/10 backdrop-blur-xl">
                                                <button className="flex font-bold cursor-pointer rounded-full items-center justify-center w-full h-full gap-2 text-white  text-[18px] hover:bg-white/30 transition-all duration-300 hover:duration-300">
                                                    <CiBookmark size={25} />
                                                    Save
                                                </button>
                                            </div>
                                            <DropdownMenuIcons />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card className=" hover:bg-white/30 duration-300 transition-all mt-4 hover:duration-300 rounded-md w-full  text-white font-bold text-center bg-white/10  backdrop-blur-xl border-transparent">
                                <CardContent>
                                  <Collapsible open={open} onOpenChange={setOpen} className="data-[state=open]:bg-transparent   bg-transparent hover:bg-transparent   rounded-md">
                                    <CollapsibleTrigger asChild>
                                      <Button variant="ghost" className="group  cursor-pointer bg-transparent hover:bg-transparent rounded-md hover:text-white w-full">
                                        <div className="flex w-130 text-white">
                                            <p className="text-lg">{formattedViews} views</p>
                                        </div> 
                                        <ChevronDownIcon className=" ml-auto group-data-[state=open]:rotate-180" />
                                      </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="flex flex-col items-start text-start gap-2 p-2.5 w-fit  pt-0 text-sm bg-transparent hover:bg-transparent rounded-md">
                                      <div className="w-240 text-gray-300">
                                      {currentVideo?.description}
                                      </div>
                                      {currentVideo?.tag?.map((tag: string) => (
                                        <div key={tag} className="text-gray-300">
                                          {tag}
                                        </div>
                                      ))}
                                      <div className="flex flex-row items-start text-start gap-4 ">
                                        <img src={channelLogo} alt="channel logo" className="rounded-[50%] h-10 w-10 mt-2 object-cover" />
                                        <div className="flex flex-col ">
                                          <p className="text-white mt-2 w-35 text-[16px]">{currentVideo?.channelTitle}</p>
                                          <p className="text-gray-400 text-sm">{formattedSubCount} subscribers</p>
                                        </div>
                                      </div>
                                    </CollapsibleContent>
                                  </Collapsible>
                                </CardContent>
                            </Card>
                            <CommentSection Id={video.id} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}