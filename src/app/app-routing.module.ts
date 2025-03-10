import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },  // Ruta principal
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '**', component: PaginaNoEncontradaComponent }  // Ruta 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
