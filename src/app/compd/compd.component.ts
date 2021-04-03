import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-compd',
  templateUrl: './compd.component.html',
  styleUrls: ['./compd.component.css']
})
export class CompdComponent implements OnInit {
  name=''
  constructor(private greet:GreetingService) { }

  ngOnInit() {
  
    this.greet.userName.subscribe(res=>{
    this.name=res;
 })
  }

}
