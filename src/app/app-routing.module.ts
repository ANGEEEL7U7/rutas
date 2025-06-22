import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { LoginGuard } from './usuario/login.guard';

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
    canLoad: [LoginGuard],
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
