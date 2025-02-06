import { PersoneService } from './../Service/service/persone.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  msg: string;
  ngOnInit(): void {
    //questo viene utilizzato per il reacitive form si deve inizializare ×
  this.createForm=new FormGroup({
    nome:new FormControl(null,Validators.required),
    cognome:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    colore:new FormControl(null)
  });
  }

  constructor(private perS: PersoneService ,private router:Router) {

  }
  /*form normale
  @ViewChild("homeForm") homeForm: NgForm; */
  //ViewChild qui viene usato per prendere il form "homeForm"-> <form #homeForm="ngForm" (ngSubmit)="onsubmit(homeForm)">
  createForm: FormGroup = new FormGroup({
    nome:new FormControl(null,Validators.required),
    cognome:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    colore:new FormControl(null)
  });

  onsubmitTemplate() {
   // console.log(this.homeForm) form normale non reactive

  }
  onSubmit(){
    if (this.createForm.valid) {
      const createData = {

       nome: this.createForm.value.nome,
        cognome: this.createForm.value.cognome,
        email: this.createForm.value.email,
        colore: this.createForm.value.colore
      };

      this.perS.createPersona(createData).subscribe({
        next: (resp: any) => {
          console.log(resp);
          if (resp.rc) {
            this.router.navigate(['/service']).then(() => {
              window.location.reload();
            });
          } else {
            this.msg = resp.msg;
          }
        },
        error: (err) => {
          console.error("Error updating persona:", err);
        }
      });


    }
  }




}
