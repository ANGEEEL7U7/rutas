import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';


const rutas: Routes = [
  {
    path: '',
    component: PerfilComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(rutas)],
})
export class PerfilRoutingModule {}
