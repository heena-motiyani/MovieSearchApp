import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'display-movie',
  templateUrl: './display-movie.component.html',
  styles: []
})
export class DisplayMovieComponent implements OnInit {
@Input() movie:Movie 
  constructor() { }

  ngOnInit() {
  }
getPosterUrl(path:string)
{
  return "https://akns-images.eonline.com/eol_images/Entire_Site/201834/rs_634x939-180404132952-634-robert-downey-jr-avengers-infinity-war-poster-040418.jpg"
}
}
