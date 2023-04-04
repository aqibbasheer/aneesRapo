import { formatCurrency } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginDTO } from '../../models/loginDTO';
import { signupDTO } from '../../models/signupDTO';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss'],
})
export class RegisteredComponent {
  signupform: FormGroup;

  constructor(private _authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.signupform = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  signupDetails() {
    
    let card=this.signupform.value.phone;
    this.signupform.value.phone=card.replace(/\s/g, "");
    console.log(this.signupform.value.phone);
    let signupData = this.signupform.value;
    console.log(signupData);
    
    if(this.signupform.valid){
      this._authService.signupCredentials(signupData).subscribe(res=>{
        if(res && res.role == 'Doctor'){
           this.router.navigate(['login'])
           alert('successfully created an doctor account')
        }
        else{
          this.router.navigate(['login'])
          alert('successfully created an patient account')
          
        }
      })
    }
    else{
      alert('please enter valid details')
    }
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
}
