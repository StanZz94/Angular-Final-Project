import { Injectable, OnDestroy } from '@angular/core';
import { UserAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<UserAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  user: UserAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user
    })
  }

  getUser() {
    console.log(this.user)
    return this.http.get<UserAuth>(`/api/users/profile`)
    .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    name: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string,
  ) {
    return this.http.post<UserAuth>('/api/register', {  name, lastName, email, password, repeatPassword }).pipe(
      tap((user)=>this.user$$.next(user))
    );
  }

  login(email: string, password: string) {

    return this.http.post<UserAuth>('/api/login', { email, password }).pipe(
      tap((user)=>this.user$$.next(user))
    );
  }

  logout() {
    return this.http.post('/api/logout', {}).pipe(
      tap(()=>this.user$$.next(undefined))
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
