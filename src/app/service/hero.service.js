"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// import { HEROES } from '../classes/mock-heroes';
//require RxJS lib
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    /**
     * 构造函数
     * @param http  网络请求
     */
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; //URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /**
     * 获取英雄列表
     */
    HeroService.prototype.getHeroes = function () {
        // return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); //for demo purpose only
        return Promise.reject(error.message || error);
    };
    /**
     * 根据ID获取英雄
     * @param id 英雄的id号
     */
    HeroService.prototype.getHeroe = function (id) {
        // return this.getHeroes().then((heroes) => heroes.find(hero => hero.id == id));
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
     * 更新修改的英雄数据
     * @param hero 需要更新的英雄
     */
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise().then(function () { return hero; }).catch(this.handleError);
    };
    /**
     * 创建一个英雄对象
     * @param name 增加的英雄名称
     */
    HeroService.prototype.create = function (name) {
        return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    /**
     * 根据英雄ID删除当前选中的英雄
     * @param id 英雄ID
     */
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers }).toPromise()
            .then(function () { return null; }).catch(this.handleError);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
