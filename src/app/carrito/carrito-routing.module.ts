import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarritoComponent } from './carrito.component';
import { ProductoComponent } from './producto/producto.component';

const rutas: Routes = [
  {
    path: 'productos',
    children: [
      {
        path: '',
        component: CatalogoComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
      {
        path: ':id',
        component: ProductoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:[RouterModule]
})
export class CarritoRoutingModule { }
