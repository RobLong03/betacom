import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'src/app/Interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  url = "http://localhost:9090/rest/persone/"
  constructor(private http: HttpClient) { }


  listPersone() {
    return this.http.get<Persona[]>(this.url + "listAll")
  }

  Persona(id:number) {
    return this.http.get<Persona>(this.url + "get?id="+id)
  }
  updatePersona(object:any) {
    return this.http.post(this.url + "update",object,this.httpOptions)
  }
  deletePersona(object:any) {
    return this.http.post(this.url + "delete",object,this.httpOptions)
  }
  createPersona(object:any) {
    return this.http.post(this.url + "create",object,this.httpOptions)
  }
}
