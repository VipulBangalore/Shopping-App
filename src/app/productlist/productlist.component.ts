import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';
import { Subject } from 'rxjs';
import {ProductdetailsService} from '../productdetails.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProducts[];

  searchString: string;
  upproducts: IProducts[] = [];
  selectedProduct: Subject<any> = new Subject();
  total = 0;
  delit = 0;
  page = 1;
  show = false;
  pageSize = 10;

  constructor( private productdetailsService: ProductdetailsService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.productdetailsService.getData().subscribe((data) => {
      this.products = data;
      if (this.products) {
        this.show = true;
        this.totalPrice();
      }
   });
  }

  // tslint:disable-next-line: typedef
  getpopup(det) {
    this.selectedProduct.next(det);
  }

  // tslint:disable-next-line: typedef
  deletepopup(pid) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === pid) {
        this.products.splice(i, 1);
      }
    }
    this.totalPrice();
  }


  // tslint:disable-next-line: typedef
  totalPrice() {
    this.total = 0;
    for (const product of this.products) {
      this.total += (product.product_price * product.product_quality);
    }
  }

  // tslint:disable-next-line: typedef
  addItem(pid) {
    for (const product of this.products) {
      if (product.product_id === pid) {
            product.product_quality += 1;
          }
    }
    this.totalPrice();
  }

  // tslint:disable-next-line: typedef
  deleteItem(pid) {
    for (const product of this.products) {
      if (product.product_id === pid) {
            product.product_quality -= 1;
          }
    }
    this.totalPrice();
  }

}
