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
var teamDetails_1 = require("./teamDetails");
var TeamDetailComponent = (function () {
    function TeamDetailComponent() {
    }
    return TeamDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", teamDetails_1.TeamDetails)
], TeamDetailComponent.prototype, "myname", void 0);
TeamDetailComponent = __decorate([
    core_1.Component({
        selector: 'team-detail',
        template: "\n    <div *ngIf=\"myname\">\n      <h2>{{myname.name}} details!</h2>\n      <div>\n        <label>id: </label>{{myname.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"myname.name\" class=\"form-control\"/>\n      </div>\n        <div class=\"jsonimg\">\n        <img src=\"{{myname.imageUrl}}\"/>\n        </div>\n    </div>\n  "
    })
], TeamDetailComponent);
exports.TeamDetailComponent = TeamDetailComponent;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=teamDetails.component.js.map