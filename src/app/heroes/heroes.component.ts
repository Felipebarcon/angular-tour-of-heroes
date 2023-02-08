import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/interfaces/hero';
import { HeroService } from '../shared/services/hero.service';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private HeroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
