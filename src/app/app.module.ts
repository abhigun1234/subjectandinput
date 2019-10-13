import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ChildComponent } from './child/child.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ChildComponent,
    CompaComponent,
    CompbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
