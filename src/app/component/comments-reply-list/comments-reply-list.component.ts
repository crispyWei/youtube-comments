import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments-reply-list',
  templateUrl: './comments-reply-list.component.html',
  styleUrls: ['./comments-reply-list.component.scss']
})
export class CommentsReplyListComponent implements OnInit {
  @Input() modal:any;
  @Input() replyComments:any;
  faThumbsUp = faThumbsUp;

  constructor() { }

  ngOnInit(): void {
   
  }

}
