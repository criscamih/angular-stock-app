import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router, RouterLink, Route} from '@angular/router';

import { ProductsService } from '../../core/services/products/products.service';
import { ProductoModel } from '../../modelos/producto.model';
import { ProveedorModel } from '../../modelos/proveedor.model';
import { TipoProductoModel } from '../../modelos/tipo_producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  addressForm: FormGroup;
  id:number;
  proveedores: ProveedorModel[] = [];
  tipo_productos: TipoProductoModel[] =[];
  constructor(
    private _service: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { this.buildForm();}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params.id);
      this.fetchProducto(this.id);
      this.fetchProveedores();
      this.fetchTipoProducto();
    });
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

  fetchProducto(id:number){
    this._service.getProductoById(id).subscribe(producto=>{
      this.addressForm.patchValue({
        descripcion: producto.descripcion,
        nombre: producto.nombre,
        valor: producto.valor,
        proveedor: producto.id_proveedor,
        tipo_producto: producto.id_tipo_producto
      }); 
    });
  }
  fetchProveedores(){
    this._service.getAllProveedores().subscribe(pros=>{
      this.proveedores = pros;
    });
  }
  fetchTipoProducto(){
    this._service.getAllTipoProducto().subscribe(tipos=>{
      this.tipo_productos = tipos;
    });
  }
  
  onSubmit(event:Event) {
    event.preventDefault();

    const producto: ProductoModel = {
      id_producto : this.id,
      nombre: this.addressForm.value.nombre,
      descripcion: this.addressForm.value.descripcion,
      valor: this.addressForm.value.valor,
      id_proveedor: this.addressForm.value.proveedor,
      id_tipo_producto: this.addressForm.value.tipo_producto
    };
    if(this.addressForm.valid){
      this._service.updateProducto(this.id,producto).subscribe(proveedor => {
        alert('Producto actualizado');
        this.router.navigate(['./productos'])
      });
    }
  }
}
