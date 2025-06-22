import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  constructor(
    private carritoService: CarritoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

  get contadorCarrito(): number {
    return this.carritoService.nuevosProductos.length;
  }
  get sesionActiva(): boolean{
    return this.usuarioService.sesionActive;
  }

  cerrarSesion(): void{
    this.usuarioService.cerrarSesion();
  }
}
