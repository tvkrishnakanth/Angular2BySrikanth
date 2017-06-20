// Observable Version
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    providers: [HeroService],
    styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {
    title = 'Unity';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/