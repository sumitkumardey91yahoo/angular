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
