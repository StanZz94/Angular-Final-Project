import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
  
  post = {} as Post;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
    this.apiService.getPost('91483680-4974-4fb7-888a-24752ca56d3e').subscribe((post) => {
      this.post = post;
    });
  }
}
