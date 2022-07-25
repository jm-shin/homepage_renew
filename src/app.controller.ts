import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Recruit } from './interface/recruit.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  //채용 공고 - 등록
  @Post('recruit')
  createRecruit(@Body() body: Recruit) {
    return this.appService.insertRecruit(body);
  }

  // 채용 공고 - 수정
  @Put('recruit/:id')
  updateRecruit(@Param('id') id: string, @Body() body: Recruit) {
    return this.appService.updateRecruit(id, body);
  }

  // 채용 공고 - 삭제
  @Delete('recruit/:id')
  removeRecruit(@Param('id') id: string) {
    return this.appService.deleteRecruit(id);
  }

  // 채용 공고 - 상세보기
  @Get('recruit/detail/:id')
  getRecruit(@Param('id') id: string) {
    return this.appService.findOneRecruit(id);
  }

  // 채용 공고 - 목록
  @Get('recruit/list')
  getRecruitList() {
    return this.appService.findAllRecruit();
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
