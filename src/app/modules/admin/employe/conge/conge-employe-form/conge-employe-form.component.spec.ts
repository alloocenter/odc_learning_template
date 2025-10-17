import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeEmployeFormComponent } from './conge-employe-form.component';

describe('CongeEmployeFormComponent', () => {
  let component: CongeEmployeFormComponent;
  let fixture: ComponentFixture<CongeEmployeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongeEmployeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongeEmployeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
