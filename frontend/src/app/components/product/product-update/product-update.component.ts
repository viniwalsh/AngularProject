import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Stiker } from 'src/app/models/stiker.model';
import { StikerService } from "../../../Services/product.service";


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  stiker: Stiker;

  constructor(private stikerService: StikerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stikerService.readById(id).subscribe(stiker => {
      this.stiker = stiker;
    })
  }

  updateProduct(): void {
    this.stikerService.update(this.stiker).subscribe(() => {
    this.stikerService.showMenssage('Stiker atualizado com sucesso');
    this.router.navigate(['/products']);
   })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
