import Home from "@/Pages/Home";
import { Route, Routes } from "react-router";

export default function AppRouters() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos/:id" element={<Home />} />

        </Routes>
    )
}