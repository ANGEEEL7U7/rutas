import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from '../catalogo/catalogo.service';
import { Producto } from '../catalogo/producto';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  detallesProducto!: Producto

  constructor(
    private routaActiva: ActivatedRoute,
    private ruta: Router,
    private catalogoService: CatalogoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const id = this.routaActiva.snapshot.paramMap.get('id');
    this.obtenerProducto(id);
  }
  obtenerProducto(id:any):void{
    let producto = this.catalogoService.productos[id];
    if(typeof producto === 'undefined'){
      producto = this.carritoService.nuevosProductos[id];
    }

    if(typeof producto === 'undefined'){
      this.ruta.navigate(['productos']);
    }
    this.detallesProducto = producto;
  }
}
