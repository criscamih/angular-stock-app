import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ProductsService } from '../core/services/products/products.service';
import { AreaModel } from '../modelos/area.model';
import { ProductoModel } from '../modelos/producto.modelo';
import { EmpleadoModel } from '../modelos/empleado.model';
import { EstadoModel } from '../modelos/estado.model';
import {StockModel} from '../modelos/stock.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  inventario: StockModel;
  @Input() areas: AreaModel[];
  @Input() productos: ProductoModel[];
  @Input() empleados: EmpleadoModel[];
  @Input() estados: EstadoModel[];

  addressForm = this.fb.group({
    observaciones: null,
    area: [null, Validators.required],
    estado: [null, Validators.required],
    empleado: [null],
    producto: [null, Validators.required],
    codigo_serial: [''],
    fecha: [new Date('1900-01-01')]
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private servicio: ProductsService
    ) {

      }

  onSubmit() {
    this.inventario = {
      codigo_serial: this.addressForm.value.codigo_serial,
      fecha: this.addressForm.value.fecha,
      observaciones: this.addressForm.value.observaciones,
      id_area: this.addressForm.value.area,
      id_empleado: this.addressForm.value.empleado,
      id_estado: this.addressForm.value.estado,
      id_inventario: 0,
      id_producto: this.addressForm.value.producto
    };
    this.servicio.createProductStock(this.inventario).subscribe(inventario => {
      alert('Producto insertado');
    });
  }
}
