import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getMain() {
    return this.appService.getMain();
  }

  @Get('counter')
  getCounter() {
    return this.appService.getCounter();
  }

  @Get('career')
  getCareer() {
    return this.appService.getCareer();
  }

  @Get('solution')
  getSolution() {
    return this.appService.getSolution();
  }

  @Get('technology')
  getTechnology() {
    return this.appService.getTechnology();
  }

  @Get('menu')
  getDropDownMenu() {
    return this.appService.getMenu();
  }

  @Get('introduce')
  getIntroduce() {
    return this.appService.getIntroduce();
  }
}
