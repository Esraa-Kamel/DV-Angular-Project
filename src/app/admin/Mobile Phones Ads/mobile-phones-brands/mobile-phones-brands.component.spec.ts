import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhonesBrandsComponent } from './mobile-phones-brands.component';

describe('MobilePhonesBrandsComponent', () => {
  let component: MobilePhonesBrandsComponent;
  let fixture: ComponentFixture<MobilePhonesBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePhonesBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhonesBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
