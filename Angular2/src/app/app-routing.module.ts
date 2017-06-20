import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './toh/hero-list.component';
import { HeaderComponent } from './header/header.component';
import { TeamMembersComponent } from './teamMembers/teamMembers.component';
import { DirectiveComponent } from './directive/directive.component';
import { DomComponent } from './dom/dom.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/directive',
        pathMatch: 'full'
    },
    {
        path: 'directive',
        component: DirectiveComponent 
    },
    {
        path: 'json',
        component: HeroListComponent
    },
    {
        path: 'team',
        component: TeamMembersComponent
    },
    {
        path: 'dom',
        component: DomComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/