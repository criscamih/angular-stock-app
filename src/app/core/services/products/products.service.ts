import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

import { Product } from '../../../modelos/product.model';
import { AreaModel } from 'src/app/modelos/area.model';
import { EmpleadoModel } from 'src/app/modelos/empleado.model';
import { EstadoModel } from 'src/app/modelos/estado.model';
import { ProductoModel } from 'src/app/modelos/producto.modelo';
import { StockModel } from '../../../modelos/stock.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsStock() {
    return this.http.get<Product[]>(environment.url_stock);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${environment.url_stock}${id}`);
  }

  getAllAreas(){
    return this.http.get<AreaModel[]>(environment.url_areas);
  }

  getAllEmpleados(){
    return this.http.get<EmpleadoModel[]>(environment.url_empleados);
  }

  getAllEstados(){
    return this.http.get<EstadoModel[]>(environment.url_estados);
  }

  getAllProductos(){
    return this.http.get<ProductoModel[]>(environment.url_productos);
  }

  createProductStock(productoStock: StockModel) {
    return this.http.post(`${environment.url_stock}`, productoStock);
  }

  deleteProductStock(id: number){
    return this.http.delete(`${environment.url_stock}${id}`);
  }

  updateProductStock(changes: Partial<StockModel>) {
    return this.http.put(`${environment.url_stock}`, changes);
  }

  getInventarioById(id: number){
    return this.http.get<StockModel>(`${environment.url_inventario}${id}`);
  }

  // getAllProducts(): Product[]{
  //   return this.products;
  // }
  // getProductById(id: string): Product {
  //   return this.products.find(item => id === item.id);
  // }
}
