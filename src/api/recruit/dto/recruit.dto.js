"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecruitDto = void 0;
var class_validator_1 = require("class-validator");
var RecruitDto = /** @class */ (function () {
    function RecruitDto() {
    }
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsString)()
    ], RecruitDto.prototype, "title");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsString)()
    ], RecruitDto.prototype, "startDate");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsString)()
    ], RecruitDto.prototype, "endDate");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsBoolean)()
    ], RecruitDto.prototype, "limit");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsString)()
    ], RecruitDto.prototype, "task");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsString)()
    ], RecruitDto.prototype, "ability");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsString)()
    ], RecruitDto.prototype, "announce");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)()
    ], RecruitDto.prototype, "keyword");
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true })
    ], RecruitDto.prototype, "default");
    return RecruitDto;
}());
exports.RecruitDto = RecruitDto;
