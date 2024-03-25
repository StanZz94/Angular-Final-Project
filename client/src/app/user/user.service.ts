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
    return this.http.post('/data/register', {name, lastName, email, password, repeatPassword });
  }

  login(email: string, password: string) {

    return this.http.post('/data/login', { email, password });
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
