import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewProduct } from './home/nuevo/newproduct.component';
import { DeleteProductComponent } from './home/delete/deleteproduct.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductFormComponent } from './home/product-form/product-form.component';
import { EditarComponent } from './home/editar/editar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { TableProveedoresComponent } from './proveedores/table-proveedores/table-proveedores.component';
import { TableInventariosComponent } from './home/table-inventarios/table-inventarios.component';
import { TableProductosComponent } from './productos/table-productos/table-productos.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from './proveedores/eliminar-proveedor/eliminar-proveedor.component';
import { FormProductoComponent } from './productos/form-producto/form-producto.component';
import { FormProveedorComponent } from './proveedores/form-proveedor/form-proveedor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewProduct,
    DeleteProductComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
    ProductFormComponent,
    EditarComponent,
    ProductosComponent,
    ProveedoresComponent,
    TableProveedoresComponent,
    TableInventariosComponent,
    TableProductosComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    NuevoProveedorComponent,
    EditarProveedorComponent,
    EliminarProveedorComponent,
    FormProductoComponent,
    FormProveedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
