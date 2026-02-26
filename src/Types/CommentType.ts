export default interface CommentType {
    id: number;
    author: string;
    text: string;
    avatar: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    date: any;
    LikeCount:number
}