import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewProduct } from './home/nuevo/newproduct.component';
import { DeleteProductComponent } from './home/delete/deleteproduct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { EditarComponent } from './home/editar/editar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import {NuevoProductoComponent} from './productos/nuevo-producto/nuevo-producto.component';
import {EditarProductoComponent} from './productos/editar-producto/editar-producto.component';
import {EliminarProductoComponent} from './productos/eliminar-producto/eliminar-producto.component';
import {NuevoProveedorComponent} from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import {EditarProveedorComponent} from './proveedores/editar-proveedor/editar-proveedor.component';
import {EliminarProveedorComponent} from './proveedores/eliminar-proveedor/eliminar-proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inventario',
        pathMatch: 'full'
      },
      {
        path: 'inventario',
        component: HomeComponent
      },
      {
        path: 'inventario/nuevo',
        component: NewProduct,
        // loadChildren: () => import('./admin/components/product-form/product-form.component')
      },
      {
        path: 'inventario/editar/:id',
        component: EditarComponent
      },
      {
        path: 'inventario/eliminar/:id',
        component: DeleteProductComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'productos/nuevo',
        component: NuevoProductoComponent,
      },
      {
        path: 'productos/editar/:id',
        component: EditarProductoComponent
      },
      {
        path: 'productos/eliminar/:id',
        component: EliminarProductoComponent
      },
      {
        path: 'proveedores',
        component: ProveedoresComponent
      },
      {
        path: 'proveedores/nuevo',
        component: NuevoProveedorComponent,
      },
      {
        path: 'proveedores/editar/:id',
        component: EditarProveedorComponent
      },
      {
        path: 'proveedores/eliminar/:id',
        component: EliminarProveedorComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]

  },
  // {
  //   path: 'inventario',
  //   component: HomeComponent
  // },
  // {
  //   path: 'inventario/nuevo',
  //   component: NewProduct
  // },
  // {
  //   path: 'inventario/eliminar/:id',
  //   component: DeleteProductComponent
  // },
  // {
  //   path: 'inventario/editar/:id',
  //   component: EditarComponent
  // },
  // {
  //   path: 'productos',
  //   component: ProductosComponent
  // },
  // {
  //   path: 'productos/nuevo',
  //   component: NuevoProductoComponent,
  // },
  // {
  //   path: 'productos/editar/:id',
  //   component: EditarProductoComponent
  // },
  // {
  //   path: 'productos/eliminar/:id',
  //   component: EliminarProductoComponent
  // },
  // {
  //   path: 'proveedores',
  //   component: ProveedoresComponent
  // },
  // {
  //   path: 'proveedores/nuevo',
  //   component: NuevoProveedorComponent,
  // },
  // {
  //   path: 'proveedores/editar/:id',
  //   component: EditarProveedorComponent
  // },
  // {
  //   path: 'proveedores/eliminar/:id',
  //   component: EliminarProveedorComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
