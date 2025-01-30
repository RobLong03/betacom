import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  daVedere = false;


  /**
   * Toggles the visibility of the `daVedere` property.
   * This method switches the boolean value of `daVedere` between true and false.
   */
  showAlert() {
    this.daVedere = !this.daVedere;
  }

  stringa:string = 'pluto';

  colorOn="green";
  colorOff="red";
  numero:number =3;

  persone=[
  {nome: 'Mario', cognome: 'Rossi', Online: true,color:'black'},
  {nome: 'Luca', cognome: 'Bianchi', Online: false,color:'black'},
  {nome: 'Paolo', cognome: 'Verdi', Online: true,color:'black'} ,
  {nome: 'Giuseppe', cognome: 'Gialli', Online: false,color:'black'},
  {nome: 'Andrea', cognome: 'Neri', Online: true,color:'black'},

  ]


}
