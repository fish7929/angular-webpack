import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../template/dashboard.component.html',
  styleUrls: ['../style/dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  heroes: Hero[] = [];

  constructor(private heroService : HeroService){}

  ngOnInit(): void{
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes.slice(1, 5));
  }
}




