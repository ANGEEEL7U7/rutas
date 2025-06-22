import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor(private usuarioService: UsuarioService, private ruta: Router) {}

  canActivate(): boolean | UrlTree {
    return this.sesionActiva();
  }

  canLoad(): boolean | UrlTree {
    return this.sesionActiva();
  }

  sesionActiva(): boolean | UrlTree {
    return this.usuarioService.sesionActive || this.ruta.parseUrl('/login');
  }
}
