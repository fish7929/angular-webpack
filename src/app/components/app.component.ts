import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../service/hero.service'; 

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../template/app.component.html',
  styleUrls: ['../style/app.component.css']
})
export class AppComponent { 
  title = 'Tour of Heroes';
}




