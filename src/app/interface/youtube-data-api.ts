export interface YoutubeDataApi {
    etag: number;
    kind:string;
    nextPageToken:string;
    items: Items[];

}
interface Items {
    etag: string;
    kind:string;
    snippet:{
        canReply:boolean;
        totalReplyCount:number
        topLevelComment:{
            snippet:{
                authorDisplayName:string
                textOriginal:string
            }
        }
    }
}