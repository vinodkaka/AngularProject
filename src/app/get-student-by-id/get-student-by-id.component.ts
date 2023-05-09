import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css']
})
export class GetStudentByIdComponent {
studentid:number=0;
  constructor(private router:Router ,private service:BaseServiceService){

  }

  backtoadmin(){
    this.service.AadminInterface()
    
  }

  submit(){
    this.router.navigate(['studentid',this.studentid])
    console.log(this.studentid);
  }
}
