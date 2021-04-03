import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GreetingService {
   data
  constructor(private httpClient:HttpClient) { }
  

  getData(){
    return this.data;
  }
  setData(item){
  this.data=item
  }

  public greet() 
  {

    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
  }
  // userName=new Subject<any>()
   userName=new BehaviorSubject("shivangi")
}
//https://github.com/abhigun1234/subjectandinput