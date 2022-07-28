import { Test, TestingModule } from '@nestjs/testing';
import { RecruitController } from './recruit.controller';
import { RecruitService } from './recruit.service';
import { RecruitServiceFactory } from '../../../test/mock/jest.mock';
import { MockType } from '../../../test/mock/mock.type';

describe('RecruitController', () => {
  let controller: RecruitController;
  let recruitService: MockType<RecruitService>;

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
});
