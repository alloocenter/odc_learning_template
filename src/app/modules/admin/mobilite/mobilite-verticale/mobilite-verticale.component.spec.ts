import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiliteVerticaleComponent } from './mobilite-verticale.component';

describe('MobiliteVerticaleComponent', () => {
  let component: MobiliteVerticaleComponent;
  let fixture: ComponentFixture<MobiliteVerticaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobiliteVerticaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobiliteVerticaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
