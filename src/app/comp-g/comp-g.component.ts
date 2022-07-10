import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service';
@Component({
  selector: 'app-comp-g',
  templateUrl: './comp-g.component.html',
  styleUrls: ['./comp-g.component.css']
})
export class CompGComponent implements OnInit {
  userName="abhishek"
  constructor(private greet:GreetingService) { 

    this.greet.userName.subscribe(res=>{
      this.userName=res
      alert("subject called b")
      
    })
  }

  ngOnInit() {
  }

}
