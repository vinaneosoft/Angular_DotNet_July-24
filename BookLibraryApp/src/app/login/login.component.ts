import { Component } from '@angular/core';
import { UserService } from '../myservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // controller logic here
  // call service function, and get the result from service
 // service object is automatically injected
username="";
password="";
flag=false;
 constructor(public userService:UserService){ // 1. DI
 }
  testLogin(){
    this.flag=this.userService.login(this.username, this.password); // 2. call function 
  }
}
