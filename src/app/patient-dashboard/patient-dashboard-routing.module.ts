import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PreloadService } from '../shared/services/preload.service';
import { BrainSpecialistComponent } from './components/brain-specialist/brain-specialist.component';
import { SkinSpecialistComponent } from './components/skin-specialist/skin-specialist.component';
import { PatientDashboardComponent } from './patient-dashboard.component';

const routes: Routes = [
  { path: '', component: PatientDashboardComponent },
  {
    path:'skin-specialist' , component:SkinSpecialistComponent
  },
  {
    path:'brain-specialist' , component:BrainSpecialistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes , )],
  exports: [RouterModule]
})
export class PatientDashboardRoutingModule { }
