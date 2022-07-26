import { Injectable, Logger } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class RecruitService {
  constructor(
    @InjectConnection()
    private connection: Connection,
  ) {}

  private readonly logger = new Logger(RecruitService.name);

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
}
