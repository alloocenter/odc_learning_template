import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramideAgesComponent } from './pyramide-ages.component';

describe('PyramideAgesComponent', () => {
  let component: PyramideAgesComponent;
  let fixture: ComponentFixture<PyramideAgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyramideAgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyramideAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
