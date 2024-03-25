import { Injectable } from '@angular/core';
import { UserAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserAuth | undefined;
  USER_KEY = '[user]'

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {

    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  register(
    name: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string,
  ) {
    console.log({ name, lastName, email, password, repeatPassword })
    return this.http.post<UserAuth>('/users/register', {  name, lastName, email, password, repeatPassword });
  }

  login(email: string, password: string) {

    return this.http.post<UserAuth>('/users/login', { email, password });
  }

  logout() {
    return this.http.get('/users/logout', {})
  }
}
