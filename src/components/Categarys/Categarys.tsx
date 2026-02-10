const categories = [
    {
        id:0 ,  
        title: 'Gaming'
    },
    {
        id:1 ,  
        title: 'Comedy'
    },
    {
        id:2 ,  
        title: 'Podcast'
    },
    {
        id:3 ,  
        title: 'Ides'
    },
    {
        id:4 ,  
        title: 'Sport'
    },
    {
        id:5 ,  
        title: 'Mixed'
    },
    {
        id:6 ,  
        title: 'New to you'
    },
    {
        id:7 ,  
        title: 'Seasons'
    },
    {
        id:8 ,  
        title: 'Source code'
    },
    {
        id:9,  
        title: 'Kids'
    }, 
    {
        id:10,   
        title: 'History'
    },
    {
        id:11,   
        title: 'Rapping'
    },
    {
        id:12,   
        title: 'Watched'
    },
    {
        id:13,   
        title: 'Pop music'
    },
]

export default function Category() {
    return(
        <div className="flex justify-center w-full items-center gap-3">
            {categories.map((category) => (
                <div key={category.id} className='flex cursor-pointer hover:bg-white/30 duration-300 transition-all hover:duration-300 justify-center items-center w-24 h-8 text-white font-bold text-center bg-white/10  backdrop-blur-xl rounded-md'>
                    <span className="text-sm">{category.title}</span>
                </div>
            ))}
        </div>
    )
}