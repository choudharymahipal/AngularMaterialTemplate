import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main_components/dashboard/dashboard.component';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';
import { ChangePasswordComponent } from './shared/components/change-password/change-password.component';
import { InboxComponent } from './shared/components/inbox/inbox.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { ProfileComponent } from './shared/components/profile/profile.component';

const routes: Routes = [
  //User account pages
  { path: 'profile', component: ProfileComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'notification', component: NotificationsComponent },
  
  //Main pages
  { path: 'dashboard', component: DashboardComponent },

  //Default Pages
  { path: '', pathMatch: 'full', component: LoginComponent },

  //Access Denied Page
  { path: '**', component: AccessDeniedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
