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


 private persone = [
    { name: 'Donald', cognome: 'Duck', isOnline: true, color: 'red' },
    { name: 'Michel', cognome: 'Bulete', isOnline: false, color: 'green' },
    { name: 'Anna', cognome: 'Verilo', isOnline: true, color: 'pink' },
    { name: 'Marcello', cognome: 'Zuca', isOnline: false, color: 'yellow' },
    { name: 'Francesco', cognome: 'Armesi', isOnline: true, color: 'purple' },
  ];

getPersone(){
  return this.persone;
}


getPersona(index: number){


    return this.persone[index];


}


//prova
  getNations(){
    return this.http.get<[]>('https://restcountries.com/v3.1/all');
  }


}
