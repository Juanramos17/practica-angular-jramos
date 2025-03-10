import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelicula } from '../models/ipeliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiKey: string = '4988f59e';  // Tu API key de OMDB
  private url: string = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  buscarPeliculas(titulo: string): Observable<IPelicula[]> {
    const parametros = `?apikey=${this.apiKey}&type=movie&s=${titulo}`;
    return this.http.get<any>(this.url + parametros).pipe(
      map((response) => {
        console.log('Respuesta de la API:', response);  // Verifica lo que contiene la respuesta
        if (response.Response === 'True' && response.Search) {
          return response.Search as IPelicula[];
        } else {
          // Si la API no tiene resultados, lanza un error
          return [];
        }
      })
    );
  }
  
}
