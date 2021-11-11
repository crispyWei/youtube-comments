import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeDataApi} from '../../interface/youtube-data-api';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map, filter, toArray, concatMap, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class YoutubeDataApiService {

  //API Key
  private apiKey      = "AIzaSyCrhQceLNflnlI6e0mQGzrEJmsbNL8Cgqo";
  //Youtube Data API
  private commentsApi = "https://www.googleapis.com/youtube/v3/commentThreads";
  //欲查詢網址
  private url = "";
  //http header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }
  constructor(private http:HttpClient) { 

  }
  //get comments data service
  youtubeCommentsData(required:string, videoid:string, maxresults:number, filterWord:string):Observable<YoutubeDataApi>{
    this.url = this.commentsApi+"?part="+required+"&key="+this.apiKey+"&videoId="+videoid+"&maxResults="+maxresults;
    return this.http.get<YoutubeDataApi>(this.url)
    .pipe(
      retry(3),
      // tap(t => console.log(t)),
      map(model => {
          const items = model.items.filter( item => item.snippet.topLevelComment.snippet.textOriginal.includes(filterWord));
          model.items = items;
          return model;
      }),
      catchError(this.handleError)
    )
  }
  //get youtube reply service
  youtubeReplyData(required:string, replyId:string, maxresults:number):Observable<any>{
    this.url = this.commentsApi+"?part="+required+"&key="+this.apiKey+"&id="+replyId+"&maxResults="+maxresults;
      return this.http.get<any>(this.url).pipe(
        map(result => {
          return result;
        }),
        catchError(this.handleError)
    )
  }
  //error handler
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
