import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class RecruitService {
  constructor(
    @InjectConnection()
    private connection: Connection,
  ) {
  }

  private readonly logger = new Logger(RecruitService.name);

  insertRecruit(recruitInfo) {
    this.logger.log(`insert data: ${JSON.stringify(recruitInfo)}`);
    return this.connection.collection('recruit').insertOne(recruitInfo);
  }

  findOneRecruit(mongoId) {
    this.logger.log(`findOne mongo id: ${mongoId}`);
    return this.connection.collection('recruit').aggregate([
      { $match: { _id: new ObjectId(mongoId) } },
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
          keyword: 1,
          default: 1,
        },
      },
    ]).toArray();
  }

  findAllRecruit() {
    this.logger.log('findAll recruit start');
    return this.connection.collection('recruit').aggregate([{
      $project: {
        id: '$_id',
        _id: 0,
        title: 1,
        startDate: 1,
        endDate: 1,
        keyword: 1,
      },
    }]).toArray();
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
