import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('API Test (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const recruitEdit = {
    title: '채용 공고 제목',
    startDate: '0000-00-00',
    endDate: '0000-00-00',
    limit: false,
    task: [
      '업무1',
      '업무2',
    ],
    ability: [
      '역량',
    ],
    announce: [
      '- 전형절차: 서류전형 :앞쪽_화살표: 실무 기술면접 :앞쪽_화살표: 최종 임원면접 :앞쪽_화살표: 입사',
      '- 서류접수 기간: 상시채용',
      '- 고용형태: 정규직',
      '- 근무장소: 서울시 강남구',
    ],
    default: [
      '* 전형 절차는 일정 및 상황에 따라 변결될 수 있습니다.',
      '* 지원서 내용 중 허위사실 있는 경우에는 합격 취소될 수 있습니다.',
      '* 국가유공자 및 장애인 등 취업보호대상자는 관계법령에 따라 우대합니다',
    ],
    keyword: [
      '키워드',
    ],
  };

  describe('채용 공고 API', () => {
    it('/recruit (POST) should return 200', async () => {
      const response = await request(app.getHttpServer())
        .post('/recruit')
        .send(recruitEdit);
      expect(response.status).toBe(200);
    });
    it('/recruit (PUT) should return 200', async () => {
      const id = '62e21e6655dd55605589f09e';
      const response = await request(app.getHttpServer())
        .put('/recruit/' + id)
        .send(recruitEdit);
      expect(response.status).toBe(200);
    });
    it('/recruit (PUT) sif none existing should return 404', async () => {
      const id = '';
      const response = await request(app.getHttpServer())
        .put('/recruit' + id)
        .send();
      expect(response.status).toBe(404);
    });
  });

  describe('GET API', () => {
    it('/main (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/main')
        .send();
      expect(res.status).toBe(200);
    });
    it('/recruiting (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/recruiting')
        .send();
      expect(res.status).toBe(200);
    });
    it('/solution (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/solution')
        .send();
      expect(res.status).toBe(200);
    });
    it('/technology (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/technology')
        .send();
      expect(res.status).toBe(200);
    });
    it('/menu (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/menu')
        .send();
      expect(res.status).toBe(200);
    });
    it('/menu/footer (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/menu/footer')
        .send();
      expect(res.status).toBe(200);
    });
    it('/company (GET) should return 200', async () => {
      const res = await request(app.getHttpServer())
        .get('/company')
        .send();
      expect(res.status).toBe(200);
    });
  });
});
