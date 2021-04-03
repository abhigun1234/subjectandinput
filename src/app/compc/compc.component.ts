import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-compc',
  templateUrl: './compc.component.html',
  styleUrls: ['./compc.component.css']
})
export class CompcComponent implements OnInit {
 name="raj"
  constructor(private greet :GreetingService) { 


    this.greet.userName.subscribe(data=>{
      console.log("data")
      this.name=data;
      alert("subject called of c")
    })
  }

  ngOnInit() {
  }

}
