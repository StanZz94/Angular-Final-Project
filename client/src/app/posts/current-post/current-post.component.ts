import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';
import { Comment } from 'src/app/types/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
  
  post = {} as Post;
  comments = {} as Comment;
  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activateRoute.params.subscribe((data) => {
      console.log(data)
      const id = data["id"];

      this.apiService.getPost(id).subscribe((post) => {
        this.post = post;
        //console.log(post);
        
      });
    })

    this.apiService.getComments().subscribe((comment) => {
      //console.log(comment);
      
    });
  }
}
