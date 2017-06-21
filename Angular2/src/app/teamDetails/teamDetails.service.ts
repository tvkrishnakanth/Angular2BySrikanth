import { Injectable } from '@angular/core';

import { TeamDetails } from './teamDetails';
import { TeamData } from './teamDetails-data';

@Injectable()
export class TeamDetailService {
    getHeroes(): Promise<TeamDetails[]> {
        return Promise.resolve(TeamData);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly(): Promise<TeamDetails[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/