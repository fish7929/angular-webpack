import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  moduleId: 'dashboard-component',
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  constructor(private heroService : HeroService){}
  public heroes: Hero[] = [];
  public ngOnInit(): void{
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes.slice(1, 5));
  }
}




