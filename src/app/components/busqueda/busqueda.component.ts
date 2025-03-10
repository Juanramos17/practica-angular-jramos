import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';  // Asegúrate de que la ruta sea correcta
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IPelicula } from '../../models/ipeliculas';
import { FechaPipe } from '../../pipes/fecha.pipe';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, FechaPipe],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  titulo: string = '';  // El título de la película que el usuario ingresa
  peliculas: IPelicula[] = [];  // Array para almacenar las películas encontradas
  error: string = '';  // Mensaje de error
  cargando: boolean = false;  // Bandera para mostrar el spinner de carga

  constructor(private peliculaService: PeliculaService) {}

  buscarPeliculas() {
    if (!this.titulo.trim()) {
      return;  // Si no hay texto en el campo, no hacer nada
    }
  
    this.cargando = true;  // Activamos el estado de carga
    this.error = '';  // Limpiamos cualquier mensaje de error anterior
    this.peliculas = [];  // Limpiamos los resultados anteriores
  
    // Llamamos al servicio de películas
    this.peliculaService.buscarPeliculas(this.titulo).subscribe(
      (data: any) => {
        console.log('Datos de la API recibidos:', data);  // Revisa los datos recibidos
        this.cargando = false;  // Desactivamos el estado de carga
  
        if (data && data.length > 0) {
          this.peliculas = data;  // Asignamos los resultados a la variable peliculas
        } else {
          this.error = 'No se encontraron películas con ese título';  // Si no hay resultados
        }
      },
      (error) => {
        this.cargando = false;  // Desactivamos el estado de carga
        console.error('Hubo un error al obtener los datos:', error);  // Log de errores
        this.error = 'Hubo un error al obtener los datos';  // En caso de error
      }
    );
  }
  
  
}
