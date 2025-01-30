import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaServiceComponent } from './prova-service.component';

describe('ProvaServiceComponent', () => {
  let component: ProvaServiceComponent;
  let fixture: ComponentFixture<ProvaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvaServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
