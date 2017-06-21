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
// Observable Version
var core_1 = require("@angular/core");
var teamDetails_service_1 = require("./teamDetails.service");
var TeamListComponent = (function () {
    function TeamListComponent(TeamDetailService) {
        this.TeamDetailService = TeamDetailService;
        this.title = 'Unity';
    }
    TeamListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.TeamDetailService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    TeamListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    TeamListComponent.prototype.onSelect = function (TeamDetails) {
        this.selectedHero = TeamDetails;
    };
    return TeamListComponent;
}());
TeamListComponent = __decorate([
    core_1.Component({
        selector: 'team-list',
        templateUrl: './teamDetails.component.html',
        providers: [teamDetails_service_1.TeamDetailService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [teamDetails_service_1.TeamDetailService])
], TeamListComponent);
exports.TeamListComponent = TeamListComponent;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=teamList.component.js.map