"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getMain = function () {
        return this.appService.getMain();
    };
    AppController.prototype.getRecruiting = function () {
        return this.appService.getRecruiting();
    };
    AppController.prototype.getSolution = function () {
        return this.appService.getSolution();
    };
    AppController.prototype.getTechnology = function () {
        return this.appService.getTechnology();
    };
    AppController.prototype.getDropDownMenu = function () {
        return this.appService.getMenu();
    };
    AppController.prototype.getHeaderChangeData = function () {
        return this.appService.getMenuHeader();
    };
    AppController.prototype.getFooter = function () {
        return this.appService.getMenuFooter();
    };
    AppController.prototype.getCompany = function () {
        return this.appService.getCompany();
    };
    __decorate([
        (0, common_1.Get)('/main')
    ], AppController.prototype, "getMain");
    __decorate([
        (0, common_1.Get)('recruiting')
    ], AppController.prototype, "getRecruiting");
    __decorate([
        (0, common_1.Get)('solution')
    ], AppController.prototype, "getSolution");
    __decorate([
        (0, common_1.Get)('technology')
    ], AppController.prototype, "getTechnology");
    __decorate([
        (0, common_1.Get)('menu')
    ], AppController.prototype, "getDropDownMenu");
    __decorate([
        (0, common_1.Get)('menu/header')
    ], AppController.prototype, "getHeaderChangeData");
    __decorate([
        (0, common_1.Get)('menu/footer')
    ], AppController.prototype, "getFooter");
    __decorate([
        (0, common_1.Get)('company')
    ], AppController.prototype, "getCompany");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
