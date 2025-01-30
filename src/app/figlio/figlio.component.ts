import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.css'
})
export class FiglioComponent {


  public href: string = "";

    constructor(private router: Router) {}

    ngOnInit() {
        this.href = this.router.url;
        console.log(this.router.url);
    }
  persone=[
    {nome: 'Mario', cognome: 'Rossi', isOnline: true,color:'black'},
    {nome: 'Luca', cognome: 'Bianchi', isOnline: false,color:'black'},
    {nome: 'Paolo', cognome: 'Verdi', isOnline: true,color:'black'} ,
    {nome: 'Giuseppe', cognome: 'Gialli', isOnline: false,color:'black'},
    {nome: 'Andrea', cognome: 'Neri', isOnline: true,color:'black'},

    ]
    OnreciveData(value: string) {
      console.log("data ricevuto"+value);
    }

}
