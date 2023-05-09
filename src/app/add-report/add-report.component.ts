import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent {
  report:any={
    reportId:0,
    studentName:"",
    examDate:"",
    score:0,
    student: {
        studentId:0,
        studentName:"",
        studentEmail:"",
        studentPassword:"",
        enrolExam: ""
    },
    exam: {
        examId:0,
        examName:"",
        examDuration:"",
        examDate:"",
        examPercentage:""
    }
}
  constructor(private router:Router ,private service:BaseServiceService){

  }

  submit(studentId:number,examId:number){
    this.service.GetAllExamById(examId).subscribe(
      (data)=>{
        //console.log(data)
        this.report.examId=data.examId
        this.report.examName=data.examName
        this.report.examDuration=data.examDuration
        this.report.examDate=data.examDate
        this.report.examPercentage=data.examPercentage
      })
      this.service.GetReportById(studentId).subscribe(
        (data)=>{
         // console.log(data)
          this.report.studentId=data.studentId
          this.report.studentName=data.studentName
          this.report.studentEmail=data.studentEmail
          this.report.studentPassword=data.studentPassword
          this.report.enrolExam=data.enrolExam
        }
      )
      this.service.AddReport(this.report).subscribe(
        (data)=>console.log(data)
      )
  }
  backtoadmin(){
    this.service.AadminInterface()
  }
  
}
