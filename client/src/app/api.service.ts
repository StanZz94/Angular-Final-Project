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

  getLatestsPosts(){
    const { apiUrl } = environment;

    console.log(this.http.get<Post[]>(`${apiUrl}/posts`).subscribe((value) =>{
      console.log(value);
      
    }));
    
    return this.http.get<Post[]>(`${apiUrl}/posts?_limit=3&_sort=id&_order=desc`)
  }

  getComments() {}
}
