import { PersoneService } from './../Service/service/persone.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent {

  id:number;
  personaContatto:any;

  constructor(private serv:ServiceService, private route:ActivatedRoute,private service:PersoneService) {

  }

  ngOnInit(): void {

    //controllo variazione dei parametri nell'url
    this.route.paramMap.subscribe(params =>{
      this.id=+params.get("id"); //equivalente di parseInt, perche ricavandolo dalla mappa di parametri mi viene restituito come un oggetto qualsiasi
      this.personaContatto=this.service.Persona(this.id).subscribe
      ((value)=>{

        this.personaContatto=value.dati;

      })
    })
  }
}
