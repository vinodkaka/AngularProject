import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-exam-id',
  templateUrl: './exam-id.component.html',
  styleUrls: ['./exam-id.component.css']
})
export class ExamIdComponent implements OnInit {
  exam:any;
  constructor(private activatedroute:ActivatedRoute,private service:BaseServiceService){

  }
  ngOnInit(): void {
   this.activatedroute.params.subscribe(
    (params)=>{console.log(`exam id:${params['examid']}`)
    this.service.GetAllExamById(params['examid']).subscribe(
      (data)=>this.exam=data)
    
  });  
  }

  backtoadmin(){
    this.service.AadminInterface()
    
  }

}
