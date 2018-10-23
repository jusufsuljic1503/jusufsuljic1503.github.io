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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'movieapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shows_shows_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shows/shows.component */ "./src/app/shows/shows.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_services_movie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/movie.service */ "./src/services/movie.service.ts");
/* harmony import */ var src_services_shows_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/shows.service */ "./src/services/shows.service.ts");
/* harmony import */ var _home2_home2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home2/home2.component */ "./src/app/home2/home2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'movie', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '', redirectTo: 'movie', pathMatch: 'full' },
    { path: 'show', component: _home2_home2_component__WEBPACK_IMPORTED_MODULE_11__["Home2Component"] },
    { path: 'movie/:movieID', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__["MovieComponent"] },
    { path: 'show/:showID', component: _shows_shows_component__WEBPACK_IMPORTED_MODULE_7__["ShowsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__["MovieComponent"],
                _shows_shows_component__WEBPACK_IMPORTED_MODULE_7__["ShowsComponent"],
                _home2_home2_component__WEBPACK_IMPORTED_MODULE_11__["Home2Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [src_services_movie_service__WEBPACK_IMPORTED_MODULE_9__["MovieService"], src_services_shows_service__WEBPACK_IMPORTED_MODULE_10__["ShowsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered{\r\n\r\n    text-align: center;\r\n}\r\n\r\n.btn-group{\r\n    margin-left: 450px\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<br>\n\n<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n  <label class=\"btn btn-secondary active\">\n    <a routerLink='' type=\"radio\" checked> Movies</a>\n  </label>\n  <label class=\"btn btn-secondary\">\n    <a routerLink='/show/' type=\"radio\">Shows</a>\n  </label>\n</div>\n\n <br>\n\n\n  \n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Search Movies</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <input type=\"search\" class=\"form-control\" placeholder=\"Search Movies\" \n            name=\"movie\"\n              [(ngModel)]=\"movie\" name=\"movie\"\n               >\n          </div>\n          <div class=\"col-3\">\n            <button class=\"btn-block btn-info form-control\" (click)=\"searchMovies()\">Search</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    \n    <div  class=\"col-sm-4\" *ngFor=\"let movie of search_result; let i = index\">\n      <div *ngIf=\"i < 20\">\n        <div class=\"card mt-3 mb-3\">\n          <div class=\"card-header text-center\">\n            {{ movie.release_date | date:'mediumDate':'yyyy' }}\n          </div>\n          \n          <div class=\"card-body\">\n            <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}\" alt=\"{{ movie.original_title }}\" style=\"height: 460px\">\n            <p class=\"text-center\">{{ movie.original_title }}</p>\n            <a routerLink=\"/movie/{{ movie.id }}\" href=\"#\" class=\"btn btn-info\" role=\"button\">Movie Details</a>\n          </div>\n        </div>\n      </div>\n    \n  </div>\n  </div>\n\n  <hr>\n  \n\n  <hr>\n\n  <div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Popular Movies</h1>\n    </div>\n    </div>\n\n   <div class=\"row\">\n    <div  class=\"col-sm-4\" *ngFor=\"let popular of popular_movies; let i = index\">\n      <div *ngIf=\"i < 10\">\n        <div class=\"card mt-3 mb-3\">\n          <div class=\"card-header text-center\">\n            {{ popular.release_date | date:'mediumDate' }}\n          </div>\n          <div class=\"card-body\">\n            <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ popular.poster_path }}\" alt=\"{{ popular.original_title }}\" style=\"height: 460px\">\n            <p class=\"text-center\">{{ popular.original_title }}</p>\n            <a routerLink=\"/movie/{{ popular.id }}\" href=\"#\" class=\"btn btn-block btn-info\">Movie Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n   </div>\n\n   </div>\n\n</div>"

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
/* harmony import */ var src_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/movie.service */ "./src/services/movie.service.ts");
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
    function HomeComponent(movieService) {
        var _this = this;
        this.movieService = movieService;
        this.searches = [];
        // get popular movies
        this.movieService.getPopularMovies().subscribe(function (data) {
            _this.popular_movies = data['results'];
        });
    }
    // get search results of movies
    HomeComponent.prototype.searchMovies = function () {
        var _this = this;
        this.movieService.searchMovie(this.movie).subscribe(function (data) {
            _this.search_result = data['results'];
            // console.log(this.search_result);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home2/home2.component.css":
/*!*******************************************!*\
  !*** ./src/app/home2/home2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered{\r\n    text-align: center;\r\n}\r\n.btn-group{\r\n    margin-left: 450px\r\n\r\n}"

/***/ }),

/***/ "./src/app/home2/home2.component.html":
/*!********************************************!*\
  !*** ./src/app/home2/home2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<br>\n    \n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n        <label class=\"btn btn-secondary\">\n          <a routerLink='' type=\"radio\"  > Movies</a>\n        </label>\n        <label class=\"btn btn-secondary active\">\n          <a routerLink='/show/' type=\"radio\" checked >Shows</a>\n        </label>\n    </div>\n        \n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Search Shows</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Shows\"\n              name=\"show\"\n              [(ngModel)]=\"show\">\n          </div>\n          <div class=\"col-3\">\n            <button class=\"btn-block btn-danger form-control\" (click)=\"searchShows()\">Search</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div  class=\"col-sm-4\" *ngFor=\"let show of search_result; let i = index\">\n      <div *ngIf=\"i < 20\">\n        <div class=\"card mt-3 mb-3\">\n          <div class=\"card-header text-center\">\n            {{ show.first_air_date | date:'mediumDate':'yyyy' }}\n          </div>\n          <div class=\"card-body\">\n            <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ show.poster_path }}\" alt=\"{{ show.original_title }}\" style=\"height: 460px\">\n            <p class=\"text-center\">{{ show.original_title }}</p>\n            <a routerLink=\"/show/{{ show.id }}\" href=\"#\" class=\"btn btn-danger\" role=\"button\">Show Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n \n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Popular Shows</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div  class=\"col-sm-4\" *ngFor=\"let popular of popular_shows; let i = index\">\n      <div *ngIf=\"i < 10\">\n        <div class=\"card mt-3 mb-3\">\n          <div class=\"card-header text-center\">\n            {{ popular.first_air_date | date:'mediumDate' }}\n          </div>\n          <div class=\"card-body\">\n            <img class=\"card-img-top img-fluid\" src=\"https://image.tmdb.org/t/p/w500/{{ popular.poster_path }}\" alt=\"{{ popular.original_title }}\" style=\"height: 460px\">\n            <p class=\"text-center\">{{ popular.original_title }}</p>\n            <a routerLink=\"/show/{{ popular.id }}\" href=\"#\" class=\"btn btn-block btn-danger\">Show Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home2/home2.component.ts":
/*!******************************************!*\
  !*** ./src/app/home2/home2.component.ts ***!
  \******************************************/
/*! exports provided: Home2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Component", function() { return Home2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/shows.service */ "./src/services/shows.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home2Component = /** @class */ (function () {
    function Home2Component(showsService) {
        var _this = this;
        this.showsService = showsService;
        // get popular shows
        this.showsService.getPopularShows().subscribe(function (data) {
            _this.popular_shows = data['results'];
            // console.log(this.popular_shows);
        });
    }
    // get search results of shows
    Home2Component.prototype.searchShows = function () {
        var _this = this;
        this.showsService.searchShow(this.show).subscribe(function (data) {
            _this.search_result = data['results'];
            // console.log(this.search_result);
        });
    };
    Home2Component.prototype.ngOnInit = function () {
    };
    Home2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home2',
            template: __webpack_require__(/*! ./home2.component.html */ "./src/app/home2/home2.component.html"),
            styles: [__webpack_require__(/*! ./home2.component.css */ "./src/app/home2/home2.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"]])
    ], Home2Component);
    return Home2Component;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"movie\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card mt-5 mb-5\">\n          <div class=\"card-header\"> \n            {{ movie.title }}\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <img src=\"https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}\" class=\"img-fluid\" alt=\"{{ movie.title }}\">\n              </div>\n              <div class=\"col-sm-7\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">\n                    <strong>Release Date: </strong> {{ movie.release_date | date:'dd-MM-yyyy' }}\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Tagline: </strong> {{ movie.tagline }}\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Summary: </strong> {{ movie.overview }}\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Runtime: </strong> {{ movie.runtime }} min\n                  </li>\n                  <li class=\"list-group-item\">\n                      <strong>Budget: </strong> {{ movie.budget }} $\n                    </li>\n                  <li class=\"list-group-item\">\n                    <strong>Genre: </strong>\n                    <span *ngFor=\"let genre of movie.genres\" class=\"badge badge-primary mr-2\">\n                      {{ genre.name }}\n                    </span>\n                  </li>\n\n                  <li class=\"list-group-item\">\n                    <strong>Videos and Trailers: </strong>\n                    <div *ngFor=\"let result of movie.videos.results;\">\n                        <a href=\"https://www.youtube.com/watch?v={{result.key}}\">Link</a>\n                      \n                    </div>\n                  </li>\n\n                \n                  <li class=\"list-group-item\">\n                    <a href=\"{{ movie.homepage }}\" class=\"btn btn-info\"  target=\"_blank\">\n                      Movie Homepage\n                    </a>\n                    <a href=\"https://www.imdb.com/title/{{ movie.imdb_id }}\" target=\"_blank\" class=\"btn btn-info\">\n                      IMDB Link \n                    \n                    </a>\n\n                    \n                    \n                    \n                      \n\n  \n            \n                    \n\n                  \n                  \n\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div><!-- /.card -->\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/movie.service */ "./src/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = /** @class */ (function () {
    function MovieComponent(router, movieService) {
        this.router = router;
        this.movieService = movieService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['movieID'];
            _this.movieService.getMovie(id).subscribe(function (data) {
                _this.movie = data;
                // console.log(data);
            });
        });
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/shows/shows.component.css":
/*!*******************************************!*\
  !*** ./src/app/shows/shows.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shows/shows.component.html":
/*!********************************************!*\
  !*** ./src/app/shows/shows.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"show\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card mt-5 mb-5\">\n          <div class=\"card-header\"> \n            {{ show.original_name }}\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <img src=\"https://image.tmdb.org/t/p/w500/{{ show.poster_path }}\" class=\"img-fluid\" alt=\"{{ show.title }}\">\n              </div>\n              <div class=\"col-sm-7\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">\n                    <strong>Release Date: </strong> {{ show.first_air_date | date:'dd-MM-yyyy' }}\n                  </li>\n                 \n                  <li class=\"list-group-item\">\n                    <strong>Summary: </strong> {{ show.overview }}\n                  </li>\n                  <li class=\"list-group-item\">\n                    <strong>Runtime: </strong> {{ show.number_of_episodes }}  episodes\n                  </li>\n                  \n                  <li class=\"list-group-item\">\n                    <strong>Genre: </strong>\n                    <span *ngFor=\"let genre of show.genres\" class=\"badge badge-primary mr-2\">\n                      {{ genre.name }}\n                    </span>\n                  </li>\n\n\n                  <li class=\"list-group-item\">\n                      <strong>Videos and Trailers: </strong>\n                      <div *ngFor=\"let result of show.videos.results;\">\n                          <a href=\"https://www.youtube.com/watch?v={{result.key}}\">Link</a>\n                        \n                      </div>\n                    </li>\n\n                  <li class=\"list-group-item\">\n                    <a href=\"{{ show.homepage }}\" class=\"btn btn-danger\" target=\"_blank\">\n                      TV Show Homepage\n                    </a>\n                    <a href=\"https://www.imdb.com/title/{{ show.imdb_id }}\" target=\"_blank\" class=\"btn btn-danger\">\n                      IMDB Link\n                    </a>\n                    \n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div><!-- /.card -->\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shows/shows.component.ts":
/*!******************************************!*\
  !*** ./src/app/shows/shows.component.ts ***!
  \******************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/shows.service */ "./src/services/shows.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowsComponent = /** @class */ (function () {
    function ShowsComponent(router, showsService) {
        this.router = router;
        this.showsService = showsService;
    }
    ShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['showID'];
            _this.showsService.getShow(id).subscribe(function (data) {
                _this.show = data;
                // console.log(data);
            });
        });
    };
    ShowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shows',
            template: __webpack_require__(/*! ./shows.component.html */ "./src/app/shows/shows.component.html"),
            styles: [__webpack_require__(/*! ./shows.component.css */ "./src/app/shows/shows.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_services_shows_service__WEBPACK_IMPORTED_MODULE_2__["ShowsService"]])
    ], ShowsComponent);
    return ShowsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/movie.service.ts":
