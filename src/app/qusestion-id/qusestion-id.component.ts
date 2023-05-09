import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseServiceService } from 'src/Service/base-service.service';

@Component({
  selector: 'app-qusestion-id',
  templateUrl: './qusestion-id.component.html',
  styleUrls: ['./qusestion-id.component.css']
})
export class QusestionIdComponent implements OnInit{

  question:any;
  constructor(private activatedroute:ActivatedRoute,private service:BaseServiceService){

  }
  ngOnInit():void {
    this.activatedroute.params.subscribe(
      (params)=>{console.log(`questionId:${params['questionid']}`)
      this.service.GetQuestionById(params['questionid']).subscribe(
        (data)=>this.question=data)
      
    });  
  }

  backtoadmin(){
    this.service.AadminInterface()
  }
}
