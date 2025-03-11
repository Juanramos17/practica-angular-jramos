import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { IPelicula } from '../../models/ipeliculas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  pelicula: IPelicula | null = null;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculaService
  ) {}

  ngOnInit(): void {
    const imdbID = this.route.snapshot.paramMap.get('id');

    if (imdbID) {
      this.peliculaService.obtenerPeliculaPorId(imdbID).subscribe(
        (data) => {
          if (data.Response === 'True') {
            this.pelicula = data;
          } else {
            this.error = 'No se encontró la película';
          }
        },
        (error) => {
          console.error('Hubo un error al obtener la película:', error);
          this.error = 'Hubo un error al obtener la película';
        }
      );
    } else {
      this.error = 'ID de película no válido';
    }
  }

  getRating(source: string): string {
    if (this.pelicula && this.pelicula.Ratings) {
      const rating = this.pelicula.Ratings.find(r => r.Source === source);
      return rating ? rating.Value : 'No disponible';
    }
    return 'No disponible';
  }
}
