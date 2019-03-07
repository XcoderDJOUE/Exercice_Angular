import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPostComponent} from './new-post/new-post.component';
import {PostListComponent} from './post-list/post-list.component';

const routes: Routes = [
  {path : 'new', component : NewPostComponent},
  {path : 'posts', component : PostListComponent},
  {path : '', redirectTo : '/posts', pathMatch: 'full'},
  {path : '**', redirectTo : '/posts'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
