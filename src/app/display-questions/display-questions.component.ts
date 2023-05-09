import { Component, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseServiceService } from 'src/Service/base-service.service';

@Component({
  selector: 'app-display-questions',
  templateUrl: './display-questions.component.html',
  styleUrls: ['./display-questions.component.css']
})
export class DisplayQuestionsComponent {
DisplayQuestions:boolean=true;
showresult:boolean=false;
  questions:any[]=[];

  @Output()
  Score:any;

  selectedAnswers: Map<number, string> = new Map<number, string>();

  constructor(private activatedroute:ActivatedRoute,private service:BaseServiceService,private router:Router){

  }

  ngOnInit(): void {
   this.activatedroute.params.subscribe(
    (params)=>{console.log(`exam id:${params['ExamId']}`)
    this.service.GetQuestionsByExamId(params['ExamId']).subscribe(
      (data)=>this.questions=data)
    
  });  
  }

  backtoadmin(){
    this.service.AadminInterface()
    
  }
updateSelectedAnswer(questionid:number,option:string){
  this.selectedAnswers.set(questionid,option);
console.log(questionid,option)
}

  submit(){
    const answers = Object.fromEntries(this.selectedAnswers);
    console.log(answers)
    this.service.SubmitAnswers(answers).subscribe(
      (data)=>{
        console.log(data)
        this.Score=data
      })
      this.DisplayQuestions=false;
      this.showresult=true;
      // this.router.navigate(['Result'])
  }
}
