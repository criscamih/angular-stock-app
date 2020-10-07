import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { DetalleInventarioModel } from '../modelos/detalle_inventario.model';
import { InventarioModel } from '../modelos/inventario.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    inventarios: InventarioModel[] = [];
    detalle_inventario: DetalleInventarioModel[] = [];
    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit() {
        this.fetchProducts();   
    }

    fetchProducts() {
        this.productsService.getAllInventarios().subscribe(products => {
            this.inventarios = products;
            for(let i of this.inventarios){
                this.productsService.getDetalleInventario(i.id_inventario).subscribe(detalle => {
                    if(i.id_inventario == detalle.id_inventario){
                        this.detalle_inventario.push(detalle)
                    }
                });
            }
        });
    }

}
