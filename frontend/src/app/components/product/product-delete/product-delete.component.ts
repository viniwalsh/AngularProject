import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Stiker } from 'src/app/models/stiker.model';
import { StikerService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  stiker: Stiker;

  constructor(private stikerService: StikerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stikerService.readById(id).subscribe(product => {
      this.stiker = product;
    })
  }

  deleteProduct(): void {
    this.stikerService.deletProduct(this.stiker.id).subscribe(() => {
      this.stikerService.showMenssage('Produto excluido com sucesso');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
