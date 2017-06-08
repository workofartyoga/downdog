import { Component } from '@angular/core';
import { Event, Router } from '@angular/router';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeAll';
import { collectAllEventsForNavigation, outputEvents } from './util/router-events-helper';

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Work of Art Yoga";

  constructor( router: Router ){
    outputEvents( router );
  }
}

