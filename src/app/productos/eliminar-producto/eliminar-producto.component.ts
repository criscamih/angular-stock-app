import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params, RouterLink, Router} from '@angular/router';
import {ProductsService} from '../../core/services/products/products.service';
import {ProductoModel} from '../../modelos/producto.model';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss']
})
export class EliminarProductoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) { }
  producto: ProductoModel;
  headers: string[];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fecthProduct(id);
    });
  }
  fecthProduct(id: number) {
    this.productService.getProductoById(id).subscribe(pro => {
      this.producto = pro;
      this.headers = Object.keys(this.producto);
    });
  }
  fetchDeletProduct(id: number) {
    this.productService.deleteProducto(id).subscribe(product => {
      this.router.navigate(['./productos']);
    });
  }

}
