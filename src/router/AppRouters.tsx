import Home from "@/Pages/Home";
import VideoPage from "@/Pages/VideosPage/VideosPage";
import { Route, Routes } from "react-router";

export default function AppRouters() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos/:id" element={<VideoPage  />} />
        </Routes>
    )
}