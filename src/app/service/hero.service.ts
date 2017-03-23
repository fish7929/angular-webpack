
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from '../classes/hero';
// import { HEROES } from '../classes/mock-heroes';

//require RxJS lib
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  //URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  /**
   * 构造函数
   * @param http  网络请求
   */
  constructor(
    private http: Http
  ) {}
  /**
   * 获取英雄列表
   */
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  //for demo purpose only
    return Promise.reject(error.message || error);
  }
  /**
   * 根据ID获取英雄
   * @param id 英雄的id号
   */
  getHeroe(id: number): Promise<Hero> {
    // return this.getHeroes().then((heroes) => heroes.find(hero => hero.id == id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
  /**
   * 更新修改的英雄数据
   * @param hero 需要更新的英雄
   */
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise().then(() => hero).catch(this.handleError);
  }
  /**
   * 创建一个英雄对象
   * @param name 增加的英雄名称
   */
  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise().then(response => response.json().data as Hero).catch(this.handleError);
  }
  /**
   * 根据英雄ID删除当前选中的英雄
   * @param id 英雄ID
   */
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => null).catch(this.handleError);
  }

}