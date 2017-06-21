import { Component, Injectable,OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { API } from './api';
@Injectable()
export class ApiService {
    createAuthorizationHeader(headers: Headers) {
        headers.append('Ocp-Apim-Subscription-Key', '0751942c2c074f8497dafde22bfef40d'),
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL2RlbG9pdHRldW5pdHlwb2N1c2VyYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM2ZGE0NWYxLWRkMmMtNGQxZi1hZjEzLTVhYmU0NmI5OTkyMS8iLCJpYXQiOjE0OTgwMzk1MjEsIm5iZiI6MTQ5ODAzOTUyMSwiZXhwIjoxNDk4MDQzNDIxLCJhY3IiOiIxIiwiYWlvIjoiWTJaZ1lFaXdlblNMb2Fka1I4UmtWKzBFcVpOSDdYbE9mWGpxWGE4UzlXdHBFdGRxdDc4QSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjE2Ny4yMTkuNDguNTAiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InJ4dk4xSWJ0b1dqME9qczVjUjI0OFowTmpSa1dUUk54T1ZTaloyRnhXbFUiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.aYXKyAX3jLdjIJpIJGCRzTUJn-DCQH7cba14eTIfu6aI-rLLyq_15d1kEn6LY4_60gyhky2FD0AUE-y55cBIQvpl1aTU1AWkaY-0N38HWIqwvSFLiEeWByY8hltwvJ_WmUNaD-COElDG1vWx51s6n7nfUvmW8038UgVbPQs3x3xmMiRx1VLYAevuwaoobdqTbq7MUDdX_BJ1MBtJyvzc1arvnMvx4fVIXhVL4b-cGXuvrewq_HIuSGtcrk_RqMmI_08R_UxVtza8X8oGd8Sf3L-C_DGs12R7gmvZh8bn1liDF7W9HNHDsJaxmL02We6v7AWYJddJ0rxYglnXTErSgQ')
    }

    constructor(private http: Http) {
    }
    private usersUrl = 'https://deloitteunitypocapimg.azure-api.net/v1/news?skip=0&take=250&firm=US';
    getData() {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.usersUrl, {
            headers: headers
        })
            .map(this.extractData)
    }

    private extractData(res: Response) {
        return res.json();
        //let body = res.json();
        //return body.data || { };
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
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