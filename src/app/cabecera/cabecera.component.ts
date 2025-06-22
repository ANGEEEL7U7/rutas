import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  @Output() modo = new EventEmitter<void>();

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    
  }

  get contadorCarrito(): number {
    return this.carritoService.nuevosProductos.length;
  }

  cambiarModo(): void {
    this.modo.emit();
  }
}
