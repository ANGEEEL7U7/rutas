import { Injectable } from '@angular/core';
import { Producto } from './catalogo/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  nuevosProductos: Producto[] = [];

  agregarNuevoProducto(producto: Producto): void {
    this.nuevosProductos.push(producto);
  }

  eliminarProducto(producto: Producto): void {
    this.nuevosProductos = this.nuevosProductos.filter((p) => p !== producto);
  }
}
