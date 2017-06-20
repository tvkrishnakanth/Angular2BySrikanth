import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
    selector: '<dom></dom>',
    templateUrl: "./dom.component.html"

})
export class DomComponent {
    //toggle: any;
    //hideElement = true;
    //hideElement1 = false;
    userinfoToggle = () => {
        this.userinfoHide = !this.userinfoHide;
        //this.toggle = !this.toggle;
        //this.hideElement = !this.hideElement;
        //this.hideElement1 = !this.hideElement1;
    }
}
