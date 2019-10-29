import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../user/Post.model';


@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input()
    post: Post;

    postId: number;

    constructor() { }

    ngOnInit() {

    }

    getCommentForPost(selectedpost: Post){
        console.log(selectedpost.id)
        this.postId = selectedpost.id;
    }

    setPostIdForComment(){
        if(this.postId){
            return this.postId;
        }
        return undefined;
    }
}
