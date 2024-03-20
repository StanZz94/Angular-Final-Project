import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { ApiService } from '../../api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {
  latestPosts: Post[] = [];

  constructor(private api: ApiService, private userService: UserService) {}

  get isLoggedIn(): boolean{
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.getLatestPosts();
  }

  getLatestPosts(): void {
    this.api.getPosts()
      .subscribe(posts => {
        this.latestPosts = posts.slice(0, 3);
      });
  }

}