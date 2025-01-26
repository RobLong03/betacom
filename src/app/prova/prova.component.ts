import { Sort } from '@angular/material/sort';
import { ServiceService } from './../Service/service.service';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit {
displayedColumns: string[] = ['Name', 'Capital', 'Flag'];

//, 'Region', 'Subregion', 'Population', 'Area', 'Borders', 'Languages', 'Currencies', 'TopLevelDomain', 'CallingCodes', 'Timezones', 'NativeName', 'NumericCode', 'AltSpellings', 'Demonym', 'Gini', 'Latlng', 'Translations', 'RegionalBlocs', 'Cioc'

values: any[] = [];

  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    this.getNations();
  }


  getNations(){
    this.service.getNations().subscribe(data=>{
      console.log(data);
      this.values=data;
    })
  }

}
