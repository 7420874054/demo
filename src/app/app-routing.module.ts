import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './collage/home/home.component';
import { AdmsnComponent } from './collage/admsn/admsn.component';
import { StudComponent } from './collage/stud/stud.component';
import { StaffComponent } from './collage/staff/staff.component';
import { LoginComponent } from './collage/login/login.component';
import { DeptComponent } from './collage/dept/dept.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dept",component:DeptComponent},
  {path:"admsn",component:AdmsnComponent},
  {path:"stud",component:StudComponent},
  {path:"staff",component:StaffComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
