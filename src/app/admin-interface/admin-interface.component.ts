import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {

  // DivQuestionId:boolean=false;
  // DivExamId:boolean=false;
  // DivStudentId:boolean=false;
  // DivReportId:boolean=false;
  // AdminFunctions:boolean=true;
  constructor(private router:Router){
    
  }

  back(){
    this.router.navigate(['Admin'])
  }

  AddQuestion(){
    console.log("vinod")
    this.router.navigate(['AddQuestion'])
  }

  GetAllQuestions(){
    console.log("vinod")
    this.router.navigate(['GetAllQuestions'])
  }

  GetQuestionById(){
    console.log("vinod")
    //this.DivQuestionId=true;
    this.router.navigate(['GetQuestionById'])
  }

  UpdateQuestion(){
    console.log("vinod")
    this.router.navigate(['GetAllQuestions'])
  }

  DeleteQuestion(){
    console.log("vinod")
    this.router.navigate(['GetAllQuestions'])
  }

  AddExam(){
    console.log("vinod")
    this.router.navigate(['AddExam'])
  }

  GetAllExams(){
    console.log("vinod")
    this.router.navigate(['GetAllExams']);
  }

  GetExamById(){
    console.log("vinod")
    //this.DivExamId=true;
    this.router.navigate(['GetExamById'])
  }

  UpdateExam(){
    console.log("vinod")
    this.router.navigate(['GetAllExams']);
  }

  DeleteExam(){
    console.log("vinod")
    this.router.navigate(['GetAllExams'])
  }

  AddStudent(){
    console.log("vinod")
    this.router.navigate(['AddStudent'])
  }

  GetAllStudents(){
    console.log("vinod")
    this.router.navigate(['GetAllStudents'])
  }

  GetStudentById(){
    console.log("vinod")
    // this.AdminFunctions=false;
    // this.DivStudentId=true;
    this.router.navigate(['GetStudentById'])
  }

  GetReportById(){
    console.log("vinod")
    // this.AdminFunctions=false;
    // this.DivReportId=true;
    this.router.navigate(['GetReportById'])
  }

  UpdateStudent(){
    console.log("vinod")
    this.router.navigate(['GetAllStudents'])
  }

  DeleteStudent(){
    console.log("vinod")
    this.router.navigate(['GetAllStudents'])
  }

  AddReport(){
    console.log("vinod")
    this.router.navigate(['AddReport'])
  }
  GetAllReports(){
    console.log("vinod")
    this.router.navigate(['GetAllReports'])
  }

  

  // Menu(){
  //   this.router.navigate(['AdminInterface']);
  //   console.log("menu")
  // }
}
