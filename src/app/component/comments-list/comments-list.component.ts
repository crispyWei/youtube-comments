import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { YoutubeDataApiService } from '../../shared/services/youtube-data-api.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CommentsParams } from '../../enum/comments-params';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() channels:any;
  @Input() filterWord:any;

  faThumbsUp = faThumbsUp;
  replyComments:any;
  constructor(private youtubeDataApiService:YoutubeDataApiService, private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  //抓取回覆數留言
  getReplyMsg(content:any, replyId:string){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      
    }, (reason) => {
    
    });
    this.youtubeDataApiService.youtubeReplyData(CommentsParams.replies, replyId, CommentsParams.maxResults).subscribe((data) => {
      this.replyComments = data.items;
    });
  }
}
