import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RelativeComponent } from './relative/relative.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate:[AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  { path:'addrelative',component:RelativeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
