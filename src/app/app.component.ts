import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public conten = "Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item";
	public post:any =[{
					  title: "Mon premier post",
					  content: this.conten,
					  loveIts: 1,
					  created_at: new Date().toLocaleString()
					},{
					  title: "Mon deuxieme post",
					  content: this.conten,
					  loveIts: 0,
					  created_at: new Date().toLocaleString()
					},{
					  title: "Encore un post",
					  content: this.conten,
					  loveIts: -1,
					  created_at: new Date().toLocaleString()
					}];
  title = 'exo';
}
