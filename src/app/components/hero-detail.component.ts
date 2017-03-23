import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../classes/hero';
import { HeroService } from '../service/hero.service';

import "rxjs/add/operator/switchMap";

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: '../template/hero-detail.component.html',
  styleUrls: ['../style/hero-detail.component.css']
})  
export class HeroDetailComponent implements OnInit  { 
  @Input()
  hero: Hero;
  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute,
    private location : Location
  ){}

  ngOnInit() : void {
    this.route.params.switchMap((params: Params) => this.heroService.getHeroe(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.update(this.hero).then((hero) => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}




