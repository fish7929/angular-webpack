import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../classes/hero';
import { HeroSearchService } from '../../service/hero-search.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  moduleId: 'hero-search-component',
  selector: 'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})  
export class HeroSearchComponent implements OnInit  { 
  
  constructor(
    private heroSearchService : HeroSearchService,
    private router: Router
  ){}
  public heroes: Observable<Hero []>;
  private searchTerms = new Subject<string>();
  // Push a search term into the observable stream.
  public search(term: string): void {
      this.searchTerms.next(term);
  }
  public ngOnInit() : void {
      this.heroes = this.searchTerms
        .debounceTime(300)  // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged() // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Hero[]>([]))
        .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  public gotoDetail(hero: Hero): void {
      let link = ['/detail', hero.id];
      this.router.navigate(link);
  }

}



