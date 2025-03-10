import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // Para hacer peticiones HTTP
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Importamos el componente standalone
import { BusquedaComponent } from './components/busqueda/busqueda.component';
// Importamos la pipe que creamos
import { FechaPipe } from './pipes/fecha.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AcercaDeComponent,
    PaginaNoEncontradaComponent,
    HeaderComponent,
    FooterComponent,
    // No declaramos la pipe FechaPipe aquí, ya que es standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Para las peticiones HTTP
    BusquedaComponent,  // Importamos el componente standalone aquí
    FechaPipe,  // IMPORTANTE: Ahora la pipe FechaPipe está IMPORTADA aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
