import { Component, OnInit } from '@angular/core';
import {data} from './mock-data';
import {MovieService} from './movie.service';
import {Subject} from 'rxjs';
import {Movie} from './Movie';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
 searchResults: Movie[] = data;
 
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  } 
setCurrentMovie(movie:Movie)
{
  this.movieService.changeSelectedMovie(movie)
}
}
