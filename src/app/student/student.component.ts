import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  validationMessage:boolean=false;
userName:string="";
password:string="";
  constructor(private service:BaseServiceService,private route:Router){

  }

  back(){
    this.service.back();
  }

  validation(){
    if(this.userName=="vinod"&&this.password=="vinod@123"){
      this.route.navigate(['StudentInterface'])
       console.log("validated")
     }else{
      this.validationMessage=true;
    }
    
  }
}
