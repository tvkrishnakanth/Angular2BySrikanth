"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DomComponent = (function () {
    function DomComponent() {
        var _this = this;
        this.userinfoToggle = function () {
            _this.userinfoHide = !_this.userinfoHide;
        };
        this.toggle = function (panelName) {
            if (panelName === "home") {
                _this.home = !_this.home;
                _this.about = false;
                _this.news = false;
            }
            else if (panelName === "about") {
                _this.about = !_this.about;
                _this.home = false;
                _this.news = false;
            }
            else if (panelName === "news") {
                _this.news = !_this.news;
                _this.home = false;
                _this.about = false;
            }
        };
        this.panelItems = [
            {
                id: 1,
                name: "Heading1",
                content: "Heading Body1"
            },
            {
                id: 2,
                name: "Heading2",
                content: "Heading Body2"
            },
            {
                id: 3,
                name: "Heading3",
                content: "Heading Body3"
            }
        ];
        this.selectedPanel = function (accordionPanel) {
            console.log(accordionPanel);
            accordionPanel.collapsable = !accordionPanel.collapsable;
        };
    }
    return DomComponent;
}());
DomComponent = __decorate([
    core_1.Component({
        selector: '<dom></dom>',
        templateUrl: "./dom.component.html"
    })
], DomComponent);
exports.DomComponent = DomComponent;
//# sourceMappingURL=dom.component.js.map