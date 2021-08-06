import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnterOtpComponent } from './components/enter-otp/enter-otp.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget', component: ForgetPasswordComponent},
  {path: 'enter-otp', component: EnterOtpComponent},
  {path: 'change-password', component: ChangePassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, ForgetPasswordComponent, EnterOtpComponent, ChangePassComponent, DashboardComponent ]
