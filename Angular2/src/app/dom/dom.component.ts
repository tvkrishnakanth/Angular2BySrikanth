import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
    selector: '<dom></dom>',
    templateUrl: "./dom.component.html"

})
export class DomComponent {
    userinfoHide: boolean;
    panelName: any;
    home: any;
    about: any;
    news: any;
    userinfoToggle = () => {
        this.userinfoHide = !this.userinfoHide;
    }

    toggle = (panelName: any) => {
        if (panelName === "home") {
            this.home = !this.home;
            this.about = false;
            this.news = false;
        } else if (panelName === "about") {
            this.about = !this.about;
            this.home = false;
            this.news = false;
        } else if (panelName === "news") {
            this.news = !this.news;
            this.home = false;
            this.about = false;
        }
    }
    panelItems = [
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
    selectedPanel = (accordionPanel: any) => {
        console.log(accordionPanel);
        accordionPanel.collapsable = !accordionPanel.collapsable;
    }
}
