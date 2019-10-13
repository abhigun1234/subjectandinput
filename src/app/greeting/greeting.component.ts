import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor(private greetService :GreetingService) { }

  ngOnInit() {
  }

  greetMe()
  {

    this.greetService.greet().subscribe(res=>{


      console.log(res)
    })
  }
}
