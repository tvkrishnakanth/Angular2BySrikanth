import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

//import { HeroData } from './hero-data';
import { requestOptionsProvider } from './default-request-options.service';

import { AppComponent } from './app.component';
import { TeamListComponent } from './teamDetails/teamList.component';
import { TeamDetailComponent } from './teamDetails/teamDetails.component';
//import { HeroDetailComponent } from './toh/hero-detail.component';
//import { HeaderComponent } from './header/header.component';
import { TeamMembersComponent } from './teamMembers/teamMembers.component';
import { DirectiveComponent } from './directive/directive.component';
import { AppRoutingModule } from './app-routing.module';
import { DomComponent } from './dom/dom.component';
import { ApiComponent } from './api/api.component';
import { AlertComponent } from './alerts/alerts.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        //InMemoryWebApiModule.forRoot(HeroData),
        AppRoutingModule
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        DirectiveComponent,
        TeamMembersComponent,
        TeamDetailComponent,
        TeamListComponent,
        DomComponent,
        ApiComponent,
        AlertComponent 
    ],
    providers: [ requestOptionsProvider ],
    bootstrap: [AppComponent]
})
export class AppModule { }