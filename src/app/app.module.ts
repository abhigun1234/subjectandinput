import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ChildComponent } from './child/child.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { CompdComponent } from './compd/compd.component';
import { CompfComponent } from './compf/compf.component';
import { GComponent } from './g/g.component';
import { CompGComponent } from './comp-g/comp-g.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ChildComponent,
    CompaComponent,
    CompbComponent,
    CompcComponent,
    CompdComponent,
    CompfComponent,
    GComponent,
    CompGComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
