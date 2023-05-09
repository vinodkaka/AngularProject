import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student:any={
    studentId:0,
    studentName:"",
    studentEmail:"",
    studentPassword:"",
    enrolExam:""
  }
  constructor(private router:Router ,private service:BaseServiceService,private activatedroute:ActivatedRoute){

  }
  ngOnInit(){
    this.activatedroute.params.subscribe(
      (params)=>{
        this.service.GetStudentById(params['studentid']).subscribe(
          (data)=>{console.log(data)
            this.student=data
          })
      }
    )
  }

  submit(studentid:number){
    this.service.UpdateStudentById(studentid,this.student).subscribe(
      (data)=>console.log(data)
    )
  }
  backtoadmin(){
    this.service.AadminInterface()
  }
}
