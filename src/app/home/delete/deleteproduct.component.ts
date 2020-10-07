import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterLink, Router} from '@angular/router';
import {ProductsService} from '../../core/services/products/products.service';
import { DetalleInventarioModel } from '../../modelos/detalle_inventario.model';

@Component({
    selector: 'app-deleteproduct',
    templateUrl: './deleteproduct.component.html'
})

export class DeleteProductComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private productService: ProductsService,
        private router: Router
    ) { }
    detalle_inventario: DetalleInventarioModel;
    headers: string[];
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const id = params.id;
            this.fecthProduct(id);
        });
    }
    fecthProduct(id: number) {
        this.productService.getDetalleInventario(id).subscribe(inventario => {
            this.detalle_inventario = inventario;
            this.headers = Object.keys(this.detalle_inventario);
        });
    }
    fetchDeletProduct(id: number) {
        this.productService.deleteInventario(id).subscribe(product =>{
            this.router.navigate(['./inventario']);

        });
    }
}
