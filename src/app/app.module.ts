import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DashboardGenderComponent } from './dashboard-gender/dashboard-gender.component';
import { DashboardCasteComponent } from './dashboard-caste/dashboard-caste.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    SearchComponent,
    DashboardComponent,
    DashboardGenderComponent,
    DashboardCasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  NgxPaginationModule,
  NgChartsModule,
  FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
