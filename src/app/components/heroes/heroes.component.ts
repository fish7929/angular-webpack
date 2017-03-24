import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../service/hero.service'; 

@Component({
  moduleId: 'heroes-component',
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit{ 
  constructor(
    private heroService: HeroService,
    private router: Router
  ){}
  public heroes : Hero[];
  public selectedHero: Hero;
  private getHeroes() : void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  public ngOnInit(): void{
    this.getHeroes();
  }

  public onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  public gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  public add(name: string): void {
    name = name.trim();
    if(!name) return;
    this.heroService.create(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  public delete(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
        this.heroes = this.heroes.filter( h => h !== hero);
        if(this.selectedHero === hero) this.selectedHero = null;
      });
  }
}




