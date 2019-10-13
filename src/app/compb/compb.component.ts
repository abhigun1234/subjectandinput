import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {
  userName="abhishek"
  constructor(private greet :GreetingService) {
    this.greet.userName.subscribe(uname=>{
      this.userName=uname
    })
   }

  ngOnInit() {
  }

}
