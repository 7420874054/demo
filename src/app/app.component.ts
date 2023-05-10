import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  public isShow:boolean=true;




  constructor(private router:Router){

  }
   
 onClickOfAdmsn(){
  console.log("Hello this is comp.ts")
  if(this.isShow==true){
  //this.router.navigate(['admsn']);
  this.router.navigateByUrl('admsn')
  }
 }   
  
}
