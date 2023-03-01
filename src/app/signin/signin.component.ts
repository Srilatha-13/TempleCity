// import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/shared/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class signinComponent implements OnInit {

//   email : string = '';
//   password : string = '';

//   constructor(private auth : AuthService) { }

//   ngOnInit(): void {
//   }

//   login() {

//     if(this.email == '') {
//       alert('Please enter email');
//       return;
//     }

//     if(this.password == '') {
//       alert('Please enter password');
//       return;
//     }

//     this.auth.login(this.email,this.password);
    
//     this.email = '';
//     this.password = '';

//   }

//   signInWithGoogle() {
//     this.auth.googleSignIn();
//   }
//  
// }

// import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/shared/auth.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class signinComponent {
//   email : string = '';
//  password : string = '';
  
//  constructor(public auth: AuthService) { }

   

// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class signinComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
 
}