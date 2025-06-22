import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto.component';

const rutas: Routes = [
  {
    path: '',
    component: ContactoComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(rutas)],
})
export class ContactoRoutingModule {}
