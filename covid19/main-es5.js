function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | coronavirus-coronavirus-module */
        "coronavirus-coronavirus-module").then(__webpack_require__.bind(null,
        /*! ./coronavirus/coronavirus.module */
        "./src/app/coronavirus/coronavirus.module.ts")).then(function (m) {
          return m.CoronavirusModule;
        });
      },
      path: ''
    }, {
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | info-info-module */
        "info-info-module").then(__webpack_require__.bind(null,
        /*! ./info/info.module */
        "./src/app/info/info.module.ts")).then(function (m) {
          return m.InfoModule;
        });
      },
      path: 'infos'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload',
        initialNavigation: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            onSameUrlNavigation: 'reload',
            initialNavigation: 'enabled'
          })]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.browser.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app.browser.module.ts ***!
    \***************************************/

  /*! exports provided: AppBrowserModule */

  /***/
  function srcAppAppBrowserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function () {
      return AppBrowserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppBrowserModule = function AppBrowserModule() {
      _classCallCheck(this, AppBrowserModule);
    };

    AppBrowserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppBrowserModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppBrowserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppBrowserModule_Factory(t) {
        return new (t || AppBrowserModule)();
      },
      imports: [[_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppBrowserModule, {
        imports: [_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBrowserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
          })],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "section"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".section[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL1NpdGVzL25nLWNvdmlkLTE5L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbn1cbiIsIi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _shared_pipes_country_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared/pipes/country-filter.pipe */
    "./src/app/shared/pipes/country-filter.pipe.ts");
    /* harmony import */


    var _shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/pipes/country.pipe */
    "./src/app/shared/pipes/country.pipe.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/layout/layout.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_operation_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/pipes/operation.pipe */
    "./src/app/shared/pipes/operation.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__["CountryPipe"], _shared_pipes_country_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["CountryFilterPipe"], _shared_pipes_operation_pipe__WEBPACK_IMPORTED_MODULE_9__["OperationPipe"]],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _shared_pipes_country_pipe__WEBPACK_IMPORTED_MODULE_1__["CountryPipe"], _shared_pipes_country_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["CountryFilterPipe"], _shared_pipes_operation_pipe__WEBPACK_IMPORTED_MODULE_9__["OperationPipe"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/coronavirus/constants/countries.constants.ts":
  /*!**************************************************************!*\
    !*** ./src/app/coronavirus/constants/countries.constants.ts ***!
    \**************************************************************/

  /*! exports provided: COUNTRIES */

  /***/
  function srcAppCoronavirusConstantsCountriesConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COUNTRIES", function () {
      return COUNTRIES;
    });

    var COUNTRIES = [{
      country: "Monde",
      slug: "monde",
      translation: "Mundo",
      provinces: [""],
      code: null
    }, {
      country: "France",
      slug: "france",
      translation: "Francia",
      provinces: [""],
      code: "FR"
    }, {
      country: "Italy",
      slug: "italy",
      translation: "Italia",
      provinces: [""],
      code: "IT"
    }, {
      country: "China",
      slug: "china",
      translation: "China",
      provinces: ["Hubei", "Guangdong", "Henan", "Zhejiang", "Hunan", "Anhui", "Jiangxi", "Shandong", "Jiangsu", "Chongqing", "Sichuan", "Heilongjiang", "Beijing", "Shanghai", "Hebei", "Fujian", "Guangxi", "Shaanxi", "Yunnan", "Hainan", "Guizhou", "Tianjin", "Shanxi", "Gansu", "Hong Kong", "Liaoning", "Jilin", "Xinjiang", "Inner Mongolia", "Ningxia", "Qinghai", "Macau", "Tibet"],
      code: "CN"
    }, {
      country: "Spain",
      slug: "spain",
      translation: "España",
      provinces: [""],
      code: "ES"
    }, {
      country: "Portugal",
      slug: "portugal",
      translation: "Portugal",
      provinces: [""],
      code: "PT"
    }, {
      country: "Afghanistan",
      slug: "afghanistan",
      translation: "Afghanistan",
      provinces: [""],
      code: "AF"
    }, {
      country: "South Africa",
      slug: "south-africa",
      translation: "South Africa",
      provinces: [""],
      code: "ZA"
    }, {
      country: "Albania",
      slug: "albania",
      translation: "Albania",
      provinces: [""],
      code: "AL"
    }, {
      country: "Algeria",
      slug: "algeria",
      translation: "Algeria",
      provinces: [""],
      code: "DZ"
    }, {
      country: "Germany",
      slug: "germany",
      translation: "Alemania",
      provinces: [""],
      code: "DE"
    }, {
      country: "Andorra",
      slug: "andorra",
      translation: "Andorra",
      provinces: [""],
      code: "AD"
    }, {
      country: "Angola",
      slug: "angola",
      translation: "Angola",
      provinces: [""],
      code: "AO"
    }, {
      country: "Antigua and Barbuda",
      slug: "antigua-and-barbuda",
      translation: "Antigua y Barbuda",
      provinces: [""],
      code: "AG"
    }, {
      country: "Saudi Arabia",
      slug: "saudi-arabia",
      translation: "Arabia Saudita",
      provinces: [""],
      code: "SA"
    }, {
      country: "Argentina",
      slug: "argentina",
      translation: "Argentina",
      provinces: [""],
      code: "AR"
    }, {
      country: "Armenia",
      slug: "armenia",
      translation: "Armenia",
      provinces: [""],
      code: "AM"
    }, {
      country: "Aruba",
      slug: "aruba",
      translation: "Aruba",
      provinces: [""],
      code: "AW"
    }, {
      country: "Australia",
      slug: "australia",
      translation: "Australia",
      provinces: ["New South Wales", "Victoria", "Queensland", "South Australia", "From Diamond Princess", "Western Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"],
      code: "AU"
    }, {
      country: "Austria",
      slug: "austria",
      translation: "Austria",
      provinces: [""],
      code: "AT"
    }, {
      country: "Azerbaijan",
      slug: "azerbaijan",
      translation: "Azerbaiyán",
      provinces: [""],
      code: "AZ"
    }, {
      country: "Bahrain",
      slug: "bahrain",
      translation: "Bahrein",
      provinces: [""],
      code: "BH"
    }, {
      country: "Bangladesh",
      slug: "bangladesh",
      translation: "Bangladesh",
      provinces: [""],
      code: "BD"
    }, {
      country: "Barbados",
      slug: "barbados",
      translation: "Barbados",
      provinces: [""],
      code: "BB"
    }, {
      country: "Belgium",
      slug: "belgium",
      translation: "Belgica",
      provinces: [""],
      code: "BE"
    }, {
      country: "Benin",
      slug: "benin",
      translation: "Benin",
      provinces: [""],
      code: "BJ"
    }, {
      country: "Bhutan",
      slug: "bhutan",
      translation: "Bután",
      provinces: [""],
      code: "BT"
    }, {
      country: "Belarus",
      slug: "belarus",
      translation: "Bielorrusia",
      provinces: [""],
      code: "BY"
    }, {
      country: "Bolivia",
      slug: "bolivia",
      translation: "Bolivia",
      provinces: [""],
      code: "BO"
    }, {
      country: "Bosnia and Herzegovina",
      slug: "bosnia-and-herzegovina",
      translation: "Bosnia y Herzegovina",
      provinces: [""],
      code: "BA"
    }, {
      country: "Brunei",
      slug: "brunei",
      translation: "Brunei",
      provinces: [""],
      code: "BN"
    }, {
      country: "Brazil",
      slug: "brazil",
      translation: "Brasil",
      provinces: [""],
      code: "BR"
    }, {
      country: "Bulgaria",
      slug: "bulgaria",
      translation: "Bulgaria",
      provinces: [""],
      code: "BG"
    }, {
      country: "Burkina Faso",
      slug: "burkina-faso",
      translation: "Burkina Faso",
      provinces: [""],
      code: "BF"
    }, {
      country: "Cambodia",
      slug: "cambodia",
      translation: "Camboya",
      provinces: [""],
      code: "KH"
    }, {
      country: "Cameroon",
      slug: "cameroon",
      translation: "Camerún",
      provinces: [""],
      code: "CM"
    }, {
      country: "Canada",
      slug: "canada",
      translation: "Canada",
      provinces: ["British Columbia", "Ontario", "Alberta", "Quebec", "New Brunswick", "Manitoba", "Saskatchewan", "Grand Princess", "Newfoundland and Labrador", "Prince Edward Island", "Nova Scotia", "Northwest Territories"],
      code: "CA"
    }, {
      country: "Cabo Verde",
      slug: "cabo-verde",
      translation: "Cabo Verde",
      provinces: [""],
      code: "CV"
    }, {
      country: "Central African Republic",
      slug: "central-african-republic",
      translation: "Centro de África",
      provinces: [""],
      code: "CF"
    }, {
      country: "Chad",
      slug: "chad",
      translation: "Chad",
      provinces: [""],
      code: "TD"
    }, {
      country: "Chile",
      slug: "chile",
      translation: "Chile",
      provinces: [""],
      code: "CL"
    }, {
      country: "Cyprus",
      slug: "cyprus",
      translation: "Chipre",
      provinces: [""],
      code: "CY"
    }, {
      country: "Colombia",
      slug: "colombia",
      translation: "Colombia",
      provinces: [""],
      code: "CO"
    }, {
      country: "Congo",
      slug: "congo",
      translation: "Congo",
      provinces: [""],
      code: "CG"
    }, {
      country: "Korea, South",
      slug: "korea,-south",
      translation: "Corea del Sur",
      provinces: [""],
      code: "KR"
    }, {
      country: "Costa Rica",
      slug: "costa-rica",
      translation: "Costa Rica",
      provinces: [""],
      code: "CR"
    }, {
      country: "Croatia",
      slug: "croatia",
      translation: "Croacia",
      provinces: [""],
      code: "HR"
    }, {
      country: "Cuba",
      slug: "cuba",
      translation: "Cuba",
      provinces: [""],
      code: "CU"
    }, {
      country: "Cote d'Ivoire",
      slug: "cote-divoire",
      translation: "Costa de Marfil",
      provinces: [""],
      code: "CI"
    }, {
      country: "Denmark",
      slug: "denmark",
      translation: "Dinamarca",
      provinces: ["Denmark", "Faroe Islands", "Greenland"],
      code: "DK"
    }, {
      country: "Cruise Ship",
      slug: "cruise-ship",
      translation: "Cruise Ship",
      provinces: ["Cruise Ship"]
    }, {
      country: "Djibouti",
      slug: "djibouti",
      translation: "Djibouti",
      provinces: [""],
      code: "DJ"
    }, {
      country: "Egypt",
      slug: "egypt",
      translation: "Egipto",
      provinces: [""],
      code: "EG"
    }, {
      country: "United Arab Emirates",
      slug: "united-arab-emirates",
      translation: "Emiratos Árabes Unidos",
      provinces: [""],
      code: "AE"
    }, {
      country: "Ecuador",
      slug: "ecuador",
      translation: "Ecuador",
      provinces: [""],
      code: "EC"
    }, {
      country: "Eritrea",
      slug: "eritrea",
      translation: "Eritrea",
      provinces: [""],
      code: "ER"
    }, {
      country: "Estonia",
      slug: "estonia",
      translation: "Estonia",
      provinces: [""],
      code: "EE"
    }, {
      country: "Eswatini",
      slug: "eswatini",
      translation: "Eswatini",
      provinces: [""]
    }, {
      country: "US",
      slug: "us",
      translation: "Estados Unidos",
      provinces: ["Clark County, NV", "Fort Bend County, TX", "Grant County, WA", "Santa Rosa County, FL", "Williamson County, TN", "New York County, NY", "Montgomery County, MD", "Suffolk County, MA", "Denver County, CO", "Summit County, CO", "Bergen County, NJ", "Harris County, TX", "San Francisco County, CA", "Contra Costa County, CA", "Orange County, CA", "Norfolk County, MA", "Maricopa County, AZ", "Wake County, NC", "Westchester County, NY", "Grafton County, NH", "Hillsborough, FL", "Placer County, CA", "San Mateo, CA", "Sonoma County, CA", "Umatilla, OR", "Fulton County, GA", "Washington County, OR", "Snohomish County, WA", "Humboldt County, CA", "Sacramento County, CA", "San Diego County, CA", "San Benito, CA", "Los Angeles, CA", "King County, WA", "Cook County, IL", "Skagit, WA", "Thurston, WA", "Island, WA", "Whatcom, WA", "Marin, CA", "Calaveras, CA", "Stanislaus, CA", "Washington", "New York", "California", "Massachusetts", "Diamond Princess", "Grand Princess", "Georgia", "Colorado", "Florida", "New Jersey", "Oregon", "Texas", "Illinois", "Pennsylvania", "Iowa", "Maryland", "North Carolina", "South Carolina", "Tennessee", "Virginia", "Arizona", "Indiana", "Kentucky", "District of Columbia", "Nevada", "New Hampshire", "Minnesota", "Nebraska", "Ohio", "Rhode Island", "Wisconsin", "Connecticut", "Hawaii", "Oklahoma", "Utah", "Kansas", "Louisiana", "Missouri", "Vermont", "Alaska", "Arkansas", "Delaware", "Idaho", "Maine", "Michigan", "Mississippi", "Montana", "New Mexico", "North Dakota", "South Dakota", "West Virginia", "Wyoming", "Kitsap, WA", "Solano, CA", "Santa Cruz, CA", "Napa, CA", "Ventura, CA", "Worcester, MA", "Gwinnett, GA", "DeKalb, GA", "Floyd, GA", "Fayette, GA", "Gregg, TX", "Monmouth, NJ", "Burlington, NJ", "Camden, NJ", "Passaic, NJ", "Union, NJ", "Eagle, CO", "Larimer, CO", "Arapahoe, CO", "Gunnison, CO", "Kane, IL", "Monroe, PA", "Philadelphia, PA", "Norfolk, VA", "Arlington, VA", "Spotsylvania, VA", "Loudoun, VA", "Prince George's, MD", "Pottawattamie, IA", "Camden, NC", "Pima, AZ", "Noble, IN", "Adams, IN", "Boone, IN", "Dane, WI", "Pierce, WI", "Cuyahoga, OH", "Weber, UT", "Bennington County, VT", "Carver County, MN", "Charlotte County, FL", "Cherokee County, GA", "Collin County, TX", "Jefferson County, KY", "Jefferson Parish, LA", "Shasta County, CA", "Spartanburg County, SC", "Harrison County, KY", "Johnson County, IA", "Berkshire County, MA", "Davidson County, TN", "Douglas County, OR", "Fresno County, CA", "Harford County, MD", "Hendricks County, IN", "Hudson County, NJ", "Johnson County, KS", "Kittitas County, WA", "Manatee County, FL", "Marion County, OR", "Okaloosa County, FL", "Polk County, GA", "Riverside County, CA", "Shelby County, TN", "St. Louis County, MO", "Suffolk County, NY", "Ulster County, NY", "Volusia County, FL", "Fairfax County, VA", "Rockingham County, NH", "Washington, D.C.", "Montgomery County, PA", "Alameda County, CA", "Broward County, FL", "Lee County, FL", "Pinal County, AZ", "Rockland County, NY", "Saratoga County, NY", "Charleston County, SC", "Clark County, WA", "Cobb County, GA", "Davis County, UT", "El Paso County, CO", "Honolulu County, HI", "Jackson County, OR ", "Jefferson County, WA", "Kershaw County, SC", "Klamath County, OR", "Madera County, CA", "Pierce County, WA", "Tulsa County, OK", "Douglas County, CO", "Providence County, RI", "Chatham County, NC", "Delaware County, PA", "Douglas County, NE", "Fayette County, KY", "Marion County, IN", "Middlesex County, MA", "Nassau County, NY", "Ramsey County, MN", "Washoe County, NV", "Wayne County, PA", "Yolo County, CA", "Santa Clara County, CA", "San Joaquin, CA", "Essex, MA", "Charlton, GA", "Collier, FL", "Pinellas, FL", "Alachua, FL", "Nassau, FL", "Pasco, FL", "Dallas, TX", "Tarrant, TX", "Montgomery, TX", "Middlesex, NJ", "Jefferson, CO", "Multnomah, OR", "Polk, OR", "Deschutes, OR", "McHenry, IL", "Lake, IL", "Bucks, PA", "Hanover, VA", "Lancaster, SC", "Sullivan, TN", "Johnson, IN", "Howard, IN", "St. Joseph, IN", "Knox, NE", "Stark, OH", "Anoka, MN", "Olmsted, MN", "Summit, UT", "Fairfield, CT", "Litchfield, CT", "Orleans, LA", "Pennington, SD", "Beadle, SD", "Charles Mix, SD", "Davison, SD", "Minnehaha, SD", "Bon Homme, SD", "Socorro, NM", "Bernalillo, NM", "Oakland, MI", "Wayne, MI", "New Castle, DE", "Alabama", "Puerto Rico", "Guam", "Virgin Islands", "United States Virgin Islands", "US"],
      code: "US"
    }, {
      country: "Ethiopia",
      slug: "ethiopia",
      translation: "Etiopia",
      provinces: [""],
      code: "ET"
    }, {
      country: "Fiji",
      slug: "fiji",
      translation: "Fiji",
      provinces: [""],
      code: "FJ"
    }, {
      country: "Finland",
      slug: "finland",
      translation: "Finlandia",
      provinces: [""],
      code: "FI"
    }, {
      country: "Gabon",
      slug: "gabon",
      translation: "Gabon",
      provinces: [""],
      code: "GA"
    }, {
      country: "Gambia, The",
      slug: "gambia,-the",
      translation: "Gambia",
      provinces: [""],
      code: "GM"
    }, {
      country: "Ghana",
      slug: "ghana",
      translation: "Ghana",
      provinces: [""],
      code: "GH"
    }, {
      country: "Greenland",
      slug: "greenland",
      translation: "Groenlandia",
      provinces: [""],
      code: "GL"
    }, {
      country: "Greece",
      slug: "greece",
      translation: "Grecia",
      provinces: [""],
      code: "GR"
    }, {
      country: "Guadeloupe",
      slug: "guadeloupe",
      translation: "Guadeloupe",
      provinces: [""],
      code: "GP"
    }, {
      country: "Guam",
      slug: "guam",
      translation: "Guam",
      provinces: [""],
      code: "GU"
    }, {
      country: "Guatemala",
      slug: "guatemala",
      translation: "Guatemala",
      provinces: [""],
      code: "GT"
    }, {
      country: "Guernsey",
      slug: "guernsey",
      translation: "Guernesey",
      provinces: [""],
      code: "GG"
    }, {
      country: "Guinea",
      slug: "guinea",
      translation: "Guinea",
      provinces: [""],
      code: "GN"
    }, {
      country: "Equatorial Guinea",
      slug: "equatorial-guinea",
      translation: "Guinea Ecuatorial",
      provinces: [""],
      code: "GQ"
    }, {
      country: "French Guiana",
      slug: "french-guiana",
      translation: "Guyana Francesa",
      provinces: [""],
      code: "GF"
    }, {
      country: "Guyana",
      slug: "guyana",
      translation: "Guyana",
      provinces: [""],
      code: "GY"
    }, {
      country: "Georgia",
      slug: "georgia",
      translation: "Georgia",
      provinces: [""],
      code: "GE"
    }, {
      country: "Haiti",
      slug: "haiti",
      translation: "Haiti",
      provinces: [""],
      code: "HT"
    }, {
      country: "Honduras",
      slug: "honduras",
      translation: "Honduras",
      provinces: [""],
      code: "HN"
    }, {
      country: "Hungary",
      slug: "hungary",
      translation: "Hungria",
      provinces: [""],
      code: "HU"
    }, {
      country: "India",
      slug: "india",
      translation: "India",
      provinces: [""],
      code: "IN"
    }, {
      country: "Indonesia",
      slug: "indonesia",
      translation: "Indonesia",
      provinces: [""],
      code: "ID"
    }, {
      country: "Iran",
      slug: "iran",
      translation: "Iran",
      provinces: [""],
      code: "IR"
    }, {
      country: "Iraq",
      slug: "iraq",
      translation: "Iraq",
      provinces: [""],
      code: "IQ"
    }, {
      country: "Ireland",
      slug: "ireland",
      translation: "Irlanda",
      provinces: [""],
      code: "IE"
    }, {
      country: "Iceland",
      slug: "iceland",
      translation: "Islandia",
      provinces: [""],
      code: "IS"
    }, {
      country: "Israel",
      slug: "israel",
      translation: "Israel",
      provinces: [""],
      code: "IL"
    }, {
      country: "Jamaica",
      slug: "jamaica",
      translation: "Jamaica",
      provinces: [""],
      code: "JM"
    }, {
      country: "Japan",
      slug: "japan",
      translation: "Japón",
      provinces: [""],
      code: "JP"
    }, {
      country: "Jersey",
      slug: "jersey",
      translation: "Jersey",
      provinces: [""],
      code: "JE"
    }, {
      country: "Jordan",
      slug: "jordan",
      translation: "Jordania",
      provinces: [""],
      code: "JO"
    }, {
      country: "Kazakhstan",
      slug: "kazakhstan",
      translation: "Kazajstán",
      provinces: [""],
      code: "KZ"
    }, {
      country: "Kenya",
      slug: "kenya",
      translation: "Kenya",
      provinces: [""],
      code: "KE"
    }, {
      country: "Kyrgyzstan",
      slug: "kyrgyzstan",
      translation: "Kirguistán",
      provinces: [""],
      code: "KG"
    }, {
      country: "Kosovo",
      slug: "kosovo",
      translation: "Kosovo",
      provinces: [""]
    }, {
      country: "Kuwait",
      slug: "kuwait",
      translation: "Kuwait",
      provinces: [""],
      code: "KW"
    }, {
      country: "El Salvador",
      slug: "el-salvador",
      translation: "El Salvador",
      provinces: [""],
      code: "SV"
    }, {
      country: "Bahamas, The",
      slug: "bahamas,-the",
      translation: "Bahamas",
      provinces: [""],
      code: "BS"
    }, {
      country: "Maldives",
      slug: "maldives",
      translation: "Maldivas",
      provinces: [""],
      code: "MV"
    }, {
      country: "Latvia",
      slug: "latvia",
      translation: "Letonia",
      provinces: [""],
      code: "LV"
    }, {
      country: "Lebanon",
      slug: "lebanon",
      translation: "Líbano",
      provinces: [""],
      code: "LB"
    }, {
      country: "Liberia",
      slug: "liberia",
      translation: "Liberia",
      provinces: [""],
      code: "LR"
    }, {
      country: "Liechtenstein",
      slug: "liechtenstein",
      translation: "Liechtenstein",
      provinces: [""],
      code: "LI"
    }, {
      country: "Lithuania",
      slug: "lithuania",
      translation: "Lituania",
      provinces: [""],
      code: "LT"
    }, {
      country: "Luxembourg",
      slug: "luxembourg",
      translation: "Luxemburgo",
      provinces: [""],
      code: "LU"
    }, {
      country: "North Macedonia",
      slug: "north-macedonia",
      translation: "Macedonia del norte",
      provinces: [""],
      code: "MP"
    }, {
      country: "Madagascar",
      slug: "madagascar",
      translation: "Madagascar",
      provinces: [""],
      code: "MG"
    }, {
      country: "Malaysia",
      slug: "malaysia",
      translation: "Malasia",
      provinces: [""],
      code: "MY"
    }, {
      country: "Malta",
      slug: "malta",
      translation: "Malta",
      provinces: [""],
      code: "MT"
    }, {
      country: "Morocco",
      slug: "morocco",
      translation: "Marruecos",
      provinces: [""],
      code: "MA"
    }, {
      country: "Martinique",
      slug: "martinique",
      translation: "Martinique",
      provinces: [""],
      code: "MQ"
    }, {
      country: "Mauritius",
      slug: "mauritius",
      translation: "Mauritius",
      provinces: [""],
      code: "MU"
    }, {
      country: "Mauritania",
      slug: "mauritania",
      translation: "Mauritania",
      provinces: [""],
      code: "MR"
    }, {
      country: "Mayotte",
      slug: "mayotte",
      translation: "Mayotte",
      provinces: [""],
      code: "YT"
    }, {
      country: "Mexico",
      slug: "mexico",
      translation: "Mexico",
      provinces: [""],
      code: "MX"
    }, {
      country: "Moldova",
      slug: "moldova",
      translation: "Moldova",
      provinces: [""],
      code: "MD"
    }, {
      country: "Monaco",
      slug: "monaco",
      translation: "Monaco",
      provinces: [""],
      code: "MC"
    }, {
      country: "Mongolia",
      slug: "mongolia",
      translation: "Mongolia",
      provinces: [""],
      code: "MN"
    }, {
      country: "Montenegro",
      slug: "montenegro",
      translation: "Montenegro",
      provinces: [""],
      code: "ME"
    }, {
      country: "Namibia",
      slug: "namibia",
      translation: "Namibia",
      provinces: [""],
      code: "NA"
    }, {
      country: "Nicaragua",
      slug: "nicaragua",
      translation: "Nicaragua",
      provinces: [""],
      code: "NI"
    }, {
      country: "Niger",
      slug: "niger",
      translation: "Niger",
      provinces: [""],
      code: "NE"
    }, {
      country: "Nigeria",
      slug: "nigeria",
      translation: "Nigeria",
      provinces: [""],
      code: "NG"
    }, {
      country: "Norway",
      slug: "norway",
      translation: "Noruega",
      provinces: [""],
      code: "NO"
    }, {
      country: "New Zealand",
      slug: "new-zealand",
      translation: "Nueva Zelanda",
      provinces: [""],
      code: "NZ"
    }, {
      country: "Nepal",
      slug: "nepal",
      translation: "Nepal",
      provinces: [""],
      code: "NP"
    }, {
      country: "Oman",
      slug: "oman",
      translation: "Oman",
      provinces: [""],
      code: "OM"
    }, {
      country: "Uzbekistan",
      slug: "uzbekistan",
      translation: "Uzbekistan",
      provinces: [""],
      code: "UZ"
    }, {
      country: "Pakistan",
      slug: "pakistan",
      translation: "Pakistan",
      provinces: [""],
      code: "PK"
    }, {
      country: "occupied Palestinian territory",
      slug: "occupied-palestinian-territory",
      translation: "Palestina",
      provinces: [""],
      code: "PS"
    }, {
      country: "Panama",
      slug: "panama",
      translation: "Panama",
      provinces: [""],
      code: "PA"
    }, {
      country: "Papua New Guinea",
      slug: "papua-new-guinea",
      translation: "Papua New Guinea",
      provinces: [""],
      code: "PG"
    }, {
      country: "Paraguay",
      slug: "paraguay",
      translation: "Paraguay",
      provinces: [""],
      code: "PY"
    }, {
      country: "Netherlands",
      slug: "netherlands",
      translation: "Países Bajos",
      provinces: ["Netherlands", "Curacao", "Aruba", "Sint Maarten"],
      code: "NL"
    }, {
      country: "Philippines",
      slug: "philippines",
      translation: "Filipinas",
      provinces: [""],
      code: "PH"
    }, {
      country: "Poland",
      slug: "poland",
      translation: "Polonia",
      provinces: [""],
      code: "PL"
    }, {
      country: "Puerto Rico",
      slug: "puerto-rico",
      translation: "Puerto Rico",
      provinces: [""],
      code: "PR"
    }, {
      country: "Peru",
      slug: "peru",
      translation: "Peru",
      provinces: [""],
      code: "PE"
    }, {
      country: "Qatar",
      slug: "qatar",
      translation: "Qatar",
      provinces: [""],
      code: "QA"
    }, {
      country: "Romania",
      slug: "romania",
      translation: "Rumania",
      provinces: [""],
      code: "RO"
    }, {
      country: "United Kingdom",
      slug: "united-kingdom",
      translation: "Reino Unido",
      provinces: ["Channel Islands", "Gibraltar", "United Kingdom", "Cayman Islands", "Montserrat", "Bermuda", "Isle of Man"],
      code: "GB"
    }, {
      country: "Russia",
      slug: "russia",
      translation: "Rusia",
      provinces: [""],
      code: "RU"
    }, {
      country: "Rwanda",
      slug: "rwanda",
      translation: "Rwanda",
      provinces: [""],
      code: "RW"
    }, {
      country: "Dominican Republic",
      slug: "dominican-republic",
      translation: "República Dominicana",
      provinces: [""],
      code: "DO"
    }, {
      country: "Czechia",
      slug: "czechia",
      translation: "República Checa",
      provinces: [""],
      code: "CZ"
    }, {
      country: "Republic of the Congo",
      slug: "republic-of-the-congo",
      translation: "República del Congo",
      provinces: [""],
      code: "CD"
    }, {
      country: "Reunion",
      slug: "reunion",
      translation: "Reunion",
      provinces: [""],
      code: "RE"
    }, {
      country: "San Marino",
      slug: "san-marino",
      translation: "San Marino",
      provinces: [""],
      code: "SM"
    }, {
      country: "Saint Vincent and the Grenadines",
      slug: "saint-vincent-and-the-grenadines",
      translation: "Saint Vincent and the Grenadines",
      provinces: [""],
      code: "VC"
    }, {
      country: "Saint Lucia",
      slug: "saint-lucia",
      translation: "Santa Lucía",
      provinces: [""],
      code: "LC"
    }, {
      country: "Serbia",
      slug: "serbia",
      translation: "Serbia",
      provinces: [""],
      code: "RS"
    }, {
      country: "Seychelles",
      slug: "seychelles",
      translation: "Seychelles",
      provinces: [""],
      code: "SC"
    }, {
      country: "Singapore",
      slug: "singapore",
      translation: "Singapur",
      provinces: [""],
      code: "SG"
    }, {
      country: "Slovakia",
      slug: "slovakia",
      translation: "Eslovaquia",
      provinces: [""],
      code: "SK"
    }, {
      country: "Slovenia",
      slug: "slovenia",
      translation: "Eslovenia",
      provinces: [""],
      code: "SI"
    }, {
      country: "Somalia",
      slug: "somalia",
      translation: "Somalia",
      provinces: [""],
      code: "SO"
    }, {
      country: "Sudan",
      slug: "sudan",
      translation: "Sudan",
      provinces: [""],
      code: "SD"
    }, {
      country: "Sri Lanka",
      slug: "sri-lanka",
      translation: "Sri Lanka",
      provinces: [""],
      code: "LK"
    }, {
      country: "Switzerland",
      slug: "switzerland",
      translation: "Suiza",
      provinces: [""],
      code: "CH"
    }, {
      country: "Suriname",
      slug: "suriname",
      translation: "Suriname",
      provinces: [""],
      code: "SR"
    }, {
      country: "Sweden",
      slug: "sweden",
      translation: "Suecia",
      provinces: [""],
      code: "SE"
    }, {
      country: "Senegal",
      slug: "senegal",
      translation: "Senegal",
      provinces: [""],
      code: "SN"
    }, {
      country: "Taiwan*",
      slug: "taiwan*",
      translation: "Taiwan",
      provinces: [""],
      code: "TW"
    }, {
      country: "Tanzania",
      slug: "tanzania",
      translation: "Tanzania",
      provinces: [""],
      code: "TZ"
    }, {
      country: "Thailand",
      slug: "thailand",
      translation: "Tailandia",
      provinces: [""],
      code: "TH"
    }, {
      country: "East Timor",
      slug: "east-timor",
      translation: "East Timor",
      provinces: [""],
      code: "TL"
    }, {
      country: "Togo",
      slug: "togo",
      translation: "Togo",
      provinces: [""],
      code: "TG"
    }, {
      country: "Trinidad and Tobago",
      slug: "trinidad-and-tobago",
      translation: "Trinidad y Tobago",
      provinces: [""],
      code: "TT"
    }, {
      country: "Tunisia",
      slug: "tunisia",
      translation: "Tunisia",
      provinces: [""],
      code: "TN"
    }, {
      country: "Turkey",
      slug: "turkey",
      translation: "Turquia",
      provinces: [""],
      code: "TR"
    }, {
      country: "Uganda",
      slug: "Ouganda",
      translation: "Uganda",
      provinces: [""],
      code: "UG"
    }, {
      country: "Ukraine",
      slug: "ukraine",
      translation: "Ucrania",
      provinces: [""],
      code: "UA"
    }, {
      country: "Uruguay",
      slug: "uruguay",
      translation: "Uruguay",
      provinces: [""],
      code: "UY"
    }, {
      country: "Holy See",
      slug: "holy-see",
      translation: "Vaticano",
      provinces: [""],
      code: "VA"
    }, {
      country: "Venezuela",
      slug: "venezuela",
      translation: "Venezuela",
      provinces: [""],
      code: "VE"
    }, {
      country: "Vietnam",
      slug: "vietnam",
      translation: "Vietnam",
      provinces: [""],
      code: "VN"
    }, {
      country: "Zambia",
      slug: "zambia",
      translation: "Zambia",
      provinces: [""],
      code: "ZM"
    }, {
      country: "Zimbabwe",
      slug: "zimbabwe",
      translation: "Zimbabwe",
      provinces: [""],
      code: "ZW"
    }];
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _coronavirus_constants_countries_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @coronavirus/constants/countries.constants */
    "./src/app/coronavirus/constants/countries.constants.ts");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.countries = _coronavirus_constants_countries_constants__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"];
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 20,
      vars: 0,
      consts: [[1, "footer"], [1, "content", "has-text-centered"], ["href", "https://juanitourquiza.github.io/", "target", "new"], ["href", "https://github.com/souryvath/ng-covid-19", "target", "_blank"], ["href", "https://github.com/mathdroid/covid19", "target", "new"], ["href", "https://github.com/NovelCOVID/API", "target", "new"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aplicaci\xF3n web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Juan Urquiza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " proyecto base ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "souryvath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "mathdroid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " y ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "NovelCOVID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL1NpdGVzL25nLWNvdmlkLTE5L3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcGFkZGluZzogM3JlbTtcbn1cbiIsIi5mb290ZXIge1xuICBwYWRkaW5nOiAzcmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_button_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_35_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.addToHomeScreen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Agregue el app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.isActive = false;
        this.showButton = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "expand",
        value: function expand() {
          this.isActive = !this.isActive;
        }
      }, {
        key: "onbeforeinstallprompt",
        value: function onbeforeinstallprompt(e) {
          console.log(e); // Prevent Chrome 67 and earlier from automatically showing the prompt

          e.preventDefault(); // Stash the event so it can be triggered later.

          this.deferredPrompt = e;
          this.showButton = true;
        }
      }, {
        key: "addToHomeScreen",
        value: function addToHomeScreen() {
          var _this = this;

          if (!this.deferredPrompt) {
            return;
          } // Show the prompt


          this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

          this.deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }

            _this.showButton = false;
            _this.deferredPrompt = null;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeinstallprompt", function HeaderComponent_beforeinstallprompt_HostBindingHandler($event) {
            return ctx.onbeforeinstallprompt($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 36,
      vars: 3,
      consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-transparent", "is-info"], [1, "navbar-brand"], ["href", "./", "title", "Cas de coronavirus, COVID-19", 1, "navbar-item", "logo"], [1, "nav-item", "title", "is-primary"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "menu", 1, "navbar-burger", "burger", 3, "click"], ["aria-hidden", "true"], ["id", "menu", 1, "navbar-menu"], [1, "navbar-end"], ["routerLink", "stats", 1, "navbar-item", 3, "click"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link"], [1, "navbar-dropdown"], ["routerLink", "/infos/enfermedad-coronavirus", 1, "navbar-item"], ["routerLink", "/infos/consejos", 1, "navbar-item"], ["routerLink", "/infos/gobierno", 1, "navbar-item"], ["routerLink", "/infos/enfermedad-test-coronavirus", 1, "navbar-item"], ["href", "https://www.gob.ec/tramites/1848/webform", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"], ["href", "https://coronavirusecuador.com/", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"], [1, "navbar-item"], ["class", "button is-primary", 3, "click", 4, "ngIf"], [1, "button", "is-primary", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "hackeruna.com/covid19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener() {
            return ctx.expand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
            return ctx.expand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Estad\xEDstica por pa\xEDs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Informaci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Coronavirus COVID-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Consejos para protegerte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Gobierno ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xBFTienes s\xEDntomas de coronavirus?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Documentos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Salvoconducto Ecuador ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ministerio de Salud ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderComponent_button_35_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", ctx.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".title[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: unset;\n  font-weight: normal;\n  font-size: 1.4rem;\n  letter-spacing: 0.15em;\n  color: white;\n}\n\n.title[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvL1NpdGVzL25nLWNvdmlkLTE5L3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUgLmJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9nbyB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuXG4iLCIudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIC5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onbeforeinstallprompt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeinstallprompt', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/country-filter.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/pipes/country-filter.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: CountryFilterPipe */

  /***/
  function srcAppSharedPipesCountryFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryFilterPipe", function () {
      return CountryFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CountryFilterPipe =
    /*#__PURE__*/
    function () {
      function CountryFilterPipe() {
        _classCallCheck(this, CountryFilterPipe);
      }

      _createClass(CountryFilterPipe, [{
        key: "transform",
        value: function transform(items, country) {
          if (!items || !country) {
            return items;
          }

          var newItems = _toConsumableArray(items); // filter items array, items which match and return true will be
          // kept, false will be filtered out


          return newItems.filter(function (item) {
            return item.country === country;
          })[0];
        }
      }]);

      return CountryFilterPipe;
    }();

    CountryFilterPipe.ɵfac = function CountryFilterPipe_Factory(t) {
      return new (t || CountryFilterPipe)();
    };

    CountryFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "countryfilter",
      type: CountryFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'countryfilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/country.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/country.pipe.ts ***!
    \**********************************************/

  /*! exports provided: CountryPipe */

  /***/
  function srcAppSharedPipesCountryPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPipe", function () {
      return CountryPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CountryPipe =
    /*#__PURE__*/
    function () {
      function CountryPipe() {
        _classCallCheck(this, CountryPipe);
      }

      _createClass(CountryPipe, [{
        key: "transform",
        value: function transform(val) {
          var countries = {
            US: 'USA',
            'Korea, South': 'S. Korea',
            'United Kingdom': 'UK',
            'Taiwan*': 'Taiwan',
            'United Arab Emirates': 'UAE',
            'Bahamas, The': 'Bahamas',
            'Cruise Ship': 'Diamond Princess',
            'Cote d\'Ivoire': 'Ivory Coast',
            'occupied Palestinian territory': 'Palestine',
            'Republic of the Congo': 'Congo'
          };

          if (!countries[val]) {
            return val;
          }

          return countries[val];
        }
      }]);

      return CountryPipe;
    }();

    CountryPipe.ɵfac = function CountryPipe_Factory(t) {
      return new (t || CountryPipe)();
    };

    CountryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "country",
      type: CountryPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'country'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/operation.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/pipes/operation.pipe.ts ***!
    \************************************************/

  /*! exports provided: OperationPipe */

  /***/
  function srcAppSharedPipesOperationPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationPipe", function () {
      return OperationPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OperationPipe =
    /*#__PURE__*/
    function () {
      function OperationPipe() {
        _classCallCheck(this, OperationPipe);
      }

      _createClass(OperationPipe, [{
        key: "transform",
        value: function transform(number1, number2, sign) {
          if (sign === '+') {
            return number1 + number2;
          }

          if (sign === '-') {
            return number1 - number2;
          }
        }
      }]);

      return OperationPipe;
    }();

    OperationPipe.ɵfac = function OperationPipe_Factory(t) {
      return new (t || OperationPipe)();
    };

    OperationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "operation",
      type: OperationPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'operation'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.browser.module */
    "./src/app/app.browser.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__["AppBrowserModule"])["catch"](function (err) {
        return console.log(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/macbookpro/Sites/ng-covid-19/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map