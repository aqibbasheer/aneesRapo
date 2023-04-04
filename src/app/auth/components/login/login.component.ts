import { Component, OnDestroy, OnInit } from '@angular/core';
//import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { loginDTO } from '../../models/loginDTO';
import { filter, from, of, Subscription, switchMap, tap, toArray } from 'rxjs';
import { signupDTO } from '../../models/signupDTO';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit , OnDestroy{
  data: any;
  loginform: FormGroup;
  token: any;
  unsubscribeAuth:Subscription;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this._authService.isAuthenticated() && this.token == 'pat') {
      this.router.navigate(['patientDashboard']);
    } else {
      this.router.navigate(['doctorDashboard']);
    }

    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      role: new FormControl('', Validators.required),
    });

    // this.token = this._authService.isAuthenticated();
    // console.log(this.token);
    this._authService.getdata().subscribe((res)=>{
      console.log(res);
      
    })

  }

  loginDetails() {
    let loginData = this.loginform.value;
    if (this.loginform.valid) {
      if (loginData.role == 'Doctor') {
      this.unsubscribeAuth =  this._authService
          .loginCredentials(loginData as loginDTO)
          .pipe(
            switchMap((arr) => from(arr)),
            filter(
              (res: any) =>
                res.email == loginData.email &&
                res.password == loginData.password
            )
          )
          .subscribe({
            next: (res) => {
              if (res) {
                // console.log(v);
                //this.router.navigate(['doctorDashboard']);
                localStorage.setItem('token', 'doc');
                this.router
                  .navigateByUrl('/', { skipLocationChange: true })
                  .then(() => {
                    this.router.navigate(['doctorDashboard'], {
                      replaceUrl: true,
                    });
                  });
                //console.log(res);
              }
            },
          });
      } else if (loginData.role == 'patient') {
        this.unsubscribeAuth =  this._authService
          .loginCredentials(loginData as loginDTO)
          .pipe(
            switchMap((arr) => of(...arr)),
            filter(
              (res: any) =>
                res.email == loginData.email &&
                res.password == loginData.password
            )
          )
          .subscribe((res) => {
            if (res !== null && res !== 0) {
              localStorage.setItem('token', 'pat');
              this.router
                .navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                  this.router.navigate(['patientDashboard'], {
                    replaceUrl: true,
                  });
                });
            }
            else{
              console.log('no data found');
                
            }
          } );
          
          
      }
    } 
    else {
      alert('enter valid credentials');
      this.router.navigate(['/']);
    }
  }
  routrToSignup() {
    this.router.navigate(['register']);
  }
  routeToForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  // validation(){
  //   this.loginform=this.fb.group({
  //     email:['' , Validators.required , Validators.email],
  //     password:['' , Validators.required , Validators.minLength(5)]
  //   })
  // }

  ngOnDestroy(){
   // this.unsubscribeAuth.unsubscribe()
  }
}
