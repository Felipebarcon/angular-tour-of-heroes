import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/interfaces/hero';
import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  constructor(private HeroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
