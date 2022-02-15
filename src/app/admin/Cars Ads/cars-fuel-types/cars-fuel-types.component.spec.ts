import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFuelTypesComponent } from './cars-fuel-types.component';

describe('CarsFuelTypesComponent', () => {
  let component: CarsFuelTypesComponent;
  let fixture: ComponentFixture<CarsFuelTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsFuelTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFuelTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
