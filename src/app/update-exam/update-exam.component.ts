import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit{
  exam:any={
    examId:0,
    examName:"",
    examDuration:"",
    examDate:"",
    examPercentage:"",
  }
  constructor(private router:Router ,private service:BaseServiceService,private activatedroute:ActivatedRoute){

  }
  ngOnInit(){
    this.activatedroute.params.subscribe(
      (params)=>{
        this.service.GetAllExamById(params['examid']).subscribe(
          (data)=>this.exam=data
        )
      }
    )
  }

  submit(examid:number){
    console.log(examid)
    this.service.UpdateExamById(examid,this.exam).subscribe(
      (data)=>console.log(data)
    )
  }
  backtoadmin(){
    this.service.AadminInterface()
  }
}
