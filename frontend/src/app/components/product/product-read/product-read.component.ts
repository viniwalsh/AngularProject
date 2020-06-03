import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProducts()
  }

  listProducts() {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }
}
