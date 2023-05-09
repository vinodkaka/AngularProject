import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route:Router){

  }
  adminclick(){
    this.route.navigate(['Admin'])
    console.log("admin")
  }

  Studentclick(){
    console.log("admin")
    this.route.navigate(['Student'])
  }
}
