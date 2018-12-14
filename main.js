(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <app-header></app-header>\n    <!-- <app-home></app-home> -->\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  min-height: 100vh;\n  overflow: hidden;\n  display: block;\n  position: relative;\n  padding-bottom: 100px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helps_helps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helps/helps.component */ "./src/app/helps/helps.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'helps', component: _helps_helps_component__WEBPACK_IMPORTED_MODULE_8__["HelpsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _helps_helps_component__WEBPACK_IMPORTED_MODULE_8__["HelpsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5 text-center\">\n  <div class=\"row\">\n    <div class=\"col-lg-5 col-md-5\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Thông tin tác giả\n          </div>\n          <div class=\"card-body\">\n            <img src=\"../../assets/admin.jpg\" class=\"card-img\" style=\"width:200px\">\n            <h4 class=\"card-title\"><span class=\"text-muted\">Họ Tên:</span> Nguyễn Đăng Khoa</h4>\n            <p class=\"card-text\"><span class=\"text-muted\">MSSV:</span> 114001252</p>\n            <p class=\"card-text\"><span class=\"text-muted\">Lớp: </span>14SE111</p>\n            <p class=\"card-text\"><span class=\"text-muted\">Ngày Sinh: </span>06/09/1996</p>\n            <p class=\"card-text\"><span class=\"text-muted\">SĐT: </span>0966609019</p>\n          </div>\n          <div class=\"card-footer text-muted\">\n            Email: <a href=\"mailto:dangkhoasn@gmail.com\">dangkhoasn@gmail.com</a>\n          </div>\n        </div>\n    </div>\n    <div class=\"col-lg-7 col-md-7\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Các công nghệ tạo nên trang Web này\n        </div>\n        <div class=\"card-body\">\n            <div class=\"card-columns\">\n                <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"../../assets/angular.png\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Angular 6</h4>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"../../assets/flask.jpg\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Flask</h4>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"../../assets/gcloud.png\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Gcloud</h4>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"../../assets/keras.jpg\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Keras</h4>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"../../assets/tf.jpg\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">Tensorflow</h4>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <img class=\"card-img-top\" src=\"../../assets/opencv.png\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">OpenCV</h4>\n                  </div>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\n  max-height: 150px;\n  max-width: 150px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--FOOTER-->\n<div class=\"footer text-center\">\n    <p class=\"text-white\">&copy; Nghiên cứu khoa học 2018 - CNTT - Đại Học Lạc Hồng</p>\n  </div>\n  <!--/FOOTER-->"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 992px) {\n  .footer {\n    position: relative !important; } }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  background: #005CA8;\n  height: 16px;\n  width: 100%;\n  padding-top: 25px;\n  padding-bottom: 45px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid my-nav\">\n    <ul class=\"nav justify-content-center text-white\">\n        <li class=\"nav-item\">\n            <a routerLink=\"/home\" class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">Trang chủ</a>\n        </li>\n        <li class=\"nav-item\">\n            <a routerLink=\"/helps\" class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">Hỗ Trợ</a>\n        </li>\n        <li class=\"nav-item\">\n            <a routerLink=\"/contact\" class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">Thông tin</a>\n        </li>\n    </ul>\n    <div class=\"row\">\n  \n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-12\">\n        <div class=\"logo\">\n            <img src=\"./assets/logo.jpg\" alt=\"logo\">\n        </div>\n      </div>\n  \n      <div class=\"col-lg-6 col-md-9 col-sm-9 col-12\">\n        <div class=\"title\">\n            <p>CẢI THIỆN CHẤT LƯỢNG ẢNH</p>\n        </div>\n      </div>\n  \n      <div class=\"col-lg-3 col-md-12 col-sm-12 col-12\">\n        <div class=\"name\">\n            <p>NGUYỄN ĐĂNG KHOA | 14SE111</p>\n            <a href=\"https://www.facebook.com/dangkhoa061096\"><i class=\"fab fa-facebook-square\"></i></a>\n        </div>\n      </div>\n       \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-nav {\n  background: #005CA8;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16); }\n\n.logo {\n  text-align: center; }\n\n.logo img {\n  width: 80px; }\n\n.title {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.title p {\n  margin-top: 25px;\n  font-size: 20px;\n  color: #fff; }\n\n.name {\n  color: #fff; }\n\n.name p {\n  font-size: 14px; }\n\n.name a {\n  color: #fff; }\n\n.name a:hover {\n  color: rgba(255, 255, 255, 0.671); }\n\n.name i {\n  font-size: 32px; }\n\n.nav-link {\n  transition: all 0.3s;\n  box-sizing: border-box; }\n\n.nav-link:hover {\n  background: white; }\n\n.active {\n  background: white;\n  color: blue; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/helps/helps.component.html":
/*!********************************************!*\
  !*** ./src/app/helps/helps.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-2\">\n  <div>\n    <div class=\"jumbotron\">\n      <h1 class=\"display-3\">Hỗ Trợ Đánh Giá</h1>\n      <p class=\"lead\">Trang web vẫn còn đang trong quá trình hoàn thiện và có nhiều thiếu soát, hãy\n        nhấn vào nút phía dưới để đánh giá để nâng cao trải nghiệm của chính bạn trong tương lai.\n      </p>\n      <hr class=\"my-2\">\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\"\n         href=\"https://docs.google.com/forms/d/e/1FAIpQLScTnRSl60RKJU-GzM_GI2OqfRP1u1Y5p7STFKjf0eamH1tV0Q/viewform\" \n         role=\"button\">Đi Đến Khảo Sát</a>\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n          <h4>Tại sao nên sử dụng:</h4>\n          <ul>\n              <li>\n                Có thể tăng hiệu suất của một tấm ảnh khi phóng to, những tấm ảnh phóng to vẫn giữ\n                được những điểm quan trọng mà không bị vỡ hay mờ như những cách phóng to thông thường.\n              </li>\n              <li>\n                Trang web giao diện thân thiện và dễ dàng sử dụng.\n              </li>\n              <li>\n                Không giới hạn số lần hay người sử dụng, không quảng cáo.\n              </li>\n              <li>Hoàn toàn miễn phí.</li>\n          </ul>\n      </div>\n      <div class=\"col-lg-6\">\n          <h4>Về mặc hạn chế:</h4>\n          <ul>\n              <li>Vì kinh phí hạn chế nên trang web không thế cung cấp một cấu hình server khủng để xử lý,\n                Google Cloud cung cấp một cấu hình giới hạn và khiêm tốn đủ để xử lý những tấm ảnh có kích thước\n                từ 500x400 trở xuống.\n              </li>\n              <li>Chỉ có thể nhân đôi kích thước ảnh đầu vào.</li>\n              <li>Tốc độ xử lý không nhanh vì phần cứng khá yếu.</li>\n          </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/helps/helps.component.scss":
/*!********************************************!*\
  !*** ./src/app/helps/helps.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  margin-top: 15px; }\n"

/***/ }),

