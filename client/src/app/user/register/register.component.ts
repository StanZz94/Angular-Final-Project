import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { passwordsMatchValidator } from 'src/app/shared/utils/password-match-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  get passGroup() {
    return this.form.get('passGroup')
  }

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, emailValidator([''])]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
      },{
        validators: [passwordsMatchValidator('password', 'repeatPassword')]
      }),
  });

  register():void {
    if(this.form.invalid) {
      return 
    }

    const { name, lastName, email, passGroup:{password, repeatPassword} = {}, } = this.form.value;
    console.log(this.form.value);
    
    this.userService.register(name!, lastName!, email!, password!, repeatPassword!).subscribe(() => {
      this.router.navigate(['/home'])
    }); 
  }
}
