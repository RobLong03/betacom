import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova3Component } from './prova3.component';

describe('Prova3Component', () => {
  let component: Prova3Component;
  let fixture: ComponentFixture<Prova3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prova3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
