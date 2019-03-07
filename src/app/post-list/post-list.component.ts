import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {PostModel} from '../models/post.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(private postService: PostService) { }
  post: PostModel[] = [];
  postSub: Subscription;
  ngOnInit() {
    this.postSub = this.postService.postSubject.subscribe(
      (postR: any[]) => {
        this.post = postR;
      }
    );
    this.postService.emeteur();

  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
