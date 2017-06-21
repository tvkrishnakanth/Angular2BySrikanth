import { Component, Injectable,OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiService } from './api.service';

@Component({
    selector: "<api></api>",
    templateUrl: "./api.html",
    providers: [ApiService]
})
export class ApiComponent{
    tblItems: any;
    constructor(ApiService: ApiService) {
        ApiService.getData().subscribe(
            x => {
                console.log("VALUE RECEIVED: ", x);
                this.tblItems = x.items;
            },
            x => {
                console.log("ERROR: ", x);
            },
            () => {
                console.log("Completed");
            }
        );
    }

    //constructor(private oombaDataService: oombaDataService) { }
    //ngOnInit() { this.getData(); }
    //getData() {
    //    this.OombaDataService.getData()
    //        .subscribe(
    //        tblItems => this.tblItems = tblItems)
    //}

}