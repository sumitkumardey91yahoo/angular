# ProjectTest

 git clone origin https://github.com/sumitkumardey91yahoo/angular.git

 cd angular

 npm install

 # create new Project
 npm install -g @angular/cli
 ng new project-test
 cd project-test
 ng serve
# Run
ng serve

# module create
ng generate component ok

# router
src/app/app-routing.module.ts

import { NewComponent } from './new/new.component';
import { OkComponent } from './ok/ok.component'
const routes: Routes = [
      {
          path: 'new',
          component: NewComponent
      },
      {
         path: 'ok',
         component: OkComponent
       }
];


# sample code

   # ok.component.html

<div style = "text-align:center">
   <h1>
      Welcome to {{title}}.
   </h1>
</div>
<hr>
<div> Months :
   <select (change)="mySelect($event)">
      <option *ngFor = "let i of months" [value]="i" >{{i}}</option>
   </select>
   <p>i am seleted {{month}} </p>
</div>
<hr>

<button (click)="myClickFunction($event)">
   Click Me
</button>
<hr>


Name: <input (keyup)="getUserIdsFirstWay($event)">
<p>You entered: {{name}}</p>



#ok.component.ts


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OkComponent implements OnInit {

  title = 'Angular 4 Project!';
  month = "";
  //array of months.
  months = ["January", "February", "March", "April",
           "May", "June", "July", "August", "September",
           "October", "November", "December"];
  isavailable = true;   //variable is set to true

  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }
 getUserIdsFirstWay(e) {
   this.title = e.target.value;
   console.log(e.target.value)
 }
 mySelect(e) {
   console.log(e.target.value)
   this.month = e.target.value;
 }

  constructor() {

  }

  ngOnInit() {
  }

}
