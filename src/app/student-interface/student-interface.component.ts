import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-interface',
  templateUrl: './student-interface.component.html',
  styleUrls: ['./student-interface.component.css']
})
export class StudentInterfaceComponent {
  constructor(private router:Router){
    
  }

  back(){
    this.router.navigate(['Admin'])
  }

  writeExam(){
    this.router.navigate(['EnterExamId'])
  }
}
