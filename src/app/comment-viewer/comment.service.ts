import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Comment } from './comment/Comment.model';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentServiceUrl: string = "http://localhost:8080/posts?postId=";

  constructor(private http: HttpClient) { }

  getCommentsForPost(postId: number):Observable<Comment []>{
     return this.http.get<Comment[]>(this.commentServiceUrl+postId);
  }
}
