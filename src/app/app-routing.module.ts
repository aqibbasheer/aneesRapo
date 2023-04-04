import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
//import { AuthGaurdGuard } from './auth/guard/auth.guard';

import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'doctorDashboard',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./doctor-dashboard/doctor-dashboard.module').then(
        (m) => m.DoctorDashboardModule
      ),
    
  },

  {
    
    canActivate:[AuthGuard],
    path: 'patientDashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('./patient-dashboard/patient-dashboard.module').then(
        (m) => m.PatientDashboardModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
