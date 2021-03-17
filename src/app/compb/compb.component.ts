import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {
  userName="abhishek"
  name=""
  constructor(private greet :GreetingService) {
    this.greet.userName.subscribe(uname=>{
      this.userName=uname
      alert("subject called b")
    })
   }
  // getData(){
  // this.name= this.greet.getData()
  // }
  ngOnInit() {
  }

}
