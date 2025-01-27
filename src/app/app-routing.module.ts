import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';
import { AppComponent } from './app.component';
import { Prova2Component } from './prova2/prova2/prova2.component';
import { HomeComponent } from './HomePage/home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: "prova", component: ProvaComponent },
   {path:'prova2',component:Prova2Component},
   {path:'**',redirectTo:'',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
