import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  productos: Producto[] = [
    { nombre: 'Laptop Lenovo ThinkPad', precio: 1200 },
    { nombre: 'Monitor Samsung 24"', precio: 250 },
    { nombre: 'Teclado Mecánico Logitech', precio: 80 },
    { nombre: 'Mouse Inalámbrico HP', precio: 35 },
    { nombre: 'Impresora Epson EcoTank', precio: 300 },
    { nombre: 'Tablet Samsung Galaxy Tab', precio: 400 },
    { nombre: 'Auriculares Sony WH-1000XM4', precio: 350 },
    { nombre: 'Disco Duro Externo Seagate 2TB', precio: 90 },
    { nombre: 'Smartwatch Xiaomi Mi Band 7', precio: 60 },
    { nombre: 'Cámara Web Logitech C920', precio: 110 },
  ];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
  eliminarProducto(producto: Producto): void {
    this.productos = this.productos.filter((p) => p !== producto);
  }
}
