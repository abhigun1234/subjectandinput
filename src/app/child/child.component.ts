import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()  public parentData;
  @Output() public childEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  sendData()
  {
    this.childEvent.emit('hi everyone sending the data from child to parent use output decorator')
  }

}
