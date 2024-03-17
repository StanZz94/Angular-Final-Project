import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';



@NgModule({
  declarations: [
    AddPostComponent,
    CurrentPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
