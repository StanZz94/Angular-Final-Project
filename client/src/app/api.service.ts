import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const { apiUrl } = environment;

    return this.http.get<any>(`${apiUrl}/posts`);
  }

  getComments() {}
}
