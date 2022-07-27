import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RecruitModule } from './api/recruit/recruit.module';
import { UserModule } from './api/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_HOST || 'mongodb://localhost:27017/homepage'),
    RecruitModule,
    UserModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
}
