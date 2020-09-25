import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../core/services/products/products.service';
import { Product } from '../modelos/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    products: Product[] = [];

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit() {
        this.fetchProducts();
    }
    // products = this.productsService.getAllProducts()

    fetchProducts() {
        this.productsService.getAllProductsStock().subscribe(products => {
            this.products = products;
        });
    }

    getProductId(id: number): void {
        console.log(id);
    }
}
