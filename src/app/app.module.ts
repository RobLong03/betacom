import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { Prova2Component } from './prova2/prova2/prova2.component';
import { MatTableModule} from '@angular/material/table';

import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Prova3Component } from './prova3/prova3.component';
import { HighlightDirective } from './directive/highlight.directive';
import { FiglioComponent } from './figlio/figlio.component';
import { ExtendsPipe } from './pipe/extends.pipe';

import { ContattoComponent } from './contatto/contatto.component';
import { ProvaServiceComponent } from './prova-service/prova-service.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { DettaglioContattoComponent } from './dettaglio-contatto/dettaglio-contatto.component';
import { DeleteContactComponent } from './dialog/delete-contact/delete-contact.component';
import { SigninComponent } from './access/signin/signin.component';
import { RegistrazioneComponent } from './access/registrazione/registrazione.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    Prova2Component,
    HomeComponent,
    Prova3Component,
    HighlightDirective,
    FiglioComponent,
    ExtendsPipe,
    ProvaServiceComponent,
    ContattoComponent,
    NotFoundComponent,
    FormComponent,
    DettaglioContattoComponent,
    DeleteContactComponent,
    RegistrazioneComponent,
    AboutComponent,
    SigninComponent


  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule

  ],

  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations()

  ],

  //in angular 18  HttpClientModule  deprecated, use provideHttpClient() instead
  bootstrap: [AppComponent]
})
export class AppModule { }
