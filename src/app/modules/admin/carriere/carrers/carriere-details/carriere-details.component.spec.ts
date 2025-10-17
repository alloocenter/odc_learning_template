import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriereDetailsComponent } from './carriere-details.component';

describe('CarriereDetailsComponent', () => {
  let component: CarriereDetailsComponent;
  let fixture: ComponentFixture<CarriereDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarriereDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriereDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
