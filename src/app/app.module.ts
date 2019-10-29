import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserandpostService } from './userandpost.service';
import { PostViewerComponent } from './post-viewer/post-viewer.component';
import { PostComponent } from "./post-viewer/post/post.component"
import { CommentViewerComponent} from './comment-viewer/comment-viewer.component'
import { CommentComponent} from './comment-viewer/comment/comment.component'
import {CommentService} from './comment-viewer/comment.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostViewerComponent,
    PostComponent,
    CommentViewerComponent,
    CommentComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserandpostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
