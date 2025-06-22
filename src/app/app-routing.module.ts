import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './carrito/catalogo/catalogo.component';
import { ProductoComponent } from './carrito/producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./contacto/contacto.module').then((m) => m.ContactoModule),
  },
  {
    path: '**',
    component: ErrorPaginaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
