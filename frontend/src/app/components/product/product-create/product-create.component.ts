import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Stiker } from 'src/app/models/stiker.model';
import { StikerService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  stiker: Stiker = {
    id: '',
    name: '',
    country: '',
    category: ''
  };

  constructor(private stikerService: StikerService,
              private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.stikerService.create(this.stiker).subscribe(() => {
      this.stikerService.showMenssage('Operação realizada com sucesso')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
