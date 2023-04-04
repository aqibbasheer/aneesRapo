import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService implements  OnInit , OnChanges {

  public dataInSubject=new Subject<boolean>();
  //  //data=this.dataInSubject.asObservable();
   constructor(private http:HttpClient) {
  //   console.log(this.dataInSubject);
   }
  ngOnChanges(): void {
  
  
  }
  ngOnInit()
  {

  }
  
  // datafun(data1:FormGroup){
  //   console.log(data1);
    
  //     this.dataInSubject.next(data1)
  // }
}
