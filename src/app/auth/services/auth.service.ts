import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  filter, map, pluck, Subscription } from 'rxjs';
import { apiBaseUrl, apiEndPoints } from 'src/app/shared/constants/apiEndPoints';
import { ApiHandlerService } from 'src/app/shared/services/api-handler.service';
import { loginDTO } from '../models/loginDTO';
import { signupDTO } from '../models/signupDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiHandlerService {
   //gettedToken:any
   
  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

  signupCredentials(credentials:signupDTO){
     if(credentials.role == 'Doctor'){
      return this.post(apiBaseUrl+apiEndPoints.doctors , credentials as signupDTO)
     }else{
      return this.post(apiBaseUrl+apiEndPoints.patient , credentials  as signupDTO)
     }
      
  }
  loginCredentials(credentials:loginDTO){

    if(credentials && credentials.role == 'Doctor'){
        return this.get(apiBaseUrl+apiEndPoints.doctors)
    }
    else{
      return this.get(apiBaseUrl+apiEndPoints.patient)
    }
  }

  get token(){
    return localStorage.getItem('token') ?? '';
  }

  public isAuthenticated():boolean|''{
  const gettedToken=this.token
   return gettedToken && gettedToken !== ''
    }
    getdata(){
      return this.get('https://angular-api.calibermatrix.com/api/MarketPlaceCourse/list')
    }
}
