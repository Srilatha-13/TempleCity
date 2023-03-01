// import { Injectable } from '@angular/core';
// import{ AngularFireAuth} from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
// import { GoogleAuthProvider } from 'firebase/auth';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   googleSignIn() {
//     throw new Error('Method not implemented.');
//   }

//   constructor(public fireAuth : AngularFireAuth, private router : Router) { }
//     login(email:string , password:string) {
//       return this.fireAuth.signInWithEmailAndPassword(email,password).then (()=>{
//         localStorage.setItem('token', 'true');
//         this.router.navigate(['/post']);
//       }).catch((err)=>{
//         alert(err.message);
//         this.router.navigate(['/login']);
//       })

//     }
//     //register
//     register(email:string , password:string) {
//       return this.fireAuth.createUserWithEmailAndPassword(email,password).then (()=>{
//         alert('successfull');
        
//         // this.router.navigate(['/login']);
//       }).catch((err)=>{
//           alert(err.message);
//           this.router.navigate(['/login']);
//         })

//     }
//     //signout
//     logout(){
//       this.fireAuth.signOut().then(()=> {
//         localStorage.removeItem('token');
//         this.router.navigate(['/login']);
//       }).catch((err)=>{
//         alert(err.message);
//         this.router.navigate(['/login']);
//       })
//     }
//   }
  
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['/varify-email']);
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/varify-email']);
      }, err => {
        alert('Something went wrong');
      })
  }

  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }

}
