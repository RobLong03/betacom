import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ifError } from 'assert';
import { AuthService } from 'src/app/authentication/auth/auth.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

constructor(private user:UserService,private auth:AuthService,private router:Router) {

}
msg:string=null;
logged:boolean=true;

onSubmit(signin:NgForm) {
  console.log(signin.form.value);
  this.user.signIn({
     userName: signin.form.value.username,
     pwd:signin.form.value.password
    }).subscribe((resp:any)=>{
      this.msg=resp.logged;
      this.logged=resp.logged;
      if (resp.logged) {

        this.auth.setAutenticated();
        if (resp.role==='ADMIN') {

          this.auth.setRoleAdmin();
          this.router.navigate(['/list'])
        }else{
          this.auth.setRoleUser()
          this.router.navigate(['/home'])
        }
      }
    });
}

}
