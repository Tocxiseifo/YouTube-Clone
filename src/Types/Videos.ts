export default interface Video {
    channelId: any
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
    ViewCount?:string | number
    // Date:st  ring
}