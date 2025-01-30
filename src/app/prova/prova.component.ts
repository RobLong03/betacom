import { Sort, MatSort } from '@angular/material/sort';

import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../Service/service.service';
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent implements OnInit, AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = ['Name', 'Capital', 'Flag'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getNations();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange() {
    this.dataSource.sortingDataAccessor = (element, property) => {
      if (property === 'Name') {
        return element.name.common;
      } else {
        if (property === 'Capital') {
          return element.capital;
        } else {
          if (property === 'Flag') {
            return element.flag;
          } else {
            return element[property];
          }
        }

      }


    };
  }


  getNations() {
    this.service.getNations().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }
   compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