/*!***************************************!*\
  !*** ./src/services/movie.service.ts ***!
  \***************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieService = /** @class */ (function () {
    function MovieService(_http) {
        this._http = _http;
        this.movie_url = 'https://api.themoviedb.org/3';
        this.api_key = '1dc82c9bec6ae46050cbe7ccf9368fe4';
    }
    MovieService.prototype.searchMovie = function (movie) {
        this.movie_string = movie;
        return this._http.get(this.movie_url + '/search/movie' + '?api_key=' + this.api_key + '&query=' + this.movie_string);
    };
    /*getMovieTrailer(id:number){
   
       return this._http.get(this.movie_url + '/movie/' +id+'/videos'+'?api_key=' + this.api_key);
      
     }*/
    MovieService.prototype.getPopularMovies = function () {
        return this._http.get(this.movie_url + '/movie/popular' + '?api_key=' + this.api_key);
    };
    MovieService.prototype.getMovie = function (id) {
        return this._http.get(this.movie_url + '/movie/' + id + '?api_key=' + this.api_key + '&append_to_response=videos');
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/services/shows.service.ts":
/*!***************************************!*\
  !*** ./src/services/shows.service.ts ***!
  \***************************************/
/*! exports provided: ShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsService", function() { return ShowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowsService = /** @class */ (function () {
    function ShowsService(_http) {
        this._http = _http;
        this.show_url = 'https://api.themoviedb.org/3';
        this.api_key = '1dc82c9bec6ae46050cbe7ccf9368fe4';
    }
    ShowsService.prototype.searchShow = function (show) {
        this.show_string = show;
        return this._http.get(this.show_url + '/search/movie' + '?api_key=' + this.api_key + '&query=' + this.show_string);
    };
    ShowsService.prototype.getShowTrailer = function (id) {
        return this._http.get(this.show_url + '/tv/' + id + '/videos' + '?api_key=' + this.api_key);
    };
    ShowsService.prototype.getPopularShows = function () {
        return this._http.get(this.show_url + '/tv/popular' + '?api_key=' + this.api_key);
    };
    ShowsService.prototype.getShow = function (id) {
        return this._http.get(this.show_url + '/tv/' + id + '?api_key=' + this.api_key + '&append_to_response=videos');
    };
    ShowsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShowsService);
    return ShowsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Suljic\movieapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map