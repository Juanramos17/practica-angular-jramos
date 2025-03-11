import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { IPelicula } from '../../models/ipeliculas';
import { FechaPipe } from '../../pipes/fecha.pipe';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FechaPipe], 
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  titulo: string = '';
  peliculas: IPelicula[] = [];
  error: string = '';
  cargando: boolean = false;

  constructor(private peliculaService: PeliculaService) {}

  buscarPeliculas() {
    if (!this.titulo.trim()) return;

    this.cargando = true;
    this.error = '';
    this.peliculas = [];

    this.peliculaService.buscarPeliculas(this.titulo).subscribe(
      (data) => {
        this.cargando = false;
        if (data && data.length > 0) {
          this.peliculas = data;
        } else {
          this.error = 'No se encontraron películas o series con ese título';
        }
      },
      (error) => {
        this.cargando = false;
        this.error = 'Hubo un error al obtener los datos';
      }
    );
  }
}
