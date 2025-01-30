import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-prova3',
  templateUrl: './prova3.component.html',
})
export class Prova3Component implements OnInit, AfterViewInit {
numero: number=120.13111111;


  ngOnInit(): void {
    this.persone = this.personeIniziale;
  }
  @Input() data: any;
  @Output() mandaDatiEvent = new EventEmitter<string>(); //evento per inviare dati

  dataDaInviare = "Questo dato arriva da prova.component";

  title = 'Project Angular';

  oggi = new Date();

  @ViewChild("inputSaluti") valoreInput!: ElementRef<HTMLInputElement>;//input cosi recupero i valori di input
  ngAfterViewInit(): void {
    console.log(this.valoreInput);
  }
  mandaDati() {
    this.mandaDatiEvent.emit(this.dataDaInviare);

  }

  //father component
  persone: any[] = [];


  getTemplate() {
    console.log("this valore input:" + this.valoreInput.nativeElement.value);
  }
  colore = '';

  cambiaColoreEvid(coloreEV: string) {
    this.colore = coloreEV;
  }

  personeIniziale = [
    { name: 'Luca', cognome: 'Plutoa', isOnline: true, color: 'red' },
    { name: 'Paolo', cognome: 'Stumeno', isOnline: false, color: 'green' },
    { name: 'Anna', cognome: 'Verilo', isOnline: true, color: 'pink' },
    { name: 'Marcello', cognome: 'Zuca', isOnline: false, color: 'yellow' },
    { name: 'Francesco', cognome: 'Armesi', isOnline: true, color: 'purple' },
  ];

  personeUpdate = [
    { name: 'Donald', cognome: 'Duck', isOnline: true, color: 'red' },
    { name: 'Michel', cognome: 'Bulete', isOnline: false, color: 'green' },
    { name: 'Anna', cognome: 'Verilo', isOnline: true, color: 'pink' },
    { name: 'Marcello', cognome: 'Zuca', isOnline: false, color: 'yellow' },
    { name: 'Francesco', cognome: 'Armesi', isOnline: true, color: 'purple' },
  ];



  onClick() {
    this.persone = this.personeUpdate;
  }

  onRestore() {
    this.persone = this.personeIniziale;
  }
}


