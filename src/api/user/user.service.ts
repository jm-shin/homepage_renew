import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection()
    private connection: Connection,
  ) {
  }

  private readonly logger = new Logger(UserService.name);

  async validLoginInfo(info) {
    this.logger.log(`valid login info id: ${info.username}`);

    try {
      const result = await this.connection.collection('user')
        .findOne({ username: info.username });

      if (!result) throw new UnauthorizedException('해당 아이디 정보가 없습니다.');

      if (info.password === result.password) return;
      else throw new UnauthorizedException('로그인 정보가 유효하지 않습니다.');
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
