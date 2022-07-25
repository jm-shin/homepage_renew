import { Injectable, NotFoundException, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {
  }

  private readonly logger = new Logger(AppService.name);

  insertRecruit(recruitInfo) {
    this.logger.log(`insert data: ${JSON.stringify(recruitInfo)}`);
    return this.connection.collection('recruit').insertOne(recruitInfo);
  }

  findOneRecruit(mongoId) {
    this.logger.log(`findOne mongo id: ${mongoId}`);
    return this.connection.collection('recruit').findOne({ _id: new ObjectId(mongoId) });
  }

  findAllRecruit() {
    this.logger.log('findAll recruit start');
    return this.connection.collection('recruit').find({}).toArray();
  }

  updateRecruit(mongoId, info) {
    this.logger.log(`update mongo id: ${mongoId}, info: ${JSON.stringify(info)}`);
    delete info.id;
    return this.connection.collection('recruit').updateOne({ _id: new ObjectId(mongoId) }, { $set: info });
  }

  deleteRecruit(mongoId) {
    this.logger.log(`delete mongo id: ${mongoId}`);
    return this.connection.collection('recruit').deleteOne({ _id: new ObjectId(mongoId) });
  }

  async getInfoByCollection(collectionName) {
    this.logger.log(`[getInfoByCollection] get ${collectionName}()`);
    const data = await this.connection.collection(collectionName).findOne();
    if (!data) throw new NotFoundException();
    const { _id, ...result } = data;
    return result;
  }

  async getInfoByMenuCollection(menuName) {
    this.logger.log(`find menu ${menuName}`);
    const menuInfo = await this.connection.collection('menu')
      .aggregate([
        {
          $project: {
            '_id': 0,
            [menuName]: 1,
          },
        },
      ]).toArray();

    if (!menuInfo) throw new NotFoundException();
    return menuInfo.filter((item) => Object.keys(item).length > 0)[0][menuName];
  }

  async getMain() {
    return await this.getInfoByCollection('main');
  }

  async getRecruiting() {
    return await this.getInfoByCollection('recruiting');
  }

  async getSolution() {
    return await this.getInfoByCollection('solution');
  }

  async getTechnology() {
    return await this.getInfoByCollection('technology');
  }

  async getMenu() {
    return await this.getInfoByMenuCollection('default');
  }

  async getMenuHeader() {
    return await this.getInfoByMenuCollection('header');
  }

  async getMenuFooter() {
    return await this.getInfoByMenuCollection('footer');
  }

  async getCompany() {
    return await this.getInfoByCollection('company');
  }
}
