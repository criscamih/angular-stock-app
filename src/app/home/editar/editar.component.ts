import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../../core/services/products/products.service';
import { ActivatedRoute, Params, RouterLink,Router } from '@angular/router';
import { DetalleInventarioModel } from '../../modelos/detalle_inventario.model';
import { InventarioModel } from '../../modelos/inventario.model';
import { AreaModel } from '../../modelos/area.model';
import { ProductoModel } from '../../modelos/producto.model';
import { EmpleadoModel } from '../../modelos/empleado.model';
import { EstadoModel } from '../../modelos/estado.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit,OnDestroy {
  id:number = 0;
  private sub: any;
  addressForm : FormGroup;
  headers: string[];
  inventario: InventarioModel;
  areas: AreaModel[];
  productos: ProductoModel[];
  empleados: EmpleadoModel[];
  estados: EstadoModel[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) {this.buildForm(); }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = Number(params.id);
    });
    this.fetchInventario(this.id);
    this.fetchAreas();
    this.fetchEmpleados();
    this.fetchEstados();
    this.fetchProductos();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  buildForm(){
    this.addressForm = this.fb.group({
      id_inventario: 0,
      codigo_serial: [''],
      fecha: [new Date('1900-01-01')],
      observaciones: null,
      producto: [null],
      empleado: [null],
      area: [null],
      estado: [null],
    });
  }

  fetchInventario(id: number){
      this.productService.getInventarioById(id).subscribe(inventario => {
      this.inventario = inventario;
      this.headers = Object.keys(this.inventario);
      this.addressForm.patchValue({
        id_inventario: this.inventario.id_inventario,
        codigo_serial: this.inventario.codigo_serial,
        fecha: this.inventario.fecha,
        observaciones: this.inventario.observaciones,
        producto: this.inventario.id_producto,
        empleado: this.inventario.id_empleado,
        area: this.inventario.id_area,
        estado: this.inventario.id_estado
      });
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

  onSubmit(event:Event){
    event.preventDefault();
    const editProduct: InventarioModel = {
      id_inventario: this.id,
      codigo_serial: this.addressForm.value.codigo_serial,
      fecha: this.addressForm.value.fecha,
      observaciones: this.addressForm.value.observaciones,
      id_area: this.addressForm.value.area,
      id_empleado: this.addressForm.value.empleado,
      id_estado: this.addressForm.value.estado,
      id_producto: this.addressForm.value.producto,
    };
    this.productService.updateInventario(this.id,editProduct).subscribe(objeto => {
      if(this.addressForm.valid){
          alert('Producto actualizado');
          this.router.navigate(['./inventario'])
      }
    });
  }

}
