import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitesComponent } from './retraites.component';

describe('RetraitesComponent', () => {
  let component: RetraitesComponent;
  let fixture: ComponentFixture<RetraitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetraitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetraitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
