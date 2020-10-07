import { Component, OnInit, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';

import { ProductsService } from '../../core/services/products/products.service';
import { ProductoModel } from '../../modelos/producto.model';
import { ProveedorModel } from '../../modelos/proveedor.model';
import { TipoProductoModel } from '../../modelos/tipo_producto.model';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  @Input() proveedores: ProveedorModel[];
  @Input() tipo_productos: TipoProductoModel[];
  addressForm: FormGroup;

  constructor(
    private _service: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) { this.buildForm();}

  ngOnInit(): void {
  }

  buildForm(){
    this.addressForm = this.fb.group({
      descripcion: null,
      nombre: [null, Validators.required],
      valor: [null, Validators.required],
      proveedor: [null, Validators.required],
      tipo_producto: [null, Validators.required]
    });
  }

  onSubmit(event:Event) {
    event.preventDefault();
    const producto: ProductoModel = {
      nombre: this.addressForm.value.nombre,
      descripcion: this.addressForm.value.descripcion,
      valor: Number(this.addressForm.value.valor),
      id_proveedor: this.addressForm.value.proveedor,
      id_tipo_producto: this.addressForm.value.tipo_producto,
      id_producto: 0,
    };
    console.log(producto);
    this._service.createProducto(producto).subscribe((producto:ProductoModel) => {
      alert('Producto insertado');
      this.router.navigate(['../productos']);
    });
  }
  
}
