import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginform!:FormGroup;

  ngOnInit(){
    this.loginform=new FormGroup({
    
      email:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])
    });
  }
  login(){
    console.log(this.loginform.value)
  }
}
