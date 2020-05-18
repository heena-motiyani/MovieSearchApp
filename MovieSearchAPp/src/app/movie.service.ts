import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';
import { Movie } from './Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
SelectedMovie$:Subject<Movie> = new Subject<Movie>();
  constructor() { }
  get currentMovie()
  {
    return this.SelectedMovie$
  }changeSelectedMovie(movie: Movie)
  {
    this.SelectedMovie$.next(movie);
  }

}
