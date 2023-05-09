import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseServiceService } from 'src/Service/base-service.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent implements OnInit{
  student:any;


  
  errormessage:any;
  constructor(private activatedroute:ActivatedRoute,private service:BaseServiceService){

  }
  ngOnInit(): void {
   this.activatedroute.params.subscribe(
    (params)=>{console.log(`exam id:${params['studentid']}`)
    this.service.GetStudentById(params['studentid']).subscribe(
      (data)=>(
        this.student=data,this.errormessage=""),
      (error: any)=>this.errormessage=error)
  });  
  }

}
