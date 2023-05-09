import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-exam-id',
  templateUrl: './enter-exam-id.component.html',
  styleUrls: ['./enter-exam-id.component.css']
})
export class EnterExamIdComponent {
  ExamId:number=0;
constructor(private router:Router){}

  submit(){
    this.router.navigate(['ExamId',this.ExamId])
    console.log(this.ExamId);
  }
}
