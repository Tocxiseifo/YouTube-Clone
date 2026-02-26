import { Context } from "@/Context/Context";
import useFormatDate from "@/Hooks/useFormatDate";
import fetchComments from "@/Service/FetchComments";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

//=====================Types===========
import type CommentType from "@/Types/CommentType";

//================Shadcn UI============
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//==================React Icon================
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl"
import { useFormatViews } from "@/Hooks/useformatViews";

export default function CommentSection({Id}: {Id?: string}) {    
    //=============Route===========
    const param = useParams();
    const videoId = param.id;
    //====================State===================
    const [commentInput , SetCommentInput] = useState<string>("");
    const [commentsList , SetCommentsList] = useState<CommentType[]>(() =>{
        try{
            const storedComments = localStorage.getItem(`comments-${videoId}`);
            const parsed = storedComments ? JSON.parse(storedComments) : []
            return Array.isArray(parsed) ? parsed : []
        }
        catch{
            return []
        }

    });
    const [commentBtn , SetCommentBtn] = useState<boolean>(false);
    const [like  , SetLike] = useState<number>(0);
    const [dislike  , SetDislike] = useState<number>(0);
    


    //=====================Effect============
    useEffect(() => {
        localStorage.setItem(
          `comments-${videoId}`,
          JSON.stringify(commentsList)
        );
    }, [commentsList, videoId]);

    //==============Context===========
    const context = useContext(Context)
    if (!context) return null;
    const {comment , SetComment} = context || {};
    
    //==============Handlers================
    const handleCommentSubmit = () => {
        if (commentInput.trim() === "") return;
    
        // بنعمل كائن جديد للكومنت (ممكن تضيف له اسمك وصورتك)
        const newComment = {
            id: Date.now(),
            author: "You",
            text: commentInput,
            avatar: "https://github.com/shadcn.png",
            date: Date.now(),
            LikeCount: like,
        };
    
        // إضافة الكومنت الجديد في أول القائمة
        SetCommentsList([newComment, ...(Array.isArray(commentsList) ? commentsList : [])]); 
        localStorage.setItem(
            `comments-${videoId}`,
            JSON.stringify(newComment)
          );
        // تنظيف المدخلات
        SetCommentInput("");
        SetCommentBtn(false); // إخفاء الزرار بعد الإرسال لو حابب
        // SetComment([newComment, ...(Array.isArray(comment) ? comment : [])]);
    };
   

    const handleInputFocus = () => {
        SetCommentBtn(true);
    }; //To appear the button when user focus on the input

    //==============Effects===================
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (!videoId) return;
        fetchComments(Id || "").then((comments) => {
          SetComment(comments);
          console.log("Fetched Comments:", comments);
        })
    },[SetComment, Id, videoId])
    if (!context) {
        return null;
    }

    //=============Hooks===========
    const FormatDate = useFormatDate
    const FormatLiked = useFormatViews
   
    return(
        <>
            <section className="flex flex-col items-start mt-5 w-full h-auto">
                <span className="text-zinc-300 text-2xl"> {Number(commentsList.length) + comment.length } Comments </span>
                <div className="flex mt-5  items-center w-full h-auto">
                    <div className="mr-6">
                        <Avatar>
                            <AvatarImage    
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                                className="grayscale"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    
                    <div className="flex flex-col items-end justify-end  w-full h-auto gap-4">
                        <input className="w-full mt-10 border-b-gray-500 duration-300 transition-all focus:border-b-zinc-300 border-2 border-transparent text-zinc-200  text-lg  focus:outline-none" placeholder="Add a comment..." type="text" onChange={(e) => SetCommentInput(e.target.value)} onFocus={handleInputFocus}  value={commentInput} />
                        {commentBtn && (
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            <button className={commentInput.length === 0 ? ' w-28 h-10 rounded-full bg-white/10  text-gray-600': 'w-28 cursor-pointer h-10 rounded-full bg-blue-500 text-black'} disabled={commentInput.length === 0} onClick={handleCommentSubmit}>Comment</button>
                        )}
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    {(Array.isArray(commentsList) && commentsList.map((comment) => (
                        <div key={comment.id} className="flex gap-4 items-start">
                            <img 
                                src={comment.avatar} 
                                alt="avatar" 
                                className="w-10 h-10 rounded-full object-cover bg-zinc-800"
                            />
                             <div className="flex flex-col items-start w-full h-auto">    
                                <div className="flex gap-2 items-center">
                                    <h4 className="font-bold text-zinc-200 cursor-pointer">{comment.author}</h4>
                                    <span className="text-white/35">{FormatDate(comment.date)}</span>
                                </div>
                                <div className="flex flex-col items-start w-full h-auto">
                                    <p className="text-zinc-300 w-fit">{comment.text}</p>
                                    <div className="flex items-center text-zinc-300 gap-2 mt-2">
                                        <SlLike size={15} className="cursor-pointer" onClick={() => SetLike(like + 1)}/>
                                        <span className="text-gray-500">
                                            {FormatLiked(comment.LikeCount ?? '')}
                                        </span>
                                        <SlDislike size={15} className="cursor-pointer" onClick={() => SetDislike(dislike + 1)} />
                                        <span className="text-gray-500">
                                            {FormatLiked('')}
                                        </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                    ))) ?? 'Loading...'}
                </div>
                {comment?.map((item, index) => (
                    <div key={index} className="flex  gap-4 my-4">
                    <img 
                    src={item.avatar} // لو مفيش avatar حط صورة من عندك
                    className="w-10 h-10 rounded-full cursor-pointer object-cover bg-zinc-800" 
                    alt={item.author || "user"}
                    referrerPolicy="no-referrer"
                    />                    
                <div className="flex flex-col items-start w-full h-auto">    
                    <div className="flex gap-2 items-center">
                        <h4 className="font-bold text-zinc-200 cursor-pointer">{item.author}</h4>
                        <span className="text-white/35">{FormatDate(item.date)}</span>
                    </div>
                    <div className="flex flex-col items-start w-full h-auto">
                        <p className="text-zinc-300 w-350">{item.text}</p>
                        <div className="flex items-center text-zinc-300 gap-2 mt-2">
                            <SlLike size={15} className="cursor-pointer" onClick={() => SetLike(like + 1)}/>
                            <span className="text-gray-500">
                                {FormatLiked(item.LikeCount ?? '')}
                            </span>
                            <SlDislike size={15} className="cursor-pointer" onClick={() => SetDislike(dislike + 1)} />
                            <span className="text-gray-500">
                                {FormatLiked('')}
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </section>
        </>
    )
}