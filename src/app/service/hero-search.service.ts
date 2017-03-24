
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Hero } from '../classes/hero';
@Injectable()
export class HeroSearchService {
  /**
   * 构造函数
   * @param http  网络请求
   */
  constructor(
    private http: Http
  ) {}
  private heroesUrl = 'api/heroes';  //URL to web api
  /**
   * 根据英雄名称搜索
   * @param term 查询的字符串
   */
  public search(term: string): Observable<Hero[]> {
    return this.http.get(this.heroesUrl+`/?name=${term}`)
      .map(response => response.json().data as Hero[]);
  }  
  
}