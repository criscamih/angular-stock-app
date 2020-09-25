import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../modelos/product.model';

@Component({
    selector: 'app-table',
    templateUrl: './tableproduct.component.html',
    styleUrls: ['./tableproduct.component.scss']
})
export class TableProductComponent {

    product: Product;
    constructor(

    ) {}

    @Input() products: Product[];
    @Output() productClicked: EventEmitter<string> = new EventEmitter();


    updateProduct(id:string) {
        console.log(" Actualiza producto ");
        this.productClicked.emit(id);
    }
    deleteProduct() {
        console.log("elimina producto");
    }
}