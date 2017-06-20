"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_list_component_1 = require("./toh/hero-list.component");
var teamMembers_component_1 = require("./teamMembers/teamMembers.component");
var directive_component_1 = require("./directive/directive.component");
var dom_component_1 = require("./dom/dom.component");
var routes = [
    {
        path: '',
        redirectTo: '/directive',
        pathMatch: 'full'
    },
    {
        path: 'directive',
        component: directive_component_1.DirectiveComponent
    },
    {
        path: 'json',
        component: hero_list_component_1.HeroListComponent
    },
    {
        path: 'team',
        component: teamMembers_component_1.TeamMembersComponent
    },
    {
        path: 'dom',
        component: dom_component_1.DomComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app-routing.module.js.map