import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { YoutubeDataApiService } from './shared/services/youtube-data-api.service';
import { CommentsParams } from './enum/comments-params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'youtube-comments';
  faThumbsUp = faThumbsUp;
  //讀取資料預設網址
  defaultYoutubeUrl:any="https://www.youtube.com/watch?v=XEtPwkHe0RU";
  //過濾關鍵字
  filterWord:string = "";

  //Youtube Data API影片參數
  private videoId      = "";

  //訊息評論列表
  channels:any;
  //訊息回覆列表
  replyComments:any;

  constructor(private youtubeDataApiService:YoutubeDataApiService) {
    
  }
  
  //抓取評論區留言
  getCommentsBtn(url:string){
    this.videoId = url.split("=")[1];
    this.youtubeDataApiService.youtubeCommentsData(CommentsParams.snippet, this.videoId, CommentsParams.maxResults, this.filterWord).subscribe((data) => {
      this.channels = data.items;
    });
  }

}
