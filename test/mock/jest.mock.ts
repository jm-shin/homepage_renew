import { RecruitService } from '../../src/api/recruit/recruit.service';

type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

export const RecruitServiceFactory: () => MockType<RecruitService> = jest.fn(
  () => ({
    insertRecruit: jest.fn(),
    updateRecruit: jest.fn(),
    deleteRecruit: jest.fn(),
    findAllRecruit: jest.fn(),
    findOneRecruit: jest.fn(),
  }),
);