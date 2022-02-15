import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPushTypesComponent } from './cars-push-types.component';

describe('CarsPushTypesComponent', () => {
  let component: CarsPushTypesComponent;
  let fixture: ComponentFixture<CarsPushTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsPushTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsPushTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
