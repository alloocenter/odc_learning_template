import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansSuccessionComponent } from './plans-succession.component';

describe('PlansSuccessionComponent', () => {
  let component: PlansSuccessionComponent;
  let fixture: ComponentFixture<PlansSuccessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansSuccessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansSuccessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
