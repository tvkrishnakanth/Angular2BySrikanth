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
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.usersUrl = 'https://deloitteunitypocapimg.azure-api.net/v1/news?skip=0&take=250&firm=US';
    }
    ApiService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Ocp-Apim-Subscription-Key', '0751942c2c074f8497dafde22bfef40d'),
            headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL2RlbG9pdHRldW5pdHlwb2N1c2VyYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM2ZGE0NWYxLWRkMmMtNGQxZi1hZjEzLTVhYmU0NmI5OTkyMS8iLCJpYXQiOjE0OTgwNzIwMDcsIm5iZiI6MTQ5ODA3MjAwNywiZXhwIjoxNDk4MDc1OTA3LCJhY3IiOiIxIiwiYWlvIjoiWTJaZ1lCQitwcmg5M3ozSlEzLzFqT0svQmZYSzZSV2NLK0M1eEJ1dTRIeG8wY2tkcitVQiIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjYwLjI0My4xNDkuNDUiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InJ4dk4xSWJ0b1dqME9qczVjUjI0OFowTmpSa1dUUk54T1ZTaloyRnhXbFUiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.aiQGUpGFnutu86h-tqVsnjk9CfOhnbsIKGHv-21nQb0bM72uPpefkA93mV2xoiN1dL8PWEWmjXkHhFU_yn0Kj-EKk-Rpgq2oeUEmRZv92ooiC0hGWK9JQBfdnXsDPnsErmSo5tEG_CfmYcWglDFP6eanvXKlznLOa-f1SqRE-IQErJDUdUuntAWP5qgPu0EpHUU_5u-MlomOrwuwxnrkbQOfGG0qaXTcpMOyYEAHNznMT39DojxLYBLn5QO_W5yPesJjugNGiV3HtjZYAPzIdHrvC-tP2OBL0pYugn12PRnRB7vB4MJLrO1dHRalQDEmtbZmagkNMzUB_ZK4SwfFeQ');
    };
    ApiService.prototype.getData = function () {
        var headers = new http_2.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.usersUrl, {
            headers: headers
        })
            .map(this.extractData);
    };
    ApiService.prototype.extractData = function (res) {
        return res.json();
        //let body = res.json();
        //return body.data || { };
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map