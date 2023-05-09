import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-all-reports',
  templateUrl: './get-all-reports.component.html',
  styleUrls: ['./get-all-reports.component.css']
})
export class GetAllReportsComponent implements OnInit{

  Reports:any[]=[];
  constructor(private router:Router ,private service:BaseServiceService){

  }
  ngOnInit(): void {
   this.service.GetAllReports().subscribe(
    (data)=>this.Reports=data
   )
  }

  backtoadmin(){
    this.service.AadminInterface()
  }

  update(reportid:number){

  }

  delete(reportid:number){

  }

}
