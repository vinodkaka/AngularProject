import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseServiceService } from '../../Service/base-service.service';

@Component({
  selector: 'app-get-report-by-id',
  templateUrl: './get-report-by-id.component.html',
  styleUrls: ['./get-report-by-id.component.css']
})
export class GetReportByIdComponent {
reportid:number=0;
  constructor(private router:Router ,private service:BaseServiceService){

  }

  backtoadmin(){
    this.service.AadminInterface()
    
  }

  submit(){
    this.router.navigate(['reportid',this.reportid])
    console.log(this.reportid);
  }
}
