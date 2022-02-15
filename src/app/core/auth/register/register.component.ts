import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;


  constructor(
    public loginsrv: loginService,
    private router: Router
    ) { 
      this.registerForm = new FormGroup({
        username: new FormControl("", Validators.required),
        fullname: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        phoneNumber: new FormControl("", [Validators.required, Validators.maxLength(10)]),
        password: new FormControl("", Validators.required),
        confirmPassword: new FormControl("", Validators.required),
      })
    }

  ngOnInit(): void {
  }

  get registerFormControls() {
    return this.registerForm.controls
  }

  onSubmit(){
    debugger;
      this.loginsrv.Register(this.registerForm.value).subscribe((res: any) => {
        // console.log(res.status);
        if(res.status == 'True') {
          alert("تم إنشاء الحساب ");
          this.router.navigate(['/Login']);
        } });
  }
}
