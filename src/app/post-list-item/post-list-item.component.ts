import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	@Input() post:any;
	@Input() color:any;
	@Input() id: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  loveItsIncr(){
	  this.postService.aime(this.id);
  }

  loveItsDecr(){
    this.postService.detest(this.id);
  }

  remove(){
    this.postService.removePost(this.id);
  }

}
