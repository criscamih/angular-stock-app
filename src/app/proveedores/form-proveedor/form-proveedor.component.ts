import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';
import {ProductsService } from '../../core/services/products/products.service';
import {ProveedorModel} from '../../modelos/proveedor.model';
@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.scss']
})
export class FormProveedorComponent implements OnInit {

  proveedor: ProveedorModel;
  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    nit: [null, Validators.required],
    telefono: [null],
    correo: [null]
  });
  constructor(
    private fb: FormBuilder,
    private _service: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(event:Event) {
    event.preventDefault();
    this.proveedor = {
      nombre: this.addressForm.value.nombre,
      nit: this.addressForm.value.nit,
      telefono: this.addressForm.value.telefono,
      correo: this.addressForm.value.correo,
      id_proveedor: 0,
    };
    this._service.createProveedor(this.proveedor).subscribe(proveedor => {
      alert('Proveedor insertado');
      this.router.navigate(['../proveedores']);
    });
  }
}
