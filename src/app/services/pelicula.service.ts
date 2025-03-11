import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelicula } from '../models/ipeliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiKey: string = '4988f59e';
  private url: string = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  buscarPeliculas(titulo: string, tipo: 'movie' | 'series' | 'all' = 'all'): Observable<IPelicula[]> {
    let parametros = `?apikey=${this.apiKey}&s=${titulo}`;

    if (tipo !== 'all') {
      parametros += `&type=${tipo}`;
    }

    return this.http.get<any>(this.url + parametros).pipe(
      map((response) => response.Search ? response.Search as IPelicula[] : []) 
    );
  }

  obtenerDetalles(id: string): Observable<IPelicula> {
    return this.http.get<IPelicula>(`${this.url}?apikey=${this.apiKey}&i=${id}`);
  }

obtenerPeliculaPorId(imdbID: string): Observable<any> {
  const parametros = `?apikey=${this.apiKey}&i=${imdbID}`; 
  return this.http.get<any>(this.url + parametros);
}

  
}
