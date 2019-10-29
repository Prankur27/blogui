import { Component, OnInit } from '@angular/core';
import { UserandpostService } from '../userandpost.service';
import { User } from './User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;
  showLoader = true;
  showErrorOnFailure = false;

  constructor(private userAndPostService: UserandpostService) { }

  ngOnInit() {
      this.getUserAndPost();
          
  }

  getUserAndPost() {
    this.userAndPostService.getUserAndPost()
      .subscribe((data) => {
        this.showLoader = false;
        this.users = data;
      }, (error) => {
        this.showLoader = false;
        this.showErrorOnFailure = true;
      });
  }

  getUserPost(){
    if(this.selectedUser){
      return this.selectedUser.post;
    }
    return undefined;
  }

  selectUser(user:User){
      this.selectedUser = user;
      
  }

  

}
