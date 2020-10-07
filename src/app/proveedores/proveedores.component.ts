import { Component, OnInit } from '@angular/core';
import { ProveedorModel } from '../modelos/proveedor.model';
import {ProductsService} from '../core/services/products/products.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  proveedores: ProveedorModel[] = [];

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchgetAllProvedores();
  }
  fetchgetAllProvedores(){
    this.service.getAllProveedores().subscribe(pro => {
      this.proveedores = pro;
    });
  }
}
