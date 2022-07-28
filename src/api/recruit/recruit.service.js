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
exports.RecruitService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var mongodb_1 = require("mongodb");
var RecruitService = /** @class */ (function () {
    function RecruitService(connection) {
        this.connection = connection;
        this.logger = new common_1.Logger(RecruitService_1.name);
    }
    RecruitService_1 = RecruitService;
    RecruitService.prototype.insertRecruit = function (recruitInfo) {
        this.logger.log("insert data: ".concat(JSON.stringify(recruitInfo)));
        return this.connection.collection('recruit').insertOne(recruitInfo);
    };
    RecruitService.prototype.findOneRecruit = function (mongoId) {
        this.logger.log("findOne mongo id: ".concat(mongoId));
        return this.connection.collection('recruit').aggregate([
            { $match: { _id: new mongodb_1.ObjectId(mongoId) } },
            {
                $project: {
                    id: '$_id',
                    _id: 0,
                    title: 1,
                    startDate: 1,
                    endDate: 1,
                    limit: 1,
                    task: 1,
                    ability: 1,
                    announce: 1,
                    keyword: 1
                }
            },
        ]).toArray();
    };
    RecruitService.prototype.findAllRecruit = function () {
        this.logger.log('findAll recruit start');
        return this.connection.collection('recruit').aggregate([{
                $project: {
                    id: '$_id',
                    _id: 0,
                    title: 1,
                    startDate: 1,
                    endDate: 1,
                    keyword: 1
                }
            }]).toArray();
    };
    RecruitService.prototype.updateRecruit = function (mongoId, info) {
        this.logger.log("update mongo id: ".concat(mongoId, ", info: ").concat(JSON.stringify(info)));
        delete info.id;
        return this.connection.collection('recruit').updateOne({ _id: new mongodb_1.ObjectId(mongoId) }, { $set: info });
    };
    RecruitService.prototype.deleteRecruit = function (mongoId) {
        this.logger.log("delete mongo id: ".concat(mongoId));
        return this.connection.collection('recruit').deleteOne({ _id: new mongodb_1.ObjectId(mongoId) });
    };
    var RecruitService_1;
    RecruitService = RecruitService_1 = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_1.InjectConnection)())
    ], RecruitService);
    return RecruitService;
}());
exports.RecruitService = RecruitService;
