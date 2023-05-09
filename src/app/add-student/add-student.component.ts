import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  student:any={
    studentId:0,
    studentName:"",
    studentEmail:"",
    studentPassword:"",
    enrolExam:""
  }
  constructor(private router:Router ,private service:BaseServiceService){

  }

  submit(){
   // console.log(this.student)
    this.service.AddStudent(this.student).subscribe(
      (data)=>
        console.log(data)
    )
  }

  backtoadmin(){
    this.service.AadminInterface()
  }
}
