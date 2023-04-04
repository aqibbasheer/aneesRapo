import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainSpecialistComponent } from './brain-specialist.component';

describe('BrainSpecialistComponent', () => {
  let component: BrainSpecialistComponent;
  let fixture: ComponentFixture<BrainSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainSpecialistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
