import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesEmployeComponent } from './fiches-employe.component';

describe('FichesEmployeComponent', () => {
  let component: FichesEmployeComponent;
  let fixture: ComponentFixture<FichesEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichesEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichesEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
