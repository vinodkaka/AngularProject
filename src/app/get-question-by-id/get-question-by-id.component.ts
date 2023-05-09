import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-question-by-id',
  templateUrl: './get-question-by-id.component.html',
  styleUrls: ['./get-question-by-id.component.css']
})
export class GetQuestionByIdComponent {
questionid:number=0;
  constructor(private router:Router ,private service:BaseServiceService){

  }

  backtoadmin(){
    this.service.AadminInterface()
  }

  submit(){
    this.router.navigate(['questionid',this.questionid])
    console.log(this.questionid)
  }
}
