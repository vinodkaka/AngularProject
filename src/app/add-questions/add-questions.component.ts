import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
exam:any;



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

  constructor(private router:Router ,private service:BaseServiceService){
  }

  submit(examId:number){
    this.service.GetAllExamById(examId).subscribe(
      (data)=>{this.exam=data
      this.question.exam.examId=data.examId
      this.question.exam.examName=data.examName
      this.question.exam.examDuration=data.examDuration
      this.question.exam.examDate=data.examDate
      this.question.exam.examPercentage=data.examPercentage
      })

      this.service.AddQuestion(this.question).subscribe(
        (data)=>console.log(data)
    )
  }
  backtoadmin(){
    this.service.AadminInterface()
  }
}
