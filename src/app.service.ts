import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {
  }

  private readonly logger = new Logger(AppService.name);

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
