import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exo Angular OpenClassRoom';
  constructor(){
   const config = {
      apiKey: "AIzaSyA0DQchMygQhJKWcqwSfN13bI0XJADsTtk",
      authDomain: "exoopen.firebaseapp.com",
      databaseURL: "https://exoopen.firebaseio.com",
      projectId: "exoopen",
      storageBucket: "exoopen.appspot.com",
      messagingSenderId: "270230837954"
    };
      firebase.initializeApp(config);

  }
}
