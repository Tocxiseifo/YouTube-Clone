export default interface Video {
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
    // Date:string
}