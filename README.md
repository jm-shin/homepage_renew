## Description

Homepage Renewal API

### API LIST

|URL|method|description|
|---|---|---|
|/|GET|홈페이지 메인 정보 불러오기|
|/menu|GET|홈페이지 메뉴 정보 불러오기|
|/menu/header|GET|홈페이지 메뉴 header 정보 불러오기|
|/menu/footer|GET|홈페이지 메뉴 footer 정보 불러오기|
|/technology|GET|홈페이지 기술 정보 불러오기|
|/introduce|GET|홈페이지 소개 정보 불러오기|
|/solution|GET|홈페이지 솔루션 정보 불러오기|
|/career|GET|홈페이지 채용 정보 불러오기|
|/counter|GET|홈페이지 방문자수 불러오기|
|/user/login|POST|유저 로그인|
|/recruit|POST|채용 공고 등록|
|/recruit/:id|PUT|채용 공고 수정|
|/recruit/:id|DEL|채용 공고 삭제|
|/recruit/detail/:id|GET|채용 공고 상세보기|
|/recruit/list|GET|채용 공고 리스트|

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Setting

### Create File
root 경로에 .env 파일 생성

```text
MONGO_HOST=mongodb://[username:password@]localhost:27017/homepage
```

### Mongo DB

```bash
> use homepage
> db.createCollection()
```

### Mongo Collection List

- main
- counter
- career
- solution
- technology
- menu
- introduce
- user
- recruit