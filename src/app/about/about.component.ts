import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  listUsers:any;

constructor(private usr:UserService){

}

  ngOnInit(): void {
    this.usr.listAll()
    .subscribe((resp:any)=>{
      this.listUsers=resp.dati;

    });
  }

}
