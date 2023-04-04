import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { MaterialModule } from '../material.module';
import { SkinSpecialistComponent } from './components/skin-specialist/skin-specialist.component';
import { BrainSpecialistComponent } from './components/brain-specialist/brain-specialist.component';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientDashboardComponent,
    SkinSpecialistComponent,
    BrainSpecialistComponent
  ],
  imports: [
    CommonModule,
    PatientDashboardRoutingModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PatientDashboardModule { }
