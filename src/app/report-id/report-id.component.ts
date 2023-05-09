import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseServiceService } from 'src/Service/base-service.service';

@Component({
  selector: 'app-report-id',
  templateUrl: './report-id.component.html',
  styleUrls: ['./report-id.component.css']
})
export class ReportIdComponent {
  report:any;
  constructor(private activatedroute:ActivatedRoute,private service:BaseServiceService){

  }
  ngOnInit(): void {
   this.activatedroute.params.subscribe(
    (params)=>{console.log(`ReportId:${params['reportid']}`)
    this.service.GetReportById(params['reportid']).subscribe(
      (data)=>this.report=data)
    
  });  
  }

  backtoadmin(){
    this.service.AadminInterface()
    
  }
}
