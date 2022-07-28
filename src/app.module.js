"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var config_1 = require("@nestjs/config");
var recruit_module_1 = require("./api/recruit/recruit.module");
var user_module_1 = require("./api/user/user.module");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot(),
                mongoose_1.MongooseModule.forRoot(process.env.MONGO_HOST || 'mongodb://localhost:27017/homepage'),
                recruit_module_1.RecruitModule,
                user_module_1.UserModule,
            ],
            providers: [app_service_1.AppService],
            controllers: [app_controller_1.AppController]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
