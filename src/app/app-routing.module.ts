import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';

import { Prova2Component } from './prova2/prova2/prova2.component';
import { HomeComponent } from './HomePage/home/home.component';
import { Prova3Component } from './prova3/prova3.component';
import { FiglioComponent } from './figlio/figlio.component';
import { ProvaServiceComponent } from './prova-service/prova-service.component';
import { ContattoComponent } from './contatto/contatto.component';


const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: "prova", component: ProvaComponent },
   {path:'prova2',component:Prova2Component},
   {path:'prova3',component:Prova3Component},
   {path:'figlio',component:FiglioComponent},
   {path:'service',component:ProvaServiceComponent , children:[
    {path:':id' , component:ContattoComponent}
   ]},
  //  {path:'service/:id',component:ProvaServiceComponent},


   {path:'**',redirectTo:'',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
