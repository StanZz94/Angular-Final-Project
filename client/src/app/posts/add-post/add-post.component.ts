import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addNewPost(event: Event, title: string, imageUrl: string, myPost: string ) {
    event.preventDefault();
    this.apiService.createPost(title, imageUrl, myPost);
    this.router.navigate(['/blog']);
  }
}
