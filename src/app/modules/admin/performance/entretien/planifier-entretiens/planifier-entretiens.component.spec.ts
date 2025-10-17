import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierEntretiensComponent } from './planifier-entretiens.component';

describe('PlanifierEntretiensComponent', () => {
  let component: PlanifierEntretiensComponent;
  let fixture: ComponentFixture<PlanifierEntretiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanifierEntretiensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanifierEntretiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
