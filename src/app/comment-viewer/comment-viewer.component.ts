import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment/Comment.model';

@Component({
    selector: 'comment-viewer',
    templateUrl: './comment-viewer.component.html',
    styleUrls: ['./comment-viewer.component.css']
})
export class CommentViewerComponent implements OnInit, OnChanges {

    @Input()
    postId: number;

    showCommentErrorOnFailure = false;
    comments:Comment[];

    constructor(private commentService: CommentService) { }

    ngOnInit() {

    }

    ngOnChanges(){
        this.getComments();
    }
    
    getComments() {
        if (this.postId !== undefined) {
            this.commentService.getCommentsForPost(this.postId)
                .subscribe((data) => {
                    this.comments = data;
                }, (error) => {
                    this.showCommentErrorOnFailure = true;
                });
        }
    }
}
