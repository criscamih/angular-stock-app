import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../modelos/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Input() headers: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
