import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {
  }

  async getInfoByCollection(collectionName) {
    console.log(`[app.service] get ${collectionName}()`);
    const data = await this.connection.collection(collectionName).findOne();
    const { _id, ...result } = data;
    return result;
  }

  async getMain() {
    return await this.getInfoByCollection('main');
  }

  async getCounter() {
    return await this.getInfoByCollection('counter');
  }

  async getCareer() {
    return await this.getInfoByCollection('career');
  }

  async getSolution() {
    return await this.getInfoByCollection('solution');
  }

  async getTechnology() {
    return await this.getInfoByCollection('technology');
  }

  async getMenu() {
    return await this.getInfoByCollection('menu');
  }

  async getIntroduce() {
    return await this.getInfoByCollection('introduce');
  }
}
