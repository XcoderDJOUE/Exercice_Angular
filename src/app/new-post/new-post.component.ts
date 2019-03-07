import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostModel} from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  formPost: FormGroup;

  constructor(public postservice: PostService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formPost = this.formBuilder.group({
      titre: ['', Validators.required],
      contenue: ['', Validators.required]
    });
  }

  onSubmitForm() {
  const postConetnt = this.formPost.value;
  const date = new  Date();
  const post: PostModel = new PostModel(
      postConetnt[ 'titre' ],
      postConetnt['contenue'],
    0,
      date
  );
  this.postservice.creatNexPost(post);
  this.router.navigate(['/posts']);
  }
}
