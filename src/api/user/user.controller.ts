import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('/login')
  @HttpCode(200)
  login(
    @Body() body: UserDto,
  ) {
    return this.userService.validLoginInfo(body);
  }
}
