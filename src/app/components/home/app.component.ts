import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../service/hero.service'; 

@Component({
  moduleId: 'app-component',
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Tour of Heroes';
}




