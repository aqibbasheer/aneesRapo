import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


interface apiBaseAction{
  get(url: string): Observable<any>,
  delete(url: string , id :number):Observable<any>,
  post(url :string , data : any):Observable<any>,
  put(url : string, id :number ,data: any):Observable<any>
};
@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService  {

  apiResponse(response:any){
         if(response==500){
          console.log(response)
         }
  }

  constructor(private httpClient:HttpClient) { }

  get(url : string){
    return this.httpClient.get<any>(url).pipe(tap((x:any) => this.apiResponse(x)))
  }

  post(url:string , data:any){
    return this.httpClient.post<any>(url,data).pipe(tap((x:any)=>this.apiResponse(x)))
  }
}
