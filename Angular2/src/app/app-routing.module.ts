import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamListComponent } from './teamDetails/teamList.component';
import { TeamMembersComponent } from './teamMembers/teamMembers.component';
import { DirectiveComponent } from './directive/directive.component';
import { DomComponent } from './dom/dom.component';
import { ApiComponent } from './api/api.component';
import { AlertComponent } from './alerts/alerts.component';
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
        path: 'teamDetails',
        component: TeamListComponent
    },
    {
        path: 'team',
        component: TeamMembersComponent
    },
    {
        path: 'dom',
        component: DomComponent
    },
    {
        path: 'api',
        component: ApiComponent
    },
    {
        path: 'alert',
        component: AlertComponent
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