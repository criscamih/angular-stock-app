import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewProduct} from './nuevo/newproduct.component';
import {DeleteProductComponent} from './delete/deleteproduct.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LayoutComponent} from './layout/layout.component';
import {EditarComponent} from './editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'nuevo',
        component: NewProduct,
        // loadChildren: () => import('./admin/components/product-form/product-form.component')
      },
      {
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        path: 'eliminar/:id',
        component: DeleteProductComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nuevo',
    component: NewProduct
  },
  {
    path: 'eliminar/:id',
    component: DeleteProductComponent
  },
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
