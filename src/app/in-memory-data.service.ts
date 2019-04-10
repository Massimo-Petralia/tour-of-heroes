import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
createDb() {
  const heroes = [
    {id: 1, name: 'star-lord', avatar: './assets/images/star-lord.jpg'},
    {id: 2, name: 'drax', avatar: './assets/images/drax.jpg'},
    {id: 3, name: 'gamora', avatar: './assets/images/gamora.jpg'},
    {id: 4, name: 'groot', avatar: './assets/images/groot.jpg'},
    {id: 5, name: 'rocket', avatar: './assets/images/rocket.jpg'},
    {id: 6, name: 'yondu', avatar: './assets/images/yondu.jpg'},
    {id: 7, name: 'nebula', avatar: './assets/images/nebula.jpg'},
    {id: 8, name: 'ego', avatar: './assets/images/ego.jpg'},
    {id: 9, name: 'mantis', avatar: './assets/images/mantis.jpg'},
    {id: 10, name: 'ayesha', avatar: './assets/images/ayesha.jpg'}
  ];
  return {heroes};
}
  constructor() { }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
