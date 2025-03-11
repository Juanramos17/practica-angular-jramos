export interface IPelicula {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string; 
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Ratings?: { Source: string; Value: string }[];
  Runtime?: string;
}
