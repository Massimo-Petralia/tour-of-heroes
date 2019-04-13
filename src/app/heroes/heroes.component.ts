import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {HEROES} from '../fake-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  text: string;
  heroes = HEROES;
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  togglePanel() {
    var sidepanel = document.getElementById('mySidepanel');
    var button = document.getElementById('OpenCloseButton');
    if (sidepanel.style.width === '0px') {
        sidepanel.style.width = '180px';
        button.className = 'fas fa-angle-left';
    } else {
        sidepanel.style.width = '0px';
        button.className = 'fas fa-angle-right';

    }
}

}