/***/ "./src/app/helps/helps.component.ts":
/*!******************************************!*\
  !*** ./src/app/helps/helps.component.ts ***!
  \******************************************/
/*! exports provided: HelpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpsComponent", function() { return HelpsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpsComponent = /** @class */ (function () {
    function HelpsComponent() {
    }
    HelpsComponent.prototype.ngOnInit = function () {
    };
    HelpsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helps',
            template: __webpack_require__(/*! ./helps.component.html */ "./src/app/helps/helps.component.html"),
            styles: [__webpack_require__(/*! ./helps.component.scss */ "./src/app/helps/helps.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpsComponent);
    return HelpsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--HEADER-->\n<div *ngIf=\"isHandling\" class=\"black-mask\">\n    <div class=\"spinner\">\n        <p class=\"text-white ml-3\"><i class=\"fas fa-spinner w3-spin\" style=\"font-size:64px\"></i></p>\n        <p class=\"text-white font-weight-bold\">ĐANG XỬ LÝ...</p>\n    </div>\n  </div>\n  \n\n    <!--/HEADER-->\n    \n    <!--FILE-->\n    <div class=\"img-box w-100 d-flex align-items-center justify-content-center\">\n        <img src=\"./assets/file.png\" alt=\"\">\n    \n      <label for=\"upload-photo\">\n          <p>Chọn file</p>\n    \n      </label>\n    \n      <input type=\"file\" name=\"photo\" id=\"upload-photo\" style=\"display: none;\" (change)=\"onChangeImage($event)\">\n    </div>  \n    <!--/FILE-->\n    \n    <!--CONTENT-->\n      \n      <div class=\"container content\">\n          <div *ngIf=\"isError\" class=\"alert alert-danger\" role=\"alert\">\n            Đã có sự cố xảy ra trong quá trình xử lý. Nguyên nhân có thể là do Server hiện tại\n            chưa cung cấp đủ cấu hình để xử lý ảnh của bạn. <a class=\"alert-link\" routerLink=\"/helps\">Đến đây để biết rõ hơn</a>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-5 col-md-5 col-sm-12 col-12 left-image\">\n                <div class=\"box\">\n                  <div class=\"img-box-tool\">\n                    <img id=\"image\" src=\"https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/46503793_435088990359908_3232919169003421696_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn5-3.fna&oh=babd6ae26e10f7b7f11d134eccfbc764&oe=5C68C6A8\">\n                  </div>\n                  <div class=\"image-box-text\">\n                      <p>Trước: {{i_Width}}x{{i_Height}}</p>\n                  </div>\n              </div>\n            </div>\n            <div class=\"middle-tool col-lg-2 col-md-2 mb-3\">\n              <p style=\"width: 96px\" class=\"position-absolute\" (click)=\"uploadImage()\" title=\"Nhấn vào nút này để xử lý\">Xử Lý</p>\n              <p *ngIf=\"PImage\" (click)=\"onHandleCheck()\" data-toggle=\"modal\" data-target=\".modal-check\" style=\"width: 96px\" class=\"position-absolute my-5 text-center\" title=\"Nhấn vào nút này để so sánh\"><i class=\"far fa-eye\"></i></p>\n            </div>\n            <div class=\"col-lg-5 col-md-5 col-sm-12 col-12 right-image\">\n              <div class=\"box\">\n                  <div class=\"download_box\">\n                    <img id=\"pImage\" src=\"https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/46503793_435088990359908_3232919169003421696_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn5-3.fna&oh=babd6ae26e10f7b7f11d134eccfbc764&oe=5C68C6A8\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n                    <div class=\"middle\">\n                      <img (click)=\"downloadImage()\" id=\"download\" src=\"./assets/download-to-storage-drive.svg\" alt=\"\">\n                    </div>\n                  </div>\n                  <div class=\"image-box-text\">\n                      <p>Sau: {{pi_Width}}x{{pi_Height}}</p>\n                  </div>\n              </div>\n            </div>\n          </div>\n      </div>\n    <!--/CONTENT-->\n    \n    <!--MODAL-->\n    <div class=\"modal fade modal-check\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">So sánh kết quả</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body text-center\">\n              <p class=\"font-weight-bold\">{{checkTitle}}</p>\n              <img class=\"imgCheck\" id=\"imageCheck\" src=\"https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/46503793_435088990359908_3232919169003421696_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn5-3.fna&oh=babd6ae26e10f7b7f11d134eccfbc764&oe=5C68C6A8\">\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button (click)=\"onHandleNext()\" type=\"button\" class=\"btn btn-primary\" *ngIf=\"curCheck\">Next <i class=\"fas fa-arrow-right\"></i></button>\n              <button (click)=\"onHandleNext()\" type=\"button\" class=\"btn btn-danger\" *ngIf=\"!curCheck\"><i class=\"fas fa-arrow-left\"></i> Previous</button>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-box {\n  height: 223px; }\n\n.img-box label:hover {\n  cursor: pointer; }\n\n.img-box label {\n  position: absolute;\n  color: white;\n  margin-top: 10px; }\n\n.img-box label:hover {\n  color: #afaeae; }\n\n.img-box-tool > #image {\n  width: 100%;\n  height: 200px; }\n\n.img-box-tool #download {\n  border: 1px solid black;\n  width: 32px; }\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.img-box-tool {\n  width: 320px;\n  height: 200px; }\n\n.image-box-text p {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.image-box-text {\n  background: #003460;\n  color: white;\n  margin-top: 15px;\n  width: 320px; }\n\n.middle-tool {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.middle-tool img {\n  width: 96px;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.col-lg-5 {\n  display: flex;\n  align-items: center; }\n\n.left-image {\n  justify-content: flex-end; }\n\n@media screen and (max-width: 992px) {\n  .middle-tool {\n    padding-top: 15px;\n    padding-bottom: 60px; }\n  .left-image {\n    justify-content: center !important; }\n  .right-image {\n    justify-content: center !important; } }\n\n.content {\n  margin-bottom: 60px;\n  padding-bottom: 60px; }\n\n.download_box {\n  position: relative;\n  width: 320px;\n  height: 200px;\n  background: black; }\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .3s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.middle {\n  transition: .3s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.download_box #pImage {\n  width: 100%;\n  height: 200px; }\n\n.download_box:hover .image {\n  opacity: 0.3; }\n\n.download_box:hover .middle {\n  opacity: 1;\n  cursor: pointer; }\n\n#download {\n  width: 32px; }\n\n.middle-tool img:hover {\n  cursor: pointer; }\n\n.position-absolute {\n  background: #005CA8;\n  color: white;\n  padding: 5px 25px;\n  transition: all 0.3s; }\n\n.position-absolute:hover {\n  cursor: pointer;\n  color: #005CA8;\n  border: 1px solid #005CA8;\n  background: #fff; }\n\n.black-mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #00000086;\n  z-index: 99; }\n\n.spinner {\n  position: absolute;\n  top: 23%;\n  left: 48%;\n  -webkit-transform: translateY(50%, 50%);\n          transform: translateY(50%, 50%); }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http) {
        this._http = _http;
        this.checkTitle = "";
        this.curCheck = true;
        this.isError = false;
        this.isHandling = false;
        this.firstImageInput = false;
        this.i_Width = 0;
        this.i_Height = 0;
        this.pi_Width = 0;
        this.pi_Height = 0;
    }
    HomeComponent.prototype.onChangeImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(event.target.files[0]); // read file as data url
            reader_1.onload = function (event) {
                _this.Image = reader_1.result;
                var output = document.getElementById("image");
                output.src = _this.Image;
                setTimeout(function () {
                    _this.i_Width = output.naturalWidth;
                    _this.i_Height = output.naturalHeight;
                }, 50);
                if (_this.isError) {
                    _this.isError = false;
                }
                _this.firstImageInput = true;
            };
        }
    };
    HomeComponent.prototype.uploadImage = function () {
        var _this = this;
        if (!this.firstImageInput) {
            return;
        }
        this.isHandling = true;
        this._http.post("https://nckh-2018.appspot.com/upload", {
            "image": this.Image
        }).subscribe(function (x) {
            _this.PImage = x;
            var output = document.getElementById("pImage");
            output.src = "data:image/jpeg;base64," + _this.PImage;
            setTimeout(function () {
                _this.pi_Width = output.naturalWidth;
                _this.pi_Height = output.naturalHeight;
            }, 50);
        }, function (err) {
            _this.isHandling = false;
            _this.isError = true;
        }, function () {
            _this.isHandling = false;
        });
    };
    HomeComponent.prototype.downloadImage = function () {
        var myFile = this.base64ToFile(this.PImage, 'Test.jpeg', 'image/jpeg');
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](myFile);
    };
    HomeComponent.prototype.base64ToFile = function (base64Data, tempfilename, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new File(byteArrays, tempfilename, { type: contentType });
    };
    HomeComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.PImage = reader.result;
            var output = document.getElementById("pImage");
            setTimeout(function () {
                _this.pi_Width = output.naturalWidth;
                _this.pi_Height = output.naturalHeight;
            }, 50);
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HomeComponent.prototype.onHandleCheck = function () {
        this.checkTitle = "Ảnh phóng to bình thường";
        var output = document.getElementById("imageCheck");
        output.style.width = (this.i_Width * 2).toString() + "px";
        output.style.maxWidth = "100%";
        output.style.height = (this.i_Height * 2).toString() + "px";
        output.src = this.Image;
    };
    HomeComponent.prototype.onHandleNext = function () {
        var output = document.getElementById("imageCheck");
        if (this.curCheck) {
            this.checkTitle = "Ảnh phóng to bằng công cụ";
            output.src = "data:image/jpeg;base64," + this.PImage;
        }
        else {
            this.checkTitle = "Ảnh phóng to bình thường";
            output.src = this.Image;
        }
        this.curCheck = !this.curCheck;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ThanhPTP\Downloads\NCKH-RAW-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map