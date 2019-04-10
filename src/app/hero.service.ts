import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './fake-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('MessageService: eroi recuperati');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: eroe recuperato id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
}
