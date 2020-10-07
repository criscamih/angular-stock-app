import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

import { DetalleInventarioModel} from '../../../modelos/detalle_inventario.model';
import { AreaModel } from 'src/app/modelos/area.model';
import { EmpleadoModel } from 'src/app/modelos/empleado.model';
import { EstadoModel } from 'src/app/modelos/estado.model';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { InventarioModel } from '../../../modelos/inventario.model';
import { TipoProductoModel } from '../../../modelos/tipo_producto.model';
import { ProveedorModel } from '../../../modelos/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  
  
  getAllAreas(){
    return this.http.get<AreaModel[]>(environment.url_areas);
  }
  
  getAllEmpleados(){
    return this.http.get<EmpleadoModel[]>(environment.url_empleados);
  }

  getAllEstados(){
    return this.http.get<EstadoModel[]>(environment.url_estados);
  }
  
  getAllTipoProducto(){
    return this.http.get<TipoProductoModel[]>(environment.url_tipo_producto);
  }
  //-----------------------
  //---crud proveedores----
  //-----------------------
  getAllProveedores(){
    return this.http.get<ProveedorModel[]>(environment.url_proveedor);
  }
  getProveedorById(id: number){
    return this.http.get<ProveedorModel>(`${environment.url_proveedor}${id}`);
  }
  createProveedor(producto: ProveedorModel) {
    return this.http.post(`${environment.url_proveedor}`, producto);
  }
  deleteProveedor(id: number){
    return this.http.delete(`${environment.url_proveedor}${id}`);
  }
  updateProveedor(id:number, changes: ProveedorModel) {
    return this.http.put<ProductoModel>(`${environment.url_proveedor}${id}`, changes);
  }
  
  //-----------------------
  //---crud productos------
  //-----------------------
  getAllProductos(){
    return this.http.get<ProductoModel[]>(environment.url_productos);
  }
  getProductoById(id: number){
    return this.http.get<ProductoModel>(`${environment.url_productos}${id}`);
  }
  createProducto(producto: ProductoModel) {
    return this.http.post(`${environment.url_productos}`, producto);
  }
  deleteProducto(id: number){
    return this.http.delete(`${environment.url_productos}${id}`);
  }
  updateProducto(id:number,changes:ProductoModel) {
    return this.http.put(`${environment.url_productos}${id}`, changes);
  }
  
  //-----------------------
  //---crud inventario-----
  //-----------------------
  createInventario(inventario: InventarioModel) {
    return this.http.post(`${environment.url_inventario}`, inventario);
  }
  
  deleteInventario(id: number){
    return this.http.delete(`${environment.url_inventario}${id}`);
  }
  
  updateInventario(id:number,changes: InventarioModel) {
    return this.http.put(`${environment.url_inventario}${id}`, changes);
  }
  
  getInventarioById(id: number){
    return this.http.get<InventarioModel>(`${environment.url_inventario}${id}`);
  }

  getAllInventarios() {
    return this.http.get<InventarioModel[]>(environment.url_inventario);
  }

  getDetalleInventario(id: number) {
    return this.http.get<DetalleInventarioModel>(`${environment.url_detalle_inventario}${id}`);
  }

}
