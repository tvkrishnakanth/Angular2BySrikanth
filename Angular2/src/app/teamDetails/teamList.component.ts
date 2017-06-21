// Observable Version
import { Component, OnInit } from '@angular/core';
import { TeamDetails } from './teamDetails';
import { TeamDetailService } from './teamDetails.service';
@Component({
    selector: 'team-list',
    templateUrl: './teamDetails.component.html',
    providers: [TeamDetailService],
    styles: ['.error {color:red;}']
})
export class TeamListComponent implements OnInit {
    title = 'Unity';
    heroes: TeamDetails[];
    selectedHero: TeamDetails;
    constructor(private TeamDetailService: TeamDetailService) { }

    getHeroes(): void {
        this.TeamDetailService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(TeamDetails: TeamDetails): void {
        this.selectedHero = TeamDetails;
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/