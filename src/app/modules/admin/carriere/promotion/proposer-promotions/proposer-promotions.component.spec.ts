import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerPromotionsComponent } from './proposer-promotions.component';

describe('ProposerPromotionsComponent', () => {
  let component: ProposerPromotionsComponent;
  let fixture: ComponentFixture<ProposerPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposerPromotionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProposerPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
