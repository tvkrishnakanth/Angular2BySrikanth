// Observable Version
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Team } from './team';

@Injectable()
export class TeamService {
    private teamUrl = './app/json/team.json';  // URL to web API

    constructor(private http: Http) { }

    getTeams(): Observable<Team[]> {
        return this.http.get(this.teamUrl)
            .map(this.gatData);
    }

    private gatData(res: Response) {
        let body = res.json();
        return body.records || {};
    }

   
}

