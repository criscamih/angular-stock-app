import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { ProductoModel } from '../modelos/producto.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos : ProductoModel[] = [];
  constructor(
    private _service : ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchAllProducts();
  }
  fetchAllProducts(){
    this._service.getAllProductos().subscribe(p => {
      this.productos = p;
    });
  }
}
