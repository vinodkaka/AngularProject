import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-all-exams',
  templateUrl: './get-all-exams.component.html',
  styleUrls: ['./get-all-exams.component.css']
})
export class GetAllExamsComponent implements OnInit{

  public Exams:any[]=[];

  
  constructor(private router:Router ,private service:BaseServiceService,private activatedroute:ActivatedRoute){

  }
  ngOnInit() {
    this.service.GetAlllExams().subscribe(
      (data)=>this.Exams=data
    );
  }

  backtoadmin(){
    this.service.AadminInterface()
  }

  delete(examid:number){
  this.service.DeleteExamById(examid)
  }

  update(examId:number){
    this.router.navigate(["UpdateExam",examId])
console.log(examId)
  }
}
