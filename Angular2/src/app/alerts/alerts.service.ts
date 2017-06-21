import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class AlertService {
    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL3NkZWxvaXR0ZW5ldGFsZXJ0cy5kZWxvaXR0ZS5jb20vYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzZkYTQ1ZjEtZGQyYy00ZDFmLWFmMTMtNWFiZTQ2Yjk5OTIxLyIsImlhdCI6MTQ5ODA3MjAxMiwibmJmIjoxNDk4MDcyMDEyLCJleHAiOjE0OTgwNzU5MTIsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84REFBQUFNdVAzZXA1ZFNNRFVMaWxKWFBVU0NaMjd4MUhWSnJFVW9mdTJzcUlWeTZZPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjYwLjI0My4xNDkuNDUiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZySDFzcmtHYURoTWNwSGt4TDE0NkI0RkNMNnZFanZlLXpkVzNKc0hoN0EiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.i5r4WgKWLQACrnfcjTQrDOxs6bHaPJ4WJXKgRpzXwH7_DumQ3kZU0_ZQk7I4nhckSSN33NvmFROeI5zfl3-9y5u4fJOftbEEGXFNt-cP74iCljYpmpLVX_QwHD0CW29cLIIVgFZhC7YmhD85iGbpdG22K8Z9E6B7B9PlQEtfRQLj8qoRtgfH79_hhenjjwt3WJT3-vancCGgAL8iSX4ugJqmfs5LjtnnA2ipt1BMxt4w1k1vkSLJPd6dRFCXoKtDWmHkO4X1A82GFULNVvHovlcM4KxXqX1eAvN8qiUgZ0PuDGOSWShcQLDLOXbiQf7ljTWxOd4773SpeynKj-zcbA')
    }
    //constructor...
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