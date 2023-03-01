// import { Component , OnInit} from '@angular/core';
// import { AuthService } from './../shared/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   email:string ='';
//   password:string='';
//   constructor(private auth:AuthService){}
//   ngOnInit(): void {
    
//   }
//   register(){
//     if(this.email==''){
//     alert('please enter email');
//     return;
//   }
//     if(this.password==''){
//     alert('please enter password');
//     return;
//   }

//   this.auth.login(this.email,this.password);
//   this.email='';
//   this.password='';
// }
// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }

}