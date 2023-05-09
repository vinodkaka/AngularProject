import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-all-questins',
  templateUrl: './get-all-questins.component.html',
  styleUrls: ['./get-all-questins.component.css']
})
export class GetAllQuestinsComponent implements OnInit {

  Questions:any[]=[];

  constructor(private router:Router ,private service:BaseServiceService){

  }
  ngOnInit() {
    this.service.GetAllQuestions().subscribe(
      (data)=>this.Questions=data
    )
  }

  backtoadmin(){
    this.service.AadminInterface()
  }

  delete(questionid:number){
    console.log("questionid")
    this.service.DeleteQuestion(questionid).subscribe()
    }
  
    update(questionid:number){
  console.log(questionid)
  this.router.navigate(['UpdateQuestion',questionid])
    }
}
