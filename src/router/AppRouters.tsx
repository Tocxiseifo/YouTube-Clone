import Home from "@/Pages/Home";
import SearchResult from "@/Pages/Search Page/SearchResult";
import VideoPage from "@/Pages/VideosPage/VideosPage";
import { Route, Routes } from "react-router";

export default function AppRouters() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos/:id" element={<VideoPage  />} />
            <Route path="/search/:searchInput" element={<SearchResult />} />
        </Routes>
    )
}