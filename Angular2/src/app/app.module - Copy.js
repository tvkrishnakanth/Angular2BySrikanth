"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
//import { HeroData } from './hero-data';
var default_request_options_service_1 = require("./default-request-options.service");
var app_component_1 = require("./app.component");
var hero_list_component_1 = require("./toh/hero-list.component");
var header_component_1 = require("./header/header.component");
var teamMembers_component_1 = require("./teamMembers/teamMembers.component");
var routes = [
    {
        path: '',
        redirectTo: '/team',
        pathMatch: 'full'
    },
    {
        path: 'team',
        component: teamMembers_component_1.teamMembersComponent
    },
    {
        path: 'hero',
        component: hero_list_component_1.HeroListComponent
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            //InMemoryWebApiModule.forRoot(HeroData),
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [router_1.RouterModule],
        declarations: [
            app_component_1.AppComponent,
            teamMembers_component_1.teamMembersComponent,
            header_component_1.HeaderComponent,
            hero_list_component_1.HeroListComponent,
        ],
        providers: [default_request_options_service_1.requestOptionsProvider],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module - Copy.js.map