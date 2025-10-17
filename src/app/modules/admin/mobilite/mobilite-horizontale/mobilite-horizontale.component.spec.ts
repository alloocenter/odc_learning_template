import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiliteHorizontaleComponent } from './mobilite-horizontale.component';

describe('MobiliteHorizontaleComponent', () => {
  let component: MobiliteHorizontaleComponent;
  let fixture: ComponentFixture<MobiliteHorizontaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobiliteHorizontaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobiliteHorizontaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
