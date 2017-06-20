"use strict";
var HeroData = (function () {
    function HeroData() {
    }
    HeroData.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Krishna' },
            { id: 2, name: 'Srikanth' },
            { id: 3, name: 'Rakesh' },
            { id: 4, name: 'Naresh' }
        ];
        return { heroes: heroes };
    };
    return HeroData;
}());
exports.HeroData = HeroData;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-data.js.map