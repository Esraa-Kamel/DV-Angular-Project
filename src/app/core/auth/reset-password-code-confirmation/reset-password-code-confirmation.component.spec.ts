import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordCodeConfirmationComponent } from './reset-password-code-confirmation.component';

describe('ResetPasswordCodeConfirmationComponent', () => {
  let component: ResetPasswordCodeConfirmationComponent;
  let fixture: ComponentFixture<ResetPasswordCodeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordCodeConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordCodeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
