import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

   url = "http://localhost:9090/rest/user/"

  constructor(private http:HttpClient) { }


  listAll() {
    return this.http.get(this.url+"listAll");
  }
  signIn(body:{}){
    return this.http.post(this.url+"signin",body,this.httpOptions)
  }

  createUser(body:{}){
    return this.http.post(`${this.url}create`,body)
  }


}
