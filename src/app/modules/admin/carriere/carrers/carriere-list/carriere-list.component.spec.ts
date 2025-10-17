import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriereListComponent } from './carriere-list.component';

describe('CarriereListComponent', () => {
  let component: CarriereListComponent;
  let fixture: ComponentFixture<CarriereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarriereListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
