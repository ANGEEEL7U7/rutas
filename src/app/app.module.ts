import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CarritoModule } from './carrito/carrito.module';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [AppComponent, CabeceraComponent, ErrorPaginaComponent],
  imports: [BrowserModule, CarritoModule, UsuarioModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
