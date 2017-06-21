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
var teamList_component_1 = require("./teamDetails/teamList.component");
var teamDetails_component_1 = require("./teamDetails/teamDetails.component");
//import { HeroDetailComponent } from './toh/hero-detail.component';
//import { HeaderComponent } from './header/header.component';
var teamMembers_component_1 = require("./teamMembers/teamMembers.component");
var directive_component_1 = require("./directive/directive.component");
var app_routing_module_1 = require("./app-routing.module");
var dom_component_1 = require("./dom/dom.component");
var api_component_1 = require("./api/api.component");
var alerts_component_1 = require("./alerts/alerts.component");
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
            app_routing_module_1.AppRoutingModule
        ],
        exports: [router_1.RouterModule],
        declarations: [
            app_component_1.AppComponent,
            directive_component_1.DirectiveComponent,
            teamMembers_component_1.TeamMembersComponent,
            teamDetails_component_1.TeamDetailComponent,
            teamList_component_1.TeamListComponent,
            dom_component_1.DomComponent,
            api_component_1.ApiComponent,
            alerts_component_1.AlertComponent
        ],
        providers: [default_request_options_service_1.requestOptionsProvider],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map