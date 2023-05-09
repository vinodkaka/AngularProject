import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.css']
})
export class AddExamsComponent {
  exam:any={
    examId:0,
    examName:"",
    examDuration:"",
    examDate:"",
    examPercentage:"",
  }
  constructor(private router:Router ,private service:BaseServiceService){

  }

  backtoadmin(){
    this.service.AadminInterface()
  }

  submit(){
    this.service.AddExam(this.exam).subscribe(
      (data)=>console.log(data)
    )
  }
}
