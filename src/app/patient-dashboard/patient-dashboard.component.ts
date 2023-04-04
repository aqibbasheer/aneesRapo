import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent {

  constructor(){
    console.log('patient module');
  }
  obj=[

    {
      discrip:'Stomic specialist',
      logo:'assets/stom.jpg',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Orthopadic specialist',
      logo:'assets/ortho.jpg',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Heart specialist',
      logo:'assets/heart.jpg',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Gyne specialist',
      logo:'assets/gyne.jpg',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Skin specialist',
      logo:'assets/skin.jpg',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Ent specialist',
      logo:'assets/ENT.jpg',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Child specialist',
      logo:'assets/child.png',
      routerLink:'skin-specialist'
    },
    {
      discrip:'Brain specialist',
      logo:'assets/brain.png',
      routerLink:'brain-specialist'
    }
  ]

  ngOnInit(){
    
    
  }

}
