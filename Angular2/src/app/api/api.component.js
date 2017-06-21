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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.usersUrl = 'https://deloitteunitypocapimg.azure-api.net/v1/news?skip=0&take=250&firm=US';
    }
    ApiService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Ocp-Apim-Subscription-Key', '0751942c2c074f8497dafde22bfef40d'),
            headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL2RlbG9pdHRldW5pdHlwb2N1c2VyYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzM2ZGE0NWYxLWRkMmMtNGQxZi1hZjEzLTVhYmU0NmI5OTkyMS8iLCJpYXQiOjE0OTgwNjA1MzUsIm5iZiI6MTQ5ODA2MDUzNSwiZXhwIjoxNDk4MDY0NDM1LCJhY3IiOiIxIiwiYWlvIjoiWTJaZ1lMamRsampscDl2Wkp3N1c3bDM2N1lhc1FabFhiRDl2L1pXOWQvdE1nNm1aekpNQSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjYwLjI0My4xNDkuNDUiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InJ4dk4xSWJ0b1dqME9qczVjUjI0OFowTmpSa1dUUk54T1ZTaloyRnhXbFUiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.kKCB0SPIBHW8hTjQlKsE5uHSJrD0jtSXHeyNc4lWM5PY9U0m2Alm0q97JdTQSGqEZFXssWdAkActePk4V4aOluBJ0nbzotAb7XKQkyisaoI9Oc4BuD1OF0vJm8Cn9yWEzaDyiQWXSEngWCoa3I21_lcBxYhycvimc3r9fXmmJ33IirtXOOdKmLMYoGo0zBtrpzd848Fizy4IA2xp92Nl_eU5UY_f8ccN-kaJ8Iic6-9DrTShYYEZK2GvSmRZbsR75_J2qx2k5720WTmYDUuT-h1QWhtszRMib-q5kXeC8mxmYv_QEuJ45dTJaG3lu3FViyN_9_cZmS0Ky7_lWewXSQ');
    };
    ApiService.prototype.getData = function () {
        var headers = new http_1.Headers();
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
var ApiComponent = (function () {
    function ApiComponent(ApiService) {
        var _this = this;
        ApiService.getData().subscribe(function (x) {
            console.log("VALUE RECEIVED: ", x);
            _this.tblItems = x.items;
        }, function (x) {
            console.log("ERROR: ", x);
        }, function () {
            console.log("Completed");
        });
    }
    return ApiComponent;
}());
ApiComponent = __decorate([
    core_1.Component({
        selector: "<api></api>",
        templateUrl: "./api.html",
        providers: [ApiService]
    }),
    __metadata("design:paramtypes", [ApiService])
], ApiComponent);
exports.ApiComponent = ApiComponent;
//# sourceMappingURL=api.component.js.map