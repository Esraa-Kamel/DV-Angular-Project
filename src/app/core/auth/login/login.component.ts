import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/interfaces/localStorage';
import { loginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authToken = 'authKey';
  constructor(
    public loginsrv: loginService,
    private router: Router,
    private localStorage: LocalStorageService,

    ) { 
      this.loginForm = new FormGroup({
        phoneNumber: new FormControl(""),
        password: new FormControl(""),
      })
    }

  ngOnInit(): void {
  }

  get loginFormControls() {
    return this.loginForm.controls
  }

  onSubmit(){
      this.loginsrv.getToken(this.loginForm.value).subscribe((res: any) => {
        // console.log(res.data.token);
        this.setUserToken(res.data.token);
        if(res.status == 'True') {
          this.router.navigate(['']);
        } });
  }

  setUserToken(token: string): void {
    this.localStorage.set(this.authToken, token, false);
  }
}

