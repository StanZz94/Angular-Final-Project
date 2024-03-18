import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {
  latestPosts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getLatestsPosts();
  }

  getLatestsPosts(): void {
    this.api.getLatestsPosts()
      .subscribe(posts => {
        this.latestPosts = posts.slice(0, 3);
      });
  }

}