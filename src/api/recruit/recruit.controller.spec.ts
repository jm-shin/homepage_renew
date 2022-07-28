import { Test, TestingModule } from '@nestjs/testing';
import { RecruitController } from './recruit.controller';
import { RecruitService } from './recruit.service';
import { RecruitServiceFactory } from '../../../test/mock/jest.mock';
import { MockType } from '../../../test/mock/mock.type';
import { Recruit } from '../../common/interface/recruit.interface';

describe('RecruitController', () => {
  let controller: RecruitController;
  let recruitService: MockType<RecruitService>;

  const recruits: Recruit[] = [
    {
      _id: '62e21e6655dd55605589f09e',
      title: '제목',
      startDate: '2022-07-25',
      endDate: '2022-08-25',
      limit: true,
      task: '백엔드 개발자',
      ability: 'Java/Spring, JS/Express',
      announce: '채용절차 안내 필드입니다.',
      keyword: ['취업지원금', '내일채움공제'],
      default: [],
    },
    {
      _id: '32e21e6655dd55605589f09c',
      title: '제목2',
      startDate: '2022-07-26',
      endDate: '2022-08-26',
      limit: true,
      task: '프론트엔드 개발자',
      ability: 'HTML, CSS, JS, React.js',
      announce: '채용절차 안내 필드입니다.',
      keyword: ['취업지원금', '내일채움공제'],
      default: [],
    },
    {
      _id: '72e21e6655dd55605589f19a',
      title: '제목2',
      startDate: '2022-07-26',
      endDate: '2022-08-26',
      limit: true,
      task: 'DevOps',
      ability: 'AWS',
      announce: '채용절차 안내 필드입니다.',
      keyword: ['취업지원금', '내일채움공제'],
      default: [],
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecruitController],
      providers: [
        {
          provide: RecruitService,
          useFactory: RecruitServiceFactory,
        },
      ],
    }).compile();

    controller = await module.resolve<RecruitController>(RecruitController);
    recruitService = await module.get(RecruitService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET on /recruit/list return all recruit info', async () => {
    recruitService.findAllRecruit.mockReturnValue(recruits);
    const result = await controller.getRecruitList();
    expect(result.length).toBe(3);
  });

});
