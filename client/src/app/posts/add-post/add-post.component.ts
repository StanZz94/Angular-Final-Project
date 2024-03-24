import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { imageValidator } from 'src/app/shared/utils/image-validator';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    imageUrl: ['', [Validators.required, imageValidator()]],
    textarea: ['', [Validators.required, Validators.minLength(10)]],
  })

  addNewPost(): void {
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value)
    //this.router.navigate(['/blog']);
  }
}
