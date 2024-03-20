import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {path: 'add-post', component: AddPostComponent, canActivate: [AuthActivate]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
