import { Component, Injectable,OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { API } from './api';
@Injectable()
export class ApiService {
    createAuthorizationHeader(headers: Headers) {
        headers.append('Ocp-Apim-Subscription-Key', '0751942c2c074f8497dafde22bfef40d'),
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL2RlbG9pdHRldW5pdHlwb2N1c2VyYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM2ZGE0NWYxLWRkMmMtNGQxZi1hZjEzLTVhYmU0NmI5OTkyMS8iLCJpYXQiOjE0OTgwNjA1MzUsIm5iZiI6MTQ5ODA2MDUzNSwiZXhwIjoxNDk4MDY0NDM1LCJhY3IiOiIxIiwiYWlvIjoiWTJaZ1lMamRsampscDl2Wkp3N1c3bDM2N1lhc1FabFhiRDl2L1pXOWQvdE1nNm1aekpNQSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjYwLjI0My4xNDkuNDUiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InJ4dk4xSWJ0b1dqME9qczVjUjI0OFowTmpSa1dUUk54T1ZTaloyRnhXbFUiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.kKCB0SPIBHW8hTjQlKsE5uHSJrD0jtSXHeyNc4lWM5PY9U0m2Alm0q97JdTQSGqEZFXssWdAkActePk4V4aOluBJ0nbzotAb7XKQkyisaoI9Oc4BuD1OF0vJm8Cn9yWEzaDyiQWXSEngWCoa3I21_lcBxYhycvimc3r9fXmmJ33IirtXOOdKmLMYoGo0zBtrpzd848Fizy4IA2xp92Nl_eU5UY_f8ccN-kaJ8Iic6-9DrTShYYEZK2GvSmRZbsR75_J2qx2k5720WTmYDUuT-h1QWhtszRMib-q5kXeC8mxmYv_QEuJ45dTJaG3lu3FViyN_9_cZmS0Ky7_lWewXSQ')
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