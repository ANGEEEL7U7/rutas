import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  carritoCompras: boolean = false;

  activarCarrito(): void {
    this.carritoCompras = !this.carritoCompras;
  }
}
