import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params, RouterLink, Router} from '@angular/router';
import {ProductsService} from '../../core/services/products/products.service';
import {ProveedorModel} from '../../modelos/proveedor.model';
@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.scss']
})
export class EliminarProveedorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) { }
  proveedor: ProveedorModel;
  headers: string[];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fecthProduct(id);
    });
  }
  fecthProduct(id: number) {
    this.productService.getProveedorById(id).subscribe(pro => {
      this.proveedor = pro;
      this.headers = Object.keys(this.proveedor);
    });
  }
  fetchDeletProduct(id: number) {
    this.productService.deleteProveedor(id).subscribe(product => {
      this.router.navigate(['./proveedores']);
    });
  }
}
