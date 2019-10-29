import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Post } from '../user/Post.model';

@Component({
    selector: 'post-viewer',
    templateUrl: './post-viewer.component.html',
    styleUrls: ['./post-viewer.component.scss']
})
export class PostViewerComponent implements OnInit, OnChanges {

    postToLoad = 3;
    showLoadMore = true;

    @Input()
    posts: Post[];

    constructor() { }

    ngOnInit() {

    }
    
    ngOnChanges(){
        this.postToLoad =3;
        this.showLoadMore = true;
    }

    loadmore(){
        this.postToLoad= this.posts.length;
        this.showLoadMore = false;
    }

}
