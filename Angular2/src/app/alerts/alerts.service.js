"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var AlertService = (function () {
    //constructor...
    function AlertService(http) {
        this.http = http;
        this.usersUrl = 'https://sdeloittenetalerts.deloitte.com/api/alerts/HomePage/smachineni';
    }
    AlertService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL3NkZWxvaXR0ZW5ldGFsZXJ0cy5kZWxvaXR0ZS5jb20vYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzZkYTQ1ZjEtZGQyYy00ZDFmLWFmMTMtNWFiZTQ2Yjk5OTIxLyIsImlhdCI6MTQ5ODA3MjAxMiwibmJmIjoxNDk4MDcyMDEyLCJleHAiOjE0OTgwNzU5MTIsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84REFBQUFNdVAzZXA1ZFNNRFVMaWxKWFBVU0NaMjd4MUhWSnJFVW9mdTJzcUlWeTZZPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjYwLjI0My4xNDkuNDUiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZySDFzcmtHYURoTWNwSGt4TDE0NkI0RkNMNnZFanZlLXpkVzNKc0hoN0EiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.i5r4WgKWLQACrnfcjTQrDOxs6bHaPJ4WJXKgRpzXwH7_DumQ3kZU0_ZQk7I4nhckSSN33NvmFROeI5zfl3-9y5u4fJOftbEEGXFNt-cP74iCljYpmpLVX_QwHD0CW29cLIIVgFZhC7YmhD85iGbpdG22K8Z9E6B7B9PlQEtfRQLj8qoRtgfH79_hhenjjwt3WJT3-vancCGgAL8iSX4ugJqmfs5LjtnnA2ipt1BMxt4w1k1vkSLJPd6dRFCXoKtDWmHkO4X1A82GFULNVvHovlcM4KxXqX1eAvN8qiUgZ0PuDGOSWShcQLDLOXbiQf7ljTWxOd4773SpeynKj-zcbA');
    };
    AlertService.prototype.getData = function () {
        var headers = new http_2.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.usersUrl, {
            headers: headers
        })
            .map(this.extractData);
    };
    AlertService.prototype.extractData = function (res) {
        return res.json();
        //let body = res.json();
        //return body.data || { };
    };
    AlertService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return AlertService;
}());
AlertService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AlertService);
exports.AlertService = AlertService;
//# sourceMappingURL=alerts.service.js.map