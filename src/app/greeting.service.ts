import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GreetingService {
   data
  constructor(private httpClient:HttpClient) { }
  

  // getData(){
  //   return this.data;
  // }
  // setData(item){
  // this.data=item
  // }

  public greet() 
  {

    return this.httpClient.get('http://rest-service.guides.spring.io/greeting')
  }
  // userName=new Subject<any>()
   userName=new BehaviorSubject("rajshri")
}
//https://github.com/abhigun1234/subjectandinput