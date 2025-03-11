import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FechaPipe } from './pipes/fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AcercaDeComponent,
    PaginaNoEncontradaComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BusquedaComponent, 
    DetalleComponent,  
    FechaPipe,          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
