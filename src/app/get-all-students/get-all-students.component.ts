import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {
  constructor(private router:Router ,private service:BaseServiceService){

  }

  Students:any[]=[];

  ngOnInit(): void {
    this.service.GetAllStudents().subscribe(
      (data)=>this.Students=data
    )
  }

  backtoadmin(){
    this.service.AadminInterface()
  }

  delete(studentId:number){
    console.log(studentId)
    this.service.DeleteStudent(studentId).subscribe()
    }
  
    update(studentid:number){
      this.router.navigate(['UpdateStudent',studentid])
  console.log(studentid)
    }

}
