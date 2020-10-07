import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, RouterLink, Router} from '@angular/router';
import { Observable } from 'rxjs';

import { ProductsService } from '../../core/services/products/products.service';
import { ProveedorModel } from '../../modelos/proveedor.model';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.scss']
})
export class EditarProveedorComponent implements OnInit{

  addressForm: FormGroup;
  id:number;
  constructor(
    private _service: ProductsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {   
    this.buildForm();

  }
  
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params.id);
      this.fetchProveedor(this.id);
    });
  }
  buildForm(){
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.addressForm = this.fb.group({
      id_proveedor: [0],
      nombre: [null, Validators.required],
      nit: [null, Validators.required],
      telefono: [null],
      correo: [null,Validators.pattern(emailregex)]
    });
  }
  fetchProveedor(id:number){
    this._service.getProveedorById(id).subscribe(proveedor=>{
      this.addressForm.patchValue({
        id_proveedor: proveedor.id_proveedor,
        nombre: proveedor.nombre,
        nit: proveedor.nit,
        telefono: proveedor.telefono,
        correo: proveedor.correo
      }); 
    });
  }

  onSubmit(event:Event) {
    event.preventDefault();

    const proveedor: ProveedorModel = {
      id_proveedor: this.id,
      nombre: this.addressForm.value.nombre,
      nit: this.addressForm.value.nit,
      telefono: this.addressForm.value.telefono,
      correo: this.addressForm.value.correo,
    };
    if(this.addressForm.valid){
      this._service.updateProveedor(this.id,proveedor).subscribe(proveedor => {
        alert('Proveedor actualizado');
        this.router.navigate(['./proveedores'])
      });
    }
  }
}
