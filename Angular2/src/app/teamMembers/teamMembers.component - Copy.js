"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var teamMembers_service_1 = require("./teamMembers.service");
var TeamMembersComponent = (function () {
    function TeamMembersComponent(teamService) {
        this.teamService = teamService;
        this.text = "Http";
        this.team = "Team Unity";
    }
    TeamMembersComponent.prototype.ngOnInit = function () { this.getTeams(); };
    TeamMembersComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    return TeamMembersComponent;
}());
TeamMembersComponent = __decorate([
    core_1.Component({
        selector: 'team-members',
        //template: `<h1 *ngFor='let name of names'>{{name.name}}</h1>`,
        templateUrl: "./teamMembers.html",
        providers: [teamMembers_service_1.TeamService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof teamMembers_service_1.TeamService !== "undefined" && teamMembers_service_1.TeamService) === "function" && _a || Object])
], TeamMembersComponent);
exports.TeamMembersComponent = TeamMembersComponent;
var _a;
//# sourceMappingURL=teamMembers.component - Copy.js.map