import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';
import { AppComponent } from './app.component';
import { Prova2Component } from './prova2/prova2/prova2.component';

const routes: Routes = [
   { path: "prova", component: ProvaComponent },
   {path:'prova2',component:Prova2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
