import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  response:any;
msg: string;
rc:boolean=true;
//con private diventa accessibile user per tutto la classe
constructor(private user:UserService, private router:Router) {

}

onSubmit(signup: NgForm) {
  if (signup.form.value.password===signup.form.value.confirm) {
    this.createUser(signup);
  }else{
    this.rc=false;
    this.msg="le passwords non corrispondono"
  }



}


createUser(signup:NgForm){
  this.user.createUser({
    userName:signup.form.value.username,
    //stessa cosa nel
    passWord:signup.form.value.password
  }).subscribe((response)=>{
    this.response=response;
    if(this.response.rc){
      this.msg=this.response.msg;
      this.router.navigate(['/login']);
    }
  })
}
}
