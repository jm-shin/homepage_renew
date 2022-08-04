import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('main')
  getMain() {
    return this.appService.getMain();
  }

  @Get('recruiting')
  getRecruiting() {
    return this.appService.getRecruiting();
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

  @Get('menu/footer')
  getFooter() {
    return this.appService.getMenuFooter();
  }

  @Get('company')
  getCompany() {
    return this.appService.getCompany();
  }
}
