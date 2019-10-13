import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private httpClient:HttpClient) { }


  public greet() 
  {

    return this.httpClient.get('http://rest-service.guides.spring.io/greeting')
  }
  //userName=new Subject<any>()
   userName=new BehaviorSubject("raj")
}
