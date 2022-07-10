import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[{id:"1",name:"addidas"},{id:"2",name:"nike"}]
  constructor() { }

  getProductData(){

    return this.productDetails
  }
}
