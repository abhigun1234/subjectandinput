import { Component, OnInit } from '@angular/core';

import { GreetingService } from '../greeting.service';
@Component({
  selector: 'app-compf',
  templateUrl: './compf.component.html',
  styleUrls: ['./compf.component.css']
})
export class CompfComponent implements OnInit {
name=''
  constructor(private service :GreetingService) { }

  ngOnInit() {
  this.service.userName.subscribe(res=>{

    console.log("res",res)
    this.name=res
  })
  }

}
