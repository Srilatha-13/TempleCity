import { AppHttpService } from './app-http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private appHttp : AppHttpService) { }
  registerUser(){
   this.appHttp.get('')
  }
 authenticateUser(){

 }

}
