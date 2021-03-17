import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent implements OnInit {
userName="abhishek"
name="ravi"
  constructor(private greet :GreetingService) {
    // this.greet.userName.subscribe(uname=>{
    //   this.userName=uname
    //   alert("subject called a")
    // })
   }

  ngOnInit() {
  }
  brodCastMessage(uname)
  {
  //  this.greet.userName.next(uname)
  this.greet.userName.next(uname)
  }
  // sendData(){
  //   this.greet.setData(name)
  // }

}
