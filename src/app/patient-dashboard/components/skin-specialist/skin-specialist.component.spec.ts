import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinSpecialistComponent } from './skin-specialist.component';

describe('SkinSpecialistComponent', () => {
  let component: SkinSpecialistComponent;
  let fixture: ComponentFixture<SkinSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinSpecialistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
