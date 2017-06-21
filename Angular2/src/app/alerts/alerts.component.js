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
var AlertService = (function () {
    function AlertService(http) {
        this.http = http;
        this.usersUrl = 'https://sdeloittenetalerts.deloitte.com/api/alerts/HomePage/smachineni';
    }
    AlertService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsImtpZCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyJ9.eyJhdWQiOiJodHRwczovL3NkZWxvaXR0ZW5ldGFsZXJ0cy5kZWxvaXR0ZS5jb20vYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzZkYTQ1ZjEtZGQyYy00ZDFmLWFmMTMtNWFiZTQ2Yjk5OTIxLyIsImlhdCI6MTQ5ODA0NjU1OSwibmJmIjoxNDk4MDQ2NTU5LCJleHAiOjE0OTgwNTA0NTksImFjciI6IjEiLCJhaW8iOiJBU1FBMi84REFBQUFnL0E1M3dGT3hpelZvSTFtdmo5SThzM21HVEJXeDdOcjRTRFZYNEY2ek5ZPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1YTE2MGIxNy05YjgzLTRhZGYtYjgzZC00YTMwNTQ5MDFkMjEiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6Ik1hY2hpbmVuaSIsImdpdmVuX25hbWUiOiJTcmlrYW50aCIsImlwYWRkciI6IjE2Ny4yMTkuNDguNTAiLCJuYW1lIjoiTWFjaGluZW5pLCBTcmlrYW50aCAoVVMgLSBIeWRlcmFiYWQpIiwib2lkIjoiN2E0ZGUyYTktZDEwZS00OTRlLTliMDktZjQzYzcxM2JhY2U5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIzODQ0NzI3Ni0xMDQwODYxOTIzLTE4NTA5NTI3ODgtMTkxNzk2MSIsInBsYXRmIjoiMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZySDFzcmtHYURoTWNwSGt4TDE0NkI0RkNMNnZFanZlLXpkVzNKc0hoN0EiLCJ0aWQiOiIzNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEiLCJ1bmlxdWVfbmFtZSI6InNtYWNoaW5lbmlAZGVsb2l0dGUuY29tIiwidXBuIjoic21hY2hpbmVuaUBkZWxvaXR0ZS5jb20iLCJ2ZXIiOiIxLjAifQ.PxAKHsZDmxRpWr8zu4b8b2wdpwgfFrTYLSteaXUuXF1pJfTuFo64xw7HunTQncpfWEV6SenP5Gq2qIO0wmwxTRhdOhUXP0AwMur8HYIfE5GAHjbUxBHuga8lZrHXfG-Fkv1kYrNjiYw33jbjxzopuvLVhW4226AeuNlXcqszd4lG9_X_CS0N9jkmcP5WoDGt_78M9C0pXNV96XfqHXe38uo9fpA7XJJQW81dDk1S8jfn6ZdzSsqRZzCmro-DpR0LYWmJ65cYMFcuv_ZYjm78ES99shK4AAzPGCSUUiTA-ELPqFI9NRqKIOE-89X1MH5mCuz3Z4yd6cS02Hn5Z7Nttg');
    };
    AlertService.prototype.getData = function () {
        var headers = new http_1.Headers();
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
var AlertComponent = (function () {
    function AlertComponent(ApiService) {
        var _this = this;
        ApiService.getData().subscribe(function (x) {
            console.log("VALUE RECEIVED: ", x);
            _this.tblItems = x;
        }, function (x) {
            console.log("ERROR: ", x);
        }, function () {
            console.log("Completed");
        });
    }
    return AlertComponent;
}());
AlertComponent = __decorate([
    core_1.Component({
        selector: "<alert></alert>",
        templateUrl: "./alerts.component.html",
        providers: [AlertService]
    }),
    __metadata("design:paramtypes", [AlertService])
], AlertComponent);
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alerts.component.js.map