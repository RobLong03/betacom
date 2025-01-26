import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http:HttpClient) { }

//prova 
  getNations(){
    return this.http.get<[]>('https://restcountries.com/v3.1/all');
  }


}
