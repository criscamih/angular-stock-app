import { Component, Input, OnInit } from '@angular/core';
import { DetalleInventarioModel } from '../modelos/detalle_inventario.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() detalle_inventario: any;
  @Input() headers: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
