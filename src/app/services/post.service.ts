import { Injectable } from '@angular/core';
import {PostModel} from '../models/post.model';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
@Injectable()
export class PostService {
  Post: PostModel[] = [];
  loard: boolean;
  postSubject = new Subject<PostModel[]>();
  constructor() {
    this.loard = true;
    this.getPost();
  }

  getPost() {
    firebase.database().ref('/posts').on('value', (snapshot)=> {
      if (snapshot.val()) {
        this.Post = snapshot.val() ? snapshot.val() : [];
        this.emeteur();
        this.loard = false;
      } else {
        this.loard = false;
      }
    });
  }

  emeteur() {
    this.postSubject.next(this.Post.slice());
  }

  aime(id) {
    this.Post[id].loveIts++;
    this.firebaseUpd();
    this.emeteur();
  }

  detest(id) {
    this.Post[id].loveIts--;
    this.firebaseUpd();
    this.emeteur();
  }
  firebaseUpd(){
    firebase.database().ref('/posts').set(this.Post).then(
      (success) => {
      },
      (error) =>  {
        console.log(error);
      }
    );
  }
  creatNexPost(postN: PostModel) {
    this.Post.push(postN);
    firebase.database().ref('/posts').set(this.Post).then(
      (success) => {
      },
      (error) =>  {
        console.log(error);
      }
    );
    this.emeteur();
  }

  removePost(id: number) {
    this.Post.splice(id, 1);
    this.firebaseUpd();
    this.emeteur();
  }
}
