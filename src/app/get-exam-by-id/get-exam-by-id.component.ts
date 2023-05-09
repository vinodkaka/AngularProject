import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-exam-by-id',
  templateUrl: './get-exam-by-id.component.html',
  styleUrls: ['./get-exam-by-id.component.css']
})
export class GetExamByIdComponent {
examid:number=0;
  constructor(private router:Router ,private service:BaseServiceService){

  }

  backtoadmin(){
    this.service.AadminInterface()
    
  }

  submit(){
    this.router.navigate(['examid',this.examid])
    console.log(this.examid);
  }
}
