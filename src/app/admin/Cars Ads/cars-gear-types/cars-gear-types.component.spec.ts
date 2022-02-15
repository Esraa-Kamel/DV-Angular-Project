import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGearTypesComponent } from './cars-gear-types.component';

describe('CarsGearTypesComponent', () => {
  let component: CarsGearTypesComponent;
  let fixture: ComponentFixture<CarsGearTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsGearTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGearTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
