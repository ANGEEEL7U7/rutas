import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: 'perfil',
    loadChildren: () =>
      import('./perfil/perfil.module').then(m => m.PerfilModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(rutas)],
})
export class UsuarioRoutingModule {}
