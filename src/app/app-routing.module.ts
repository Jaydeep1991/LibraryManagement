import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandinpageComponent } from './landinpage/landinpage.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: LandinpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
