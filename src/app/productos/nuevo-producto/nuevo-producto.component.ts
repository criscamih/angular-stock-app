import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../core/services/products/products.service';
import { ProveedorModel } from '../../modelos/proveedor.model';
import { TipoProductoModel } from '../../modelos/tipo_producto.model';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  proveedores: ProveedorModel[] = [];
  tipo_productos: TipoProductoModel[] = [];
  constructor(
    private _service : ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProveedores();
    this.fetchTipoProductos();
  }

  fetchProveedores(){
    this._service.getAllProveedores().subscribe(proveedores => {
      this.proveedores = proveedores;
    });
  }
  fetchTipoProductos(){
    this._service.getAllTipoProducto().subscribe(tipos => {
      this.tipo_productos = tipos;
    });
  }
}
