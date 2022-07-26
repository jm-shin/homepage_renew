import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/main')
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

  @Get('menu/header')
  getHeaderChangeData() {
    return this.appService.getMenuHeader();
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
