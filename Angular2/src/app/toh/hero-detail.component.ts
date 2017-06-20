import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="myname">
      <h2>{{myname.name}} details!</h2>
      <div>
        <label>id: </label>{{myname.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="myname.name" class="form-control"/>
      </div>
        <div class="jsonimg">
        <img src="{{myname.imageUrl}}"/>
        </div>
    </div>
  `
})
export class HeroDetailComponent {
    @Input() myname: Hero;
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/