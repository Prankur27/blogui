import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { User } from './user/User.model';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserandpostService {

  private userAndPostService: string = "http://localhost:8080/usersandposts";

  constructor(private http: HttpClient) { }

  getUserAndPost():Observable<User []>{

     return this.http.get<User[]>(this.userAndPostService);
  }
}
