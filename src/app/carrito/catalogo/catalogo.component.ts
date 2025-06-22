import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { Producto } from './producto';
import { CarritoService } from '../carrito.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  constructor(
    private catalogoService: CatalogoService,
    private carritoService: CarritoService,
    private ruta: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {

   
  }

  get productos(): Producto[] {
    if(this.rutaActiva.snapshot.queryParamMap.get('orden') === 'precio'){
      return this.catalogoService.productos.sort((a,b)=> a.precio - b.precio);
    }
    return this.catalogoService.productos;
  }

  agregarCarrito(producto: Producto): void {
    this.catalogoService.eliminarProducto(producto);
    this.carritoService.agregarNuevoProducto(producto);
  }

  detallesProducto(id: number): void {
    this.ruta.navigate([ id], { relativeTo: this.rutaActiva });
  }
}
