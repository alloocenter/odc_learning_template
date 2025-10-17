import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerAffectationComponent } from './proposer-affectation.component';

describe('ProposerAffectationComponent', () => {
  let component: ProposerAffectationComponent;
  let fixture: ComponentFixture<ProposerAffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposerAffectationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProposerAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
