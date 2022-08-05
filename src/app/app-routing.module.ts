import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main_components/dashboard/dashboard.component';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [


  { path: 'dashboard', component: DashboardComponent },
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: '**', component: AccessDeniedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
