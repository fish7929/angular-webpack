
//require core module
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//require submodule
import { AppComponent }  from '../components/home/app.component';
import { HeroesComponent }  from '../components/heroes/heroes.component';
import { HeroDetailComponent }  from '../components/heroDetail/hero-detail.component';
import { DashboardComponent }  from '../components/dashboard/dashboard.component';
import { HeroSearchComponent }  from '../components/heroSearch/hero-search.component';
//require service
import { HeroService }  from '../service/hero.service';
//require router
import { AppRouterModule } from "../router/app-router.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../service/in-memory-data.service';

import '../../styles/styles.scss';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRouterModule 
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent ,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
