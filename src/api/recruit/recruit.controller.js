"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RecruitController = void 0;
var common_1 = require("@nestjs/common");
var http_exception_filter_1 = require("../../common/filter/http-exception.filter");
var RecruitController = /** @class */ (function () {
    function RecruitController(recruitService) {
        this.recruitService = recruitService;
    }
    //채용 공고 - 등록
    RecruitController.prototype.createRecruit = function (body) {
        return this.recruitService.insertRecruit(body);
    };
    // 채용 공고 - 수정
    RecruitController.prototype.updateRecruit = function (id, body) {
        return this.recruitService.updateRecruit(id, body);
    };
    // 채용 공고 - 삭제
    RecruitController.prototype.removeRecruit = function (id) {
        return this.recruitService.deleteRecruit(id);
    };
    // 채용 공고 - 상세보기
    RecruitController.prototype.getRecruit = function (id) {
        return this.recruitService.findOneRecruit(id);
    };
    // 채용 공고 - 목록
    RecruitController.prototype.getRecruitList = function () {
        return this.recruitService.findAllRecruit();
    };
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(200),
        __param(0, (0, common_1.Body)())
    ], RecruitController.prototype, "createRecruit");
    __decorate([
        (0, common_1.Put)('/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], RecruitController.prototype, "updateRecruit");
    __decorate([
        (0, common_1.Delete)('/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], RecruitController.prototype, "removeRecruit");
    __decorate([
        (0, common_1.Get)('/detail/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], RecruitController.prototype, "getRecruit");
    __decorate([
        (0, common_1.Get)('/list')
    ], RecruitController.prototype, "getRecruitList");
    RecruitController = __decorate([
        (0, common_1.Controller)('recruit'),
        (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter)
    ], RecruitController);
    return RecruitController;
}());
exports.RecruitController = RecruitController;
