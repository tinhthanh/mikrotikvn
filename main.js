(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ngocg\OneDrive\Documents\GitHub\ms-identity-javascript-angular-spa-main\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-browser */ "Czdx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var HomeComponent = /** @class */ (function () {
    function HomeComponent(spinner, authService, msalBroadcastService) {
        this.spinner = spinner;
        this.authService = authService;
        this.msalBroadcastService = msalBroadcastService;
        this.loginDisplay = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.msalBroadcastService.msalSubject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (msg) { return msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__["EventType"].LOGIN_SUCCESS; }))
            .subscribe(function (result) {
            console.log(result);
            window.location.href = "http://" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ip + "/login?dst=https://google.com&username=user1&password=user1";
            var payload = result.payload;
            _this.authService.instance.setActiveAccount(payload.account);
        });
        this.setLoginDisplay();
    };
    HomeComponent.prototype.setLoginDisplay = function () {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalBroadcastService"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 1, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 3, 0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginDisplay);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginDisplay);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalService"] }, { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalBroadcastService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    ip: "192.168.1.1"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-browser */ "Czdx");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");












function AppComponent_router_outlet_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(msalGuardConfig, authService, msalBroadcastService, spinner) {
        this.msalGuardConfig = msalGuardConfig;
        this.authService = authService;
        this.msalBroadcastService = msalBroadcastService;
        this.spinner = spinner;
        this.title = 'Mikrotik Viet  Nam';
        this.isIframe = false;
        this.loginDisplay = false;
        this._destroying$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isModal = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isIframe = window !== window.parent && !window.opener;
        this.spinner.show();
        this.msalBroadcastService.inProgress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (status) { return status === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__["InteractionStatus"].None; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroying$))
            .subscribe(function () {
            _this.setLoginDisplay();
        });
    };
    AppComponent.prototype.setLoginDisplay = function () {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
        if (!this.loginDisplay) {
            this.login();
        }
        else {
            window.location.href = window.location.href = "http://" + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ip + "/login?dst=https://google.com&username=user1&password=user1";
        }
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Popup) {
            if (this.msalGuardConfig.authRequest) {
                this.authService.loginPopup(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.msalGuardConfig.authRequest))
                    .subscribe(function (response) {
                    _this.authService.instance.setActiveAccount(response.account);
                });
            }
            else {
                this.authService.loginPopup()
                    .subscribe(function (response) {
                    _this.authService.instance.setActiveAccount(response.account);
                });
            }
        }
        else {
            if (this.msalGuardConfig.authRequest) {
                this.authService.loginRedirect(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.msalGuardConfig.authRequest));
            }
            else {
                this.authService.loginRedirect();
            }
        }
    };
    AppComponent.prototype.logout = function () {
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Popup) {
            this.authService.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        }
        else {
            this.authService.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    };
    AppComponent.prototype.close = function () {
        this.isModal = false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._destroying$.next(undefined);
        this._destroying$.complete();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_GUARD_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalBroadcastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "square-jelly-box", 3, "fullScreen"], [2, "color", "white"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-spinner", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isIframe);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], styles: [".toolbar-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  a.title[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n  \r\n  .modal[_ngcontent-%COMP%] {\r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgb(0 0 0 / 65%);\r\n}\r\n  \r\n  \r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n}\r\n  \r\n  \r\n  \r\n  #caption[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  color: #ccc;\r\n  padding: 10px 0;\r\n  height: 150px;\r\n}\r\n  \r\n  \r\n  \r\n  .modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%] {  \r\n  -webkit-animation-name: zoom;\r\n  -webkit-animation-duration: 0.6s;\r\n  animation-name: zoom;\r\n  animation-duration: 0.6s;\r\n}\r\n  \r\n  @keyframes zoom {\r\n  from {transform:scale(0)} \r\n  to {transform:scale(1)}\r\n}\r\n  \r\n  \r\n  \r\n  .close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  color: #000000;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  transition: 0.3s;\r\n}\r\n  \r\n  .close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n  \r\n  \r\n  \r\n  @media only screen and (max-width: 700px){\r\n  .modal-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n  \r\n  .container-popup[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: white;\r\n    height: 100px;\r\n    max-width: 300px;\r\n    align-content: center;\r\n    margin: 0 auto;\r\n    border-radius: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFRjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxrQ0FBa0M7QUFDcEM7O0VBRUEsMEJBQTBCOztFQUMxQjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7RUFFQSwyQkFBMkI7O0VBQzNCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7RUFFQSxrQkFBa0I7O0VBQ2xCO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztFQU9BO0VBQ0UsTUFBTSxrQkFBa0I7RUFDeEIsSUFBSSxrQkFBa0I7QUFDeEI7O0VBRUEscUJBQXFCOztFQUNyQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7RUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0VBRUEsd0NBQXdDOztFQUN4QztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYS50aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gIHotaW5kZXg6IDE7IFxyXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA2NSUpO1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKi9cclxuI2NhcHRpb24ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7ICBcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb20ge1xyXG4gIGZyb20gey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApfSBcclxuICB0byB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSl9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgZnJvbSB7dHJhbnNmb3JtOnNjYWxlKDApfSBcclxuICB0byB7dHJhbnNmb3JtOnNjYWxlKDEpfVxyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjYmJiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4uY29udGFpbmVyLXBvcHVwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufSJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_GUARD_CONFIG"]]
            }] }, { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] }, { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalBroadcastService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http) {
        this.http = http;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.http.get(GRAPH_ENDPOINT)
            .subscribe(function (profile) {
            _this.profile = profile;
        });
    };
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 17, vars: 4, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Id: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.givenName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.surname, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.userPrincipalName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.id, "");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
    return ProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: loggerCallback, MSALInstanceFactory, MSALInterceptorConfigFactory, MSALGuardConfigFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerCallback", function() { return loggerCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInstanceFactory", function() { return MSALInstanceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInterceptorConfigFactory", function() { return MSALInterceptorConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALGuardConfigFactory", function() { return MSALGuardConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @azure/msal-browser */ "Czdx");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "JqCM");















var isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
function loggerCallback(logLevel, message) {
    console.log(message);
}
function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__["PublicClientApplication"]({
        auth: {
            clientId: 'ec01dd8b-f7f6-4234-a3dc-22e04f184139',
            authority: 'https://login.microsoftonline.com/125dc7b7-c709-4cb3-b084-eb2c0c21381a',
            redirectUri: 'https://assets.vetgo.vn/mikrotikvn/'
        },
        cache: {
            cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserCacheLocation"].LocalStorage,
            storeAuthStateInCookie: isIE,
        },
        system: {
            loggerOptions: {
                loggerCallback: loggerCallback,
                logLevel: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__["LogLevel"].Info,
                piiLoggingEnabled: false
            }
        }
    });
}
function MSALInterceptorConfigFactory() {
    var protectedResourceMap = new Map();
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__["InteractionType"].Redirect,
        protectedResourceMap: protectedResourceMap
    };
}
function MSALGuardConfigFactory() {
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_11__["InteractionType"].Redirect,
        authRequest: {
            scopes: ['user.read']
        }
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalRedirectComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalInterceptor"],
                multi: true
            },
            {
                provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MSAL_INSTANCE"],
                useFactory: MSALInstanceFactory
            },
            {
                provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MSAL_GUARD_CONFIG"],
                useFactory: MSALGuardConfigFactory
            },
            {
                provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MSAL_INTERCEPTOR_CONFIG"],
                useFactory: MSALInterceptorConfigFactory
            },
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalGuard"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalBroadcastService"]
        ], imports: [[
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]], imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
                ],
                imports: [
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalInterceptor"],
                        multi: true
                    },
                    {
                        provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MSAL_INSTANCE"],
                        useFactory: MSALInstanceFactory
                    },
                    {
                        provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MSAL_GUARD_CONFIG"],
                        useFactory: MSALGuardConfigFactory
                    },
                    {
                        provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MSAL_INTERCEPTOR_CONFIG"],
                        useFactory: MSALInterceptorConfigFactory
                    },
                    _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalService"],
                    _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalGuard"],
                    _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalBroadcastService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__["MsalRedirectComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");







var routes = [
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        canActivate: [
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalGuard"]
        ]
    },
    {
        // Needed for hash routing
        path: 'code',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        // Needed for Error routing
        path: 'error',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var isIframe = window !== window.parent && !window.opener;
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    // Don't perform initial navigation in iframes
                    initialNavigation: !isIframe ? 'enabled' : 'disabled'
                })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        // Don't perform initial navigation in iframes
                        initialNavigation: !isIframe ? 'enabled' : 'disabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map