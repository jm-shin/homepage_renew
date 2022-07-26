import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseFilters } from '@nestjs/common';
import { RecruitService } from './recruit.service';
import { RecruitDto } from './dto/recruit.dto';
import { HttpExceptionFilter } from '../../common/filter/http-exception.filter';


@Controller('recruit')
@UseFilters(HttpExceptionFilter)
export class RecruitController {
  constructor(
    private readonly recruitService: RecruitService,
  ) {
  }

  //채용 공고 - 등록
  @Post()
  @HttpCode(200)
  createRecruit(@Body() body: RecruitDto) {
    return this.recruitService.insertRecruit(body);
  }

  // 채용 공고 - 수정
  @Put('/:id')
  updateRecruit(@Param('id') id: string, @Body() body: RecruitDto) {
    return this.recruitService.updateRecruit(id, body);
  }

  // 채용 공고 - 삭제
  @Delete('/:id')
  removeRecruit(@Param('id') id: string) {
    return this.recruitService.deleteRecruit(id);
  }

  // 채용 공고 - 상세보기
  @Get('/detail/:id')
  getRecruit(@Param('id') id: string) {
    return this.recruitService.findOneRecruit(id);
  }

  // 채용 공고 - 목록
  @Get('/list')
  getRecruitList() {
    return this.recruitService.findAllRecruit();
  }
}
