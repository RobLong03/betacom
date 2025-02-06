import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersoneService } from '../Service/service/persone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../Interface/Persona';
import { fileURLToPath } from 'node:url';
import { MatDialog } from '@angular/material/dialog';
import { DeleteContactComponent } from '../dialog/delete-contact/delete-contact.component';

@Component({
  selector: 'app-dettaglio-contatto',
  templateUrl: './dettaglio-contatto.component.html',
  styleUrl: './dettaglio-contatto.component.css'
})
export class DettaglioContattoComponent implements OnInit {

  readonly dialog = inject(MatDialog);//per iniettare il dialog
  id: number;
  personaContatto: any;
  msg: string = "";

  constructor(private route: ActivatedRoute, private perS: PersoneService, private router: Router) {

  }
  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
      this.personaContatto = this.perS.Persona(this.id).subscribe
        ((value: any) => {

          this.personaContatto = value.dati;
          this.updateForm = new FormGroup({
            nome: new FormControl(this.personaContatto.nome, Validators.required),
            cognome: new FormControl(this.personaContatto.cognome, Validators.required),
            email: new FormControl(this.personaContatto.email, [Validators.required, Validators.email]),
            colore: new FormControl(this.personaContatto.colore, Validators.required)
          });
        })
    })
  }

  updateForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    cognome: new FormControl(),
    email: new FormControl(),
    colore: new FormControl()
  });

  onDelete() {

    const AnimationDuration='2000ms';
    const AnimationClosewitd='4300px';
    const dialogRef = this.dialog.open(DeleteContactComponent, {
      width:AnimationClosewitd,
      enterAnimationDuration:AnimationDuration,


      data: {
        persona: this.personaContatto
      }, restoreFocus: false
    }
    );
    //attenzione ha parametri di mette con data_>

    dialogRef.afterClosed()
    .subscribe(resp=>{
        if (resp=='si') {
          this.onDeleteAction()
        }
        else{
          
        }
    });


  }

  onSubmit() {

    const updateBody: any = {
      id: this.id,
    }
    if (this.updateForm.get('nome')?.touched) {
      updateBody.nome = this.updateForm.value.nome;
    }
    if (this.updateForm.get('cognome')?.touched) {
      updateBody.cognome = this.updateForm.value.cognome;
    }
    if (this.updateForm.get('email')?.touched) {
      updateBody.email = this.updateForm.value.email;
    }
    if (this.updateForm.get('color')?.touched) {
      updateBody.color = this.updateForm.value.color;
    }

    console.log(updateBody);

    if (this.updateForm.valid) {
      const updatedData = {
        id: this.id,
        nome: this.updateForm.value.nome,
        cognome: this.updateForm.value.cognome,
        email: this.updateForm.value.email,
        colore: this.updateForm.value.colore
      };

      this.perS.updatePersona(updateBody).subscribe({
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


  onDeleteAction() {
    this.perS.deletePersona({
      id: this.id
    }).subscribe({
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


  onCancel() {
    this.router.navigate(['/service']).then(() => {
      window.location.reload();
    });
  }
}
