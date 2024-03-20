import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const { apiUrl } = environment;

    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }

  getPost() {
    const { apiUrl } = environment;
  }
  createPost(title: string, imageUrl: string, myPost: string) {
    const { apiUrl } = environment;
    return this.http.post<Post>(`${apiUrl}/posts` , {title, imageUrl, myPost}).subscribe();
  }

  getComments() {}
}
