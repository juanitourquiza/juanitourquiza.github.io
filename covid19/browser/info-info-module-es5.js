function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"], {
  /***/
  "./src/app/info/advise/advise.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/info/advise/advise.component.ts ***!
    \*************************************************/

  /*! exports provided: AdviseComponent */

  /***/
  function srcAppInfoAdviseAdviseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdviseComponent", function () {
      return AdviseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var AdviseComponent =
    /*#__PURE__*/
    function () {
      function AdviseComponent(title, meta) {
        _classCallCheck(this, AdviseComponent);

        this.title = title;
        this.meta = meta;
      }

      _createClass(AdviseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.title.setTitle('Coronavirus COVID-19 : conseils et informations');
          var tags = [{
            name: 'description',
            content: 'Retrouvez tous les conseils pour se protéger contrer le Coronavirus COVID-19'
          }, {
            name: 'og:type',
            content: 'website'
          }, {
            name: 'og:site_name',
            content: 'https://www.cascoronavirus.fr/'
          }, {
            name: 'og:url',
            content: 'https://www.cascoronavirus.fr/infos/conseils'
          }, {
            name: 'og:title',
            content: 'Coronavirus COVID-19 : informations, symptômes, conseils'
          }, {
            name: 'og:description',
            content: 'Retrouvez tous les conseils pour se protéger contrer le Coronavirus COVID-19'
          }, {
            name: 'og:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:card',
            content: 'summary'
          }, {
            name: 'twitter:title',
            content: 'Coronavirus COVID-19 : informations, symptômes, conseils'
          }, {
            name: 'twitter:description',
            content: 'Retrouvez tous les conseils pour se protéger contrer le Coronavirus COVID-19'
          }, {
            name: 'twitter:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:site',
            content: '@SouryvathN'
          }];
          tags.forEach(function (tag) {
            _this.meta.updateTag(tag);
          });
        }
      }]);

      return AdviseComponent;
    }();

    AdviseComponent.ɵfac = function AdviseComponent_Factory(t) {
      return new (t || AdviseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };

    AdviseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdviseComponent,
      selectors: [["app-advise"]],
      decls: 15,
      vars: 0,
      consts: [[1, "content"], [1, "title"]],
      template: function AdviseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xBFC\xF3mo protegerse a usted y a otros del Coronavirus Covid-19 diariamente?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lava tus manos muy regularmente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tose o estornuda en el codo o en un pa\xF1uelo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Saluda sin estrechar la mano, no beses a nadie ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Use un pa\xF1uelo desechable y t\xEDrelo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Use una m\xE1scara si est\xE1 enfermo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Qu\xE9dese en casa, evite el contacto con otros. Algunas personas transmiten el virus sin sentir los s\xEDntomas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vYWR2aXNlL2FkdmlzZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdviseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-advise',
          templateUrl: './advise.component.html',
          styleUrls: ['./advise.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/disease-test/disease-test.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/info/disease-test/disease-test.component.ts ***!
    \*************************************************************/

  /*! exports provided: DiseaseTestComponent */

  /***/
  function srcAppInfoDiseaseTestDiseaseTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiseaseTestComponent", function () {
      return DiseaseTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var DiseaseTestComponent =
    /*#__PURE__*/
    function () {
      function DiseaseTestComponent(title, meta) {
        _classCallCheck(this, DiseaseTestComponent);

        this.title = title;
        this.meta = meta;
      }

      _createClass(DiseaseTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.title.setTitle('Faites un test de symptômes du Coronavirus COVID-19');
          var tags = [{
            name: 'description',
            content: 'Faites un test pour savoir si vous avez les symptômes et la maladie du Coronavirus COVID-19'
          }, {
            name: 'og:type',
            content: 'website'
          }, {
            name: 'og:site_name',
            content: 'https://www.cascoronavirus.fr/'
          }, {
            name: 'og:url',
            content: 'https://www.cascoronavirus.fr/infos/maladie-test-coronavirus'
          }, {
            name: 'og:title',
            content: 'Faites un test de symptômes du Coronavirus COVID-19'
          }, {
            name: 'og:description',
            content: 'Faites un test pour savoir si vous avez les symptômes et la maladie du Coronavirus COVID-19'
          }, {
            name: 'og:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:card',
            content: 'summary'
          }, {
            name: 'twitter:title',
            content: 'Faites un test de symptômes du Coronavirus COVID-19'
          }, {
            name: 'twitter:description',
            content: 'Faites un test pour savoir si vous avez les symptômes et la maladie du Coronavirus COVID-19'
          }, {
            name: 'twitter:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:site',
            content: '@SouryvathN'
          }];
          tags.forEach(function (tag) {
            _this2.meta.updateTag(tag);
          });
        }
      }]);

      return DiseaseTestComponent;
    }();

    DiseaseTestComponent.ɵfac = function DiseaseTestComponent_Factory(t) {
      return new (t || DiseaseTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };

    DiseaseTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DiseaseTestComponent,
      selectors: [["app-disease-test"]],
      decls: 8,
      vars: 0,
      consts: [[1, "title"], [1, "content"], ["href", "https://coronavirusecuador.com/prueba-covid-19/", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "is-link"]],
      template: function DiseaseTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xBFTiene el coronavirus COVID-19?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xBFCrees que has estado expuesto al coronavirus COVID-19 y tienes s\xEDntomas? Me mantengo vigilante? Estoy programando una teleconsulta? Yo llamo 171? Realice la prueba para responder como ciudadano informado de acuerdo con sus s\xEDntomas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Test COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vZGlzZWFzZS10ZXN0L2Rpc2Vhc2UtdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiseaseTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-disease-test',
          templateUrl: './disease-test.component.html',
          styleUrls: ['./disease-test.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/disease/disease.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/info/disease/disease.component.ts ***!
    \***************************************************/

  /*! exports provided: DiseaseComponent */

  /***/
  function srcAppInfoDiseaseDiseaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiseaseComponent", function () {
      return DiseaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var DiseaseComponent =
    /*#__PURE__*/
    function () {
      function DiseaseComponent(title, meta) {
        _classCallCheck(this, DiseaseComponent);

        this.title = title;
        this.meta = meta;
      }

      _createClass(DiseaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.title.setTitle('Coronavirus COVID-19 : informations, symptômes, conseils');
          var tags = [{
            name: 'description',
            content: 'Retrouvez les informations du Coronavirus COVID-19 : symptômes, conseils, vaccins, confinement, transmission, maladie'
          }, {
            name: 'og:type',
            content: 'website'
          }, {
            name: 'og:site_name',
            content: 'https://www.cascoronavirus.fr/'
          }, {
            name: 'og:url',
            content: 'https://www.cascoronavirus.fr/infos/maladie-coronavirus'
          }, {
            name: 'og:title',
            content: 'Coronavirus COVID-19 : informations, symptômes, conseils'
          }, {
            name: 'og:description',
            content: 'Retrouvez les informations du Coronavirus COVID-19 : symptômes, conseils, vaccins, confinement, transmission, maladie'
          }, {
            name: 'og:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:card',
            content: 'summary'
          }, {
            name: 'twitter:title',
            content: 'Coronavirus COVID-19 : informations, symptômes, conseils'
          }, {
            name: 'twitter:description',
            content: 'Retrouvez les informations du Coronavirus COVID-19 : symptômes, conseils, vaccins, confinement, transmission, maladie'
          }, {
            name: 'twitter:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:site',
            content: '@SouryvathN'
          }];
          tags.forEach(function (tag) {
            _this3.meta.updateTag(tag);
          });
        }
      }]);

      return DiseaseComponent;
    }();

    DiseaseComponent.ɵfac = function DiseaseComponent_Factory(t) {
      return new (t || DiseaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };

    DiseaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DiseaseComponent,
      selectors: [["app-disease"]],
      decls: 49,
      vars: 0,
      consts: [[1, "title"], [1, "content"], ["href", "https://coronavirusecuador.com/preguntas-frecuentes/", "target", "_blank", "rel", "noopener noreferrer"]],
      template: function DiseaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Informaci\xF3n sobre el coronavirus COVID-19\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Desde enero de 2020, una epidemia de coronavirus COVID-19 se ha propagado desde China. La idea de esta plataforma es mantener informada a la gente que nos visita ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ante la epidemia, hay pasos simples para preservar su salud y la de quienes lo rodean: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lava tus manos muy regularmente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tose o estornuda en el codo o en un pa\xF1uelo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Saluda sin estrechar la mano, deja de besarte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Uso y eliminaci\xF3n de pa\xF1uelos desechables. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Evite reuniones, limite viajes y contactos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \xBFQu\xE9 es el coronavirus COVID-19? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Los coronavirus son una gran familia de virus, que causan enfermedades que van desde un simple resfriado (algunos los virus estacionales son coronavirus) a patolog\xEDas m\xE1s severas como MERS-COV o SARS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " El virus identificado en enero de 2020 en China es un nuevo coronavirus, llamado SARS-CoV-2. La enfermedad causada por Este coronavirus ha sido nombrado COVID-19 por la Organizaci\xF3n Mundial de la Salud - OMS. Desde el 11 de marzo de 2020, la OMS describe la situaci\xF3n global de COVID-19 como una pandemia; es decir, la epidemia ahora es global. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \xBFCu\xE1les son los s\xEDntomas del coronavirus COVID-19? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Los s\xEDntomas principales son fiebre o sensaci\xF3n de fiebre y tos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " La p\xE9rdida repentina del olfato sin obstrucci\xF3n de la nariz y la p\xE9rdida completa del gusto tambi\xE9n son s\xEDntomas que se han observado en pacientes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \xBFHay una vacuna? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " No hay vacuna para el coronavirus COVID-19 en este momento. Varios tratamientos est\xE1n en progreso, en relaci\xF3n con la OMS, para ser utilizada contra el Coronavirus COVID-19. Mientras tanto, el El tratamiento es sintom\xE1tico. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Tomar medicamentos antiinflamatorios (ibuprofeno ...) podr\xEDa ser un factor en el empeoramiento de la infecci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " En general, se debe prohibir la automedicaci\xF3n con medicamentos antiinflamatorios. Adem\xE1s, parecer\xEDa que Los medicamentos antiinflamatorios no esteroideos pueden ser un factor en el empeoramiento de la infecci\xF3n. Entonces en el caso Infecci\xF3n por coronavirus COVID-19, se recomienda paracetamol. Si ya est\xE1 tomando medicamentos antiinflamatorios. o si tiene dudas, consulte a su m\xE9dico. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \xBFC\xF3mo se transmite el coronavirus COVID-19? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " La enfermedad se transmite por secreciones invisibles por estornudos o tos. Nosotros por lo tanto, consideramos que no es necesario el contacto cercano con una persona enferma para transmitir la enfermedad. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \xBFCu\xE1l es el per\xEDodo de incubaci\xF3n de la enfermedad? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " El per\xEDodo de incubaci\xF3n es el per\xEDodo entre la contaminaci\xF3n y el inicio de los primeros s\xEDntomas. El plazo El per\xEDodo de incubaci\xF3n del coronavirus COVID-19 es de 3 a 5 d\xEDas en general, pero puede durar hasta 14 d\xEDas. Durante este per\xEDodo, el sujeto puede ser contagioso: puede portar el virus antes de la aparici\xF3n de s\xEDntomas o la aparici\xF3n de se\xF1ales d\xE9biles. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Preguntas Frecuentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vZGlzZWFzZS9kaXNlYXNlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiseaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-disease',
          templateUrl: './disease.component.html',
          styleUrls: ['./disease.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/gouv/gouv.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/info/gouv/gouv.component.ts ***!
    \*********************************************/

  /*! exports provided: GouvComponent */

  /***/
  function srcAppInfoGouvGouvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GouvComponent", function () {
      return GouvComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var GouvComponent =
    /*#__PURE__*/
    function () {
      function GouvComponent(title, meta) {
        _classCallCheck(this, GouvComponent);

        this.title = title;
        this.meta = meta;
      }

      _createClass(GouvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initMetaTag();
        }
      }, {
        key: "initMetaTag",
        value: function initMetaTag() {
          var _this4 = this;

          this.title.setTitle('Infos et attestations Coronavirus COVID-19 du gouvernement');
          var tags = [{
            name: 'description',
            content: 'Retrouver les informations et les attestations de sortie du Gouvernement à cause du Coronavirus COVID-19'
          }, {
            name: 'og:type',
            content: 'website'
          }, {
            name: 'og:site_name',
            content: 'https://www.cascoronavirus.fr/'
          }, {
            name: 'og:url',
            content: 'https://www.cascoronavirus.fr/infos/gouvernement'
          }, {
            name: 'og:title',
            content: 'Infos et attestations Coronavirus COVID-19 du gouvernement'
          }, {
            name: 'og:description',
            content: 'Retrouver les informations et les attestations de sortie du Gouvernement à cause du Coronavirus COVID-19'
          }, {
            name: 'og:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:card',
            content: 'summary'
          }, {
            name: 'twitter:title',
            content: 'Infos et attestations Coronavirus COVID-19 du gouvernement'
          }, {
            name: 'twitter:description',
            content: 'Retrouver les informations et les attestations de sortie du Gouvernement à cause du Coronavirus COVID-19'
          }, {
            name: 'twitter:image',
            content: 'https://www.cascoronavirus.fr/assets/images/meta_og.png'
          }, {
            name: 'twitter:site',
            content: '@SouryvathN'
          }];
          tags.forEach(function (tag) {
            _this4.meta.updateTag(tag);
          });
        }
      }]);

      return GouvComponent;
    }();

    GouvComponent.ɵfac = function GouvComponent_Factory(t) {
      return new (t || GouvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };

    GouvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GouvComponent,
      selectors: [["app-gouv"]],
      decls: 9,
      vars: 0,
      consts: [[1, "content"], [1, "title"], ["href", "https://twitter.com/Lenin", 1, "twitter-timeline"], ["href", "https://coronavirusecuador.com/", "target", "_blank", "rel", "noopener noreferrer"]],
      template: function GouvComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Informaci\xF3n del gobierno del Ecuador sobre Coronavirus COVID-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tweets by Lenin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Informaci\xF3n oficial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vZ291di9nb3V2LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GouvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gouv',
          templateUrl: './gouv.component.html',
          styleUrls: ['./gouv.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/info/info-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: infoRoutes, InfoRoutingModule */

  /***/
  function srcAppInfoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "infoRoutes", function () {
      return infoRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoRoutingModule", function () {
      return InfoRoutingModule;
    });
    /* harmony import */


    var _disease_disease_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./disease/disease.component */
    "./src/app/info/disease/disease.component.ts");
    /* harmony import */


    var _gouv_gouv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gouv/gouv.component */
    "./src/app/info/gouv/gouv.component.ts");
    /* harmony import */


    var _advise_advise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./advise/advise.component */
    "./src/app/info/advise/advise.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _disease_test_disease_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./disease-test/disease-test.component */
    "./src/app/info/disease-test/disease-test.component.ts");

    var infoRoutes = [{
      component: _advise_advise_component__WEBPACK_IMPORTED_MODULE_2__["AdviseComponent"],
      path: "consejos"
    }, {
      component: _gouv_gouv_component__WEBPACK_IMPORTED_MODULE_1__["GouvComponent"],
      path: "gobierno"
    }, {
      component: _disease_test_disease_test_component__WEBPACK_IMPORTED_MODULE_5__["DiseaseTestComponent"],
      path: "enfermedad-test-coronavirus"
    }, {
      component: _disease_disease_component__WEBPACK_IMPORTED_MODULE_0__["DiseaseComponent"],
      path: "enfermedad-coronavirus"
    }];

    var InfoRoutingModule = function InfoRoutingModule() {
      _classCallCheck(this, InfoRoutingModule);
    };

    InfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: InfoRoutingModule
    });
    InfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function InfoRoutingModule_Factory(t) {
        return new (t || InfoRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(infoRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InfoRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InfoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(infoRoutes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.module.ts":
  /*!*************************************!*\
    !*** ./src/app/info/info.module.ts ***!
    \*************************************/

  /*! exports provided: InfoModule */

  /***/
  function srcAppInfoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoModule", function () {
      return InfoModule;
    });
    /* harmony import */


    var _info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./info-routing.module */
    "./src/app/info/info-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _gouv_gouv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gouv/gouv.component */
    "./src/app/info/gouv/gouv.component.ts");
    /* harmony import */


    var _advise_advise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./advise/advise.component */
    "./src/app/info/advise/advise.component.ts");
    /* harmony import */


    var _disease_test_disease_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./disease-test/disease-test.component */
    "./src/app/info/disease-test/disease-test.component.ts");
    /* harmony import */


    var _disease_disease_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./disease/disease.component */
    "./src/app/info/disease/disease.component.ts");

    var InfoModule = function InfoModule() {
      _classCallCheck(this, InfoModule);
    };

    InfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InfoModule
    });
    InfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InfoModule_Factory(t) {
        return new (t || InfoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_0__["InfoRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InfoModule, {
        declarations: [_gouv_gouv_component__WEBPACK_IMPORTED_MODULE_3__["GouvComponent"], _advise_advise_component__WEBPACK_IMPORTED_MODULE_4__["AdviseComponent"], _disease_test_disease_test_component__WEBPACK_IMPORTED_MODULE_5__["DiseaseTestComponent"], _disease_disease_component__WEBPACK_IMPORTED_MODULE_6__["DiseaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_0__["InfoRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_gouv_gouv_component__WEBPACK_IMPORTED_MODULE_3__["GouvComponent"], _advise_advise_component__WEBPACK_IMPORTED_MODULE_4__["AdviseComponent"], _disease_test_disease_test_component__WEBPACK_IMPORTED_MODULE_5__["DiseaseTestComponent"], _disease_disease_component__WEBPACK_IMPORTED_MODULE_6__["DiseaseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_0__["InfoRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=info-info-module-es5.js.map