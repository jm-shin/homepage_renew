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

  @Get('menu/header')
  getHeaderChangeData() {
    return this.appService.getMenuHeader();
  }

  @Get('menu/footer')
  getFooter() {
    return this.appService.getMenuFooter();
  }

  @Get('introduce')
  getIntroduce() {
    return this.appService.getIntroduce();
  }
}
