import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 productDetails:any

  constructor(private product:ProductService) { }

  ngOnInit() {
  
    this.productDetails=this.product.getProductData()

  }

}
