import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrainSpecialistComponent } from '../patient-dashboard/components/brain-specialist/brain-specialist.component';
import { SkinSpecialistComponent } from '../patient-dashboard/components/skin-specialist/skin-specialist.component';
import { DoctorDashboardComponent } from './doctor-dashboard.component';

const routes: Routes = [
  { path: '', component: DoctorDashboardComponent },
  {
    path:'skin-specialist' , component:SkinSpecialistComponent
  },
  {
    path:'brain-specialist' , component:BrainSpecialistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorDashboardRoutingModule { }
