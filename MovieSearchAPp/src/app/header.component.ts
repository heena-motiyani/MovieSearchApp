import {Component} from '@angular/core';
import {Output,EventEmitter} from '@angular/core';
import { from } from 'rxjs';

@Component(
{
  selector: 'app-header',
  template:`
  <header>
  <div class="row">
  <div class=" center-align">
  <span (click) = "startNewSearch.emit()" class="material-icons">search</span>
  
  </div>
  </div>
  
  </header>
  `
})
export class HeaderComponent
{
  @Output() startNewSearch = new EventEmitter()
}