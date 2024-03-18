import { Component } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  latestPosts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.api.getPosts()
      .subscribe(posts => {
        this.latestPosts = posts;
      });
  }
}
