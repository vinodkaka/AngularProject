import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  @Input() 
  score: any;
passed:boolean=false;
failed:boolean=true;
  
constructor(private router:Router){
  
}
  ngOnInit(): void {
    
  }

  studentinterface(){
    this.router.navigate(['StudentInterface'])
  }

 

}
