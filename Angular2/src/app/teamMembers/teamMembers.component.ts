import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './teamMembers.service';
@Component({
    selector: 'team-members',
    //template: `<h1 *ngFor='let name of names'>{{name.name}}</h1>`,
    templateUrl: "./teamMembers.html",
    providers: [TeamService]
   // styleUrls: ["./teamMembers.css"]
})
export class TeamMembersComponent implements OnInit {
    text = "Http";
    team = "Team Unity";
    teams : Team[];
    constructor(private teamService: TeamService) { }
    ngOnInit() { this.getTeams(); }
    getTeams() {
        this.teamService.getTeams()
            .subscribe(
            teams => this.teams = teams)
    }
    
}
