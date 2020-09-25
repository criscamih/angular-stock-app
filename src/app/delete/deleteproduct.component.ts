import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import { Product } from '../modelos/product.model';
import {ProductsService} from '../core/services/products/products.service';

@Component({
    selector: 'app-deleteproduct',
    templateUrl: './deleteproduct.component.html'
})

export class DeleteProductComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private productService: ProductsService
    ) { }
    product: Product;
    headers: string[];
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const id = params.id;
            this.fecthProduct(id);
        });
    }
    fecthProduct(id: number) {
        this.productService.getProductById(id).subscribe(product => {
            this.product = product;
            this.headers = Object.keys(this.product);
        });
    }
    fetchDeletProduct(id: number) {
        this.productService.deleteProductStock(id).subscribe(product =>{
            alert('producto eliminado');
        });
    }
}
