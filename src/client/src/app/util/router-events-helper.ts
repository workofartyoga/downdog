
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { NavigationError, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export function isStart(e : Event ): boolean {
  return e instanceof NavigationStart;
}

export function isEnd( e: Event ): boolean {
  return e instanceof NavigationEnd ||
    e instanceof NavigationCancel ||
    e instanceof NavigationError;
}

export function collectAllEventsForNavigation( obs: Observable<Event> ): Observable< Event[] > {
  let observer: Observer< Event[] >;
  const events: Event[] = [];
  const sub = obs.subscribe( e => {
    events.push( e );
    if( isEnd( e ) ) {
      observer.next(events);
      observer.complete();
    }
  });
  return new Observable<Event[]>( o => observer = o);
}

export function outputEvents( router: Router ): void {
  router.events
  // group all events by id and return Observable< Observable<Event> >
    .groupBy( (e: any) => e.id )

    // reduce events and return Observable< Observable<Event[]> >
    .map( collectAllEventsForNavigation )
    // Returns Observable<Event[]>
    .mergeAll()
    .subscribe( (es:any []) => {
      console.log( "Navigation Events", es)
    });

}
