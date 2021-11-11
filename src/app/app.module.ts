import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faStackOverflow, faGithub, faMedium, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HightlightTextPipe } from './pipe/hightlight-text.pipe';
import { CommentsListComponent } from './component/comments-list/comments-list.component';
import { CommentsReplyListComponent } from './component/comments-reply-list/comments-reply-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HightlightTextPipe,
    CommentsListComponent,
    CommentsReplyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faStackOverflow, faGithub, faMedium, faFacebook, faYoutube);
  }
}
