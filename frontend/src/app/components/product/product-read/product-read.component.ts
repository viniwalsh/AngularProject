import { Component, OnInit } from '@angular/core';
import { Stiker } from 'src/app/models/stiker.model';
import { StikerService } from "../../../Services/product.service";

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {
  stikers: Stiker[];
  displayedColumns = ['id', 'name', 'country', 'category','action'];

  constructor(private stickerService: StikerService) {
  }

  ngOnInit(): void {
    this.listProducts()
  }

  listProducts() {
    this.stickerService.read().subscribe(stikers => {
      this.stikers = stikers;
    })
  }
}
