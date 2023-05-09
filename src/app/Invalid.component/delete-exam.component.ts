import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-delete-exam',
  templateUrl: './delete-exam.component.html',
  styleUrls: ['./delete-exam.component.css']
})
export class DeleteExamComponent {
examid:number=0;
  constructor(private router:Router ,private service:BaseServiceService){

  }

  backtoadmin(){
    this.service.AadminInterface()
    console.log(this.examid);
  }
}
