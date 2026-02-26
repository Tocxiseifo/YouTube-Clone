import { Context } from "@/Context/Context";
import useVideos from "@/Hooks/useVideos";
import fetchSearch from "@/Service/FetchSearch";
import { useContext, useEffect } from "react";

export default function SearchResult() {
    const contexts = useContext(Context)
    const {search , setSearch} = contexts || {}
    const {videos ,loading , error} = useVideos()
    useEffect(() =>{
        fetchSearch(search || '').then((searchInput) =>{
            setSearch?.(searchInput)
            console.log(searchInput);
        })    
    },[search ,setSearch])
    if(!contexts) return null
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return(
        <div className="text-white">
            {search && videos.map(search => (  
                <div key={search.id}>
                    <h1>{search.title}</h1>
                </div>
            ))}
        </div>
    )

}