import { Component } from '@angular/core';
import { Route, Router, TitleStrategy } from '@angular/router';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  data:boolean=false
  constructor(private router:Router , private service:DatashareService){
   this.service.dataInSubject.subscribe(res=>{
    console.log(res);
    this.data=res
    
   })
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['login'])

  }
}
