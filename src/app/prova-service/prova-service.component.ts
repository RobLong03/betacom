import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from './../Service/service.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { PersoneService } from '../Service/service/persone.service';

@Component({
  selector: 'app-prova-service',
  templateUrl: './prova-service.component.html',
  styleUrls: ['./prova-service.component.css']
})
export class ProvaServiceComponent implements OnInit {

  data: any;
  persona:any;
  isProfile:boolean=false;
  inter:number | undefined;
  response: any;


  constructor(private service: ServiceService,private route:ActivatedRoute,private serv:PersoneService) {

  }

  ngOnInit(): void {
    this.serv.listPersone()
    .subscribe(resp =>{
      this.response=resp;
      this.data=this.response.dati
    });

    /*
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.inter=parseInt(this.route.snapshot.paramMap.get('id'));

      this.persona = this.service.getPersona(this.inter);

      console.log(this.persona);
    } else {
      this.isProfile = false;
      this.data = this.service.getPersone();
    }
*/
  }

  getPersona(value:number):any{

    return this.data[value]=this.data;
  }


}
