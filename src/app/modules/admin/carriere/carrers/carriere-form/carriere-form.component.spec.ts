import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriereFormComponent } from './carriere-form.component';

describe('CarriereFormComponent', () => {
  let component: CarriereFormComponent;
  let fixture: ComponentFixture<CarriereFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarriereFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriereFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
