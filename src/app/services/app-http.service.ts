// import { Injectable, OnInit } from '@angular/core';
// import {Http} from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppHttpService implements OnInit {

//   constructor(private http :Http) { }
  
//   ngOnInit() {
//     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
//       console.log(data);
//     });


//   get(url : string){
//     return this.http.get(url);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  getRequestOptions() {
    const options = { headers: this.getHeaders() };
    return options;
  }

  get(url: string) {
    return this.http.get(url, this.getRequestOptions());
  }
 post(url: string , data:any) {
    return this.http.post(url, data, this.getRequestOptions());
  }
}