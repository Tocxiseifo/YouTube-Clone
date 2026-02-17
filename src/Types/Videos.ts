export default interface Video {
    channelId: string
    id:string,
    thumbnails: {
        standard?: {
            url: string
        },
        medium?: {
            url: string
        }
        high?: {
            url: string
        }
    },
    title:string,
    channelTitle:string
    viewCount?:string | number
    like?:string | number
    dislike?:string | number
}