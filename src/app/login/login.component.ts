import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { AuthService } from '../services/auth.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginModel:Login = {username:'',password:''};
  alert:boolean = false;
  issubmitted:boolean = false;

  constructor(private fb: FormBuilder,private loginService:LoginServiceService,private authService: AuthService, private router: Router) {}
 
  ngOnInit(): void {
    this.loginForm =  this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
        });
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit(loginForm:FormGroup){
    this.issubmitted = true;
    console.log("username: "+loginForm.value.username);
    console.log("password: "+loginForm.value.password);
    this.loginModel.username = loginForm.value.username;
    this.loginModel.password = loginForm.value.password;
    console.log(this.loginModel.password);
    this.loginService.authenticate(this.loginModel).subscribe((data:any)=>{
        if(data.result==true){
          this.alert = false;
          this.authService.login(this.loginForm.value);
          this.router.navigateByUrl('/home');
        }else{
          this.alert = true;
        }
    })
  }
}
