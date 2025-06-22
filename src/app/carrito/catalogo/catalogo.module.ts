import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[CatalogoComponent]
})
export class CatalogoModule { }
