import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './collage/home/home.component';
import { DeptComponent } from './collage/dept/dept.component';
import { AdmsnComponent } from './collage/admsn/admsn.component';
import { StudComponent } from './collage/stud/stud.component';
import { StaffComponent } from './collage/staff/staff.component';
import { LoginComponent } from './collage/login/login.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeptComponent,
    AdmsnComponent,
    StudComponent,
    StaffComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
