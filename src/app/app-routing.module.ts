import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent }, // Página principal con la búsqueda
  { path: 'detalle/:id', component: DetalleComponent }, // Ruta para ver detalles de una película o serie
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '**', component: PaginaNoEncontradaComponent } // Página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
