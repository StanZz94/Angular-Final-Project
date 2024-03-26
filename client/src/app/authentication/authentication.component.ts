import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{
  constructor(private userService: UserService) {}

  isAuthenticating = true;

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: ()=> {
        this.isAuthenticating = false;
      },
      error: ()=> {
        this.isAuthenticating = false;
      },
      complete: ()=> {
        this.isAuthenticating = false;
      },
    })
  }
}
