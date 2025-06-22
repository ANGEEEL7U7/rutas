import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  sesionActive = false;

  constructor(private ruta: Router) {}

  iniciarSesion(): void {
    this.sesionActive = true;
    this.ruta.navigate(['/']);
  }

  cerrarSesion(): void{
    this.sesionActive = false;
    this.ruta.navigate(['/login']);
  }
}
