import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';

import { Prova2Component } from './prova2/prova2/prova2.component';
import { HomeComponent } from './HomePage/home/home.component';
import { Prova3Component } from './prova3/prova3.component';
import { FiglioComponent } from './figlio/figlio.component';
import { ProvaServiceComponent } from './prova-service/prova-service.component';
import { ContattoComponent } from './contatto/contatto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { guardGuard } from './authentication/guard.guard';
import { guardRoleGuard } from './authentication/guard-role.guard';
import { FormComponent } from './form/form.component';
import { DettaglioContattoComponent } from './dettaglio-contatto/dettaglio-contatto.component';
import { SigninComponent } from './access/signin/signin.component';
import { RegistrazioneComponent } from './access/registrazione/registrazione.component';
import { AboutComponent } from './about/about.component';
import { adminGuard } from './authentication/admin/admin.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: SigninComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'home', component: HomeComponent ,canActivate: [guardGuard]},
  { path: "prova", component: ProvaComponent },
  { path: 'prova2', component: Prova2Component },
  { path: 'prova3', component: Prova3Component },
  { path: 'figlio', component: FiglioComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: AboutComponent ,canActivate: [adminGuard]},

  {
    path: 'service', component: ProvaServiceComponent, canActivate: [guardGuard],
    canActivateChild: [guardRoleGuard], children: [
      { path: ':id', component: DettaglioContattoComponent },

    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/' }

  //  {path:'service/:id',component:ProvaServiceComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
