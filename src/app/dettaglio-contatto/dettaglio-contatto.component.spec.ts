import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioContattoComponent } from './dettaglio-contatto.component';

describe('DettaglioContattoComponent', () => {
  let component: DettaglioContattoComponent;
  let fixture: ComponentFixture<DettaglioContattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettaglioContattoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
