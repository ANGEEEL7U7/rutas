import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';
import { Producto } from './catalogo/producto';
import { CatalogoService } from './catalogo/catalogo.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  constructor(
    private carritoService: CarritoService,
    private catalogoService: CatalogoService
  ) {}

  ngOnInit(): void {}

  get productos(): Producto[] {
    return this.carritoService.nuevosProductos;
  }

  get total(): number{
    return this.carritoService.nuevosProductos.reduce((acc,{precio})  => (acc+=precio),0)
  }

  eliminarProducto(producto: Producto): void {
    this.carritoService.eliminarProducto(producto);
    this.catalogoService.agregarProducto(producto);
  }
}
