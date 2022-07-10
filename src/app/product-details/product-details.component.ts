import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails:any
  constructor(private product:ProductService) { }

  ngOnInit() {
    this.productDetails=this.product.getProductData()
  }

}
