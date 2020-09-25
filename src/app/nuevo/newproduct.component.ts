import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../core/services/products/products.service';
import { AreaModel } from '../modelos/area.model';
import { ProductoModel } from '../modelos/producto.modelo';
import { EmpleadoModel } from '../modelos/empleado.model';
import { EstadoModel } from '../modelos/estado.model';
import { StockModel } from '../modelos/stock.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-newProduct',
    templateUrl: './newproduct.component.html'
})
// tslint:disable-next-line: component-class-suffix
export class NewProduct implements OnInit {
    areas: AreaModel[] = [];
    productos: ProductoModel[] = [];
    empleados: EmpleadoModel[] = [];
    estados: EstadoModel[] = [];
    stock: StockModel;
    constructor(
        private productService: ProductsService
    ) { }

    ngOnInit() {
        this.fetchAreas();
        this.fetchEmpleados();
        this.fetchEstados();
        this.fetchProductos();
    }
    // products = this.productsService.getAllProducts()

    fetchAreas() {
        this.productService.getAllAreas().subscribe(areas => {
            this.areas = areas;
        });
    }
    fetchEmpleados() {
        this.productService.getAllEmpleados().subscribe(emplados => {
            this.empleados = emplados;
        });
    }
    fetchProductos() {
        this.productService.getAllProductos().subscribe(productos => {
            this.productos = productos;
        });
    }
    fetchEstados() {
        this.productService.getAllEstados().subscribe(estados => {
            this.estados = estados;
        });
    }
    // fetchCrearStock() {
    //     const newProduct: StockModel = {
    //         id_inventario: 0,
    //         codigo_serial: '',
    //         fecha: new Date('1900-01-01'),
    //         observaciones: 'para la sala principal sede 1',
    //         id_area: 4,
    //         id_empleado: 5,
    //         id_estado: 1,
    //         id_producto: 4
    //     }

    //     this.productService.createProductStock(newProduct).subscribe(stock => {
    //         console.log(stock);
    //     });
    // }
}