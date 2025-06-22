import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoRoutingModule } from './carrito-routing.module';
import { CatalogoModule } from './catalogo/catalogo.module';



@NgModule({
  declarations: [CarritoComponent, ProductoComponent],
  imports: [CommonModule,CarritoRoutingModule],
  exports: [CarritoComponent],
})
export class CarritoModule {}
