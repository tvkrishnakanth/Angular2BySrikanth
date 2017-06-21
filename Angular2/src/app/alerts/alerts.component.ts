import { Component } from '@angular/core';
import { AlertService } from './alerts.service';
@Component({
    selector: "<alert></alert>",
    templateUrl: "./alerts.component.html",
    providers: [AlertService]
})
export class AlertComponent {
    tblItems: any;
    constructor(ApiService: AlertService) {
        ApiService.getData().subscribe(
            x => {
                console.log("VALUE RECEIVED: ", x);
                this.tblItems = x;
            },
            x => {
                console.log("ERROR: ", x);
            },
            () => {
                console.log("Completed");
            }
        );
    }
}