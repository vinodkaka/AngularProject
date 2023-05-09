import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  userName:string="";
  password:String="";
  validationMessage:boolean=false;
  constructor(private service:BaseServiceService, private router:Router){

  }

  back(){
    this.service.back();
    console.log("vinod")
  }

  validation(){
    if(this.userName=="vinod"&&this.password=="vinod@123"){
console.log("validated")
this.router.navigate(['AdminInterface'])
    }else{
      this.validationMessage=true;
    }
  }
}
