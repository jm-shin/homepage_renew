import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('main')
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

  @Get('headerChangeData')
  getHeaderChangeData() {
    return this.appService.getHeaderChangeData();
  }

  @Get('dropDownMenu')
  getDropDownMenu() {
    return this.appService.getDropDownMenu();
  }

  @Get('footer')
  getFooter() {
    return this.appService.getFooter();
  }
}
