import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}

  getMain() {
    console.log(`[app.service] getMain()`);
    return this.connection.collection('main').findOne();
  }
}
