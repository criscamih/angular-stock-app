import { Component, OnInit,Input } from '@angular/core';
import {ProductsService} from '../core/services/products/products.service';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import { Product } from '../modelos/product.model';
import { StockModel } from '../modelos/stock.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AreaModel } from '../modelos/area.model';
import { ProductoModel } from '../modelos/producto.modelo';
import { EmpleadoModel } from '../modelos/empleado.model';
import { EstadoModel } from '../modelos/estado.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  product: Product;
  headers: string[];
  inventario: StockModel;
  @Input() areas: AreaModel[];
  @Input() productos: ProductoModel[];
  @Input() empleados: EmpleadoModel[];
  @Input() estados: EstadoModel[];

  editFormGroup = this.fb.group({
    observaciones: null,
    area: [null, Validators.required],
    estado: [null, Validators.required],
    empleado: [null],
    producto: [null, Validators.required],
    codigo_serial: [''],
    fecha: [new Date('1900-01-01')]
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fecthProduct(id);
      this.fetchInventario(id);
      this.fetchAreas();
      this.fetchEmpleados();
      this.fetchEstados();
      this.fetchProductos();
  });
  }
  fecthProduct(id: number) {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
      this.headers = Object.keys(this.product);
    });
  }
  fetchInventario(id: number){
      this.productService.getInventarioById(id).subscribe(inventario => {
      this.inventario = inventario;
    });
  }
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
  fetchUpdateProduct(){
    const editProduct: Partial<StockModel> = {
      codigo_serial: this.editFormGroup.value.codigo_serial,
      fecha: this.editFormGroup.value.fecha,
      observaciones: this.editFormGroup.value.observaciones,
      id_area: this.editFormGroup.value.area,
      id_empleado: this.editFormGroup.value.empleado,
      id_estado: this.editFormGroup.value.estado,
      id_inventario: this.inventario.id_inventario,
    };

    this.productService.updateProductStock(editProduct).subscribe(objeto => {
      alert('objeto editado');
    });
  }

}
