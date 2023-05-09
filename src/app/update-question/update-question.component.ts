import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
  exam:any
  question:any={
    questionId:0,
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    correctAnswer:"",
    marks:0,
    exam:
    {
       examId:0,
       examName:"",
       examDuration:"",
       examDate:"",
       examPercentage:""
    }
  }
  constructor(private router:Router ,private service:BaseServiceService,private activatedroute:ActivatedRoute){

  }
  ngOnInit() {
    this.activatedroute.params.subscribe(
      (params)=>{
        this.service.GetQuestionById(params['questionid']).subscribe(
          (data)=>{
            console.log(data)
            this.question=data
          })
      }
    )
  }

  submit(examId:number,questionId:number){
    this.service.GetAllExamById(examId).subscribe(
      (data)=>{this.exam=data
      this.question.exam.examId=data.examId
      this.question.exam.examName=data.examName
      this.question.exam.examDuration=data.examDuration
      this.question.exam.examDate=data.examDate
      this.question.exam.examPercentage=data.examPercentage
      })
      this.service.UpdateQuestionById(questionId,this.question).subscribe(
        (data)=>{
          console.log(data)
        }
      )
    }
  backtoadmin(){
    this.service.AadminInterface()
  }
}
