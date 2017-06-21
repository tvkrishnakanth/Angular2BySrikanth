﻿import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AlertService {
    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL3NkZWxvaXR0ZW5ldGFsZXJ0cy5kZWxvaXR0ZS5jb20vYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzZkYTQ1ZjEtZGQyYy00ZDFmLWFmMTMtNWFiZTQ2Yjk5OTIxLyIsImlhdCI6MTQ5ODA0NjU1OSwibmJmIjoxNDk4MDQ2NTU5LCJleHAiOjE0OTgwNTA0NTksImFjciI6IjEiLCJhaW8iOiJBU1FBMi84REFBQUFnL0E1M3dGT3hpelZvSTFtdmo5SThzM21HVEJXeDdOcjRTRFZYNEY2ek5ZPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjE2Ny4yMTkuNDguNTAiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZySDFzcmtHYURoTWNwSGt4TDE0NkI0RkNMNnZFanZlLXpkVzNKc0hoN0EiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.PxAKHsZDmxRpWr8zu4b8b2wdpwgfFrTYLSteaXUuXF1pJfTuFo64xw7HunTQncpfWEV6SenP5Gq2qIO0wmwxTRhdOhUXP0AwMur8HYIfE5GAHjbUxBHuga8lZrHXfG-Fkv1kYrNjiYw33jbjxzopuvLVhW4226AeuNlXcqszd4lG9_X_CS0N9jkmcP5WoDGt_78M9C0pXNV96XfqHXe38uo9fpA7XJJQW81dDk1S8jfn6ZdzSsqRZzCmro-DpR0LYWmJ65cYMFcuv_ZYjm78ES99shK4AAzPGCSUUiTA-ELPqFI9NRqKIOE-89X1MH5mCuz3Z4yd6cS02Hn5Z7Nttg')
    }

    constructor(private http: Http) {
    }
    private usersUrl = 'https://sdeloittenetalerts.deloitte.com/api/alerts/HomePage/smachineni';
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