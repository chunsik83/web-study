# web-study

웹 프론트엔드를 처음부터 배우면서 만든 연습 프로젝트 모음입니다.
HTML → CSS → 부트스트랩 → jQuery → Ajax(외부 API 연동) → 관리자 대시보드 순으로 진행했습니다.

## 프로젝트

| 폴더 | 프로젝트 | 배운 것 |
|---|---|---|
| [`todo-list/`](./todo-list) | 정말 간단 TODO 리스트 | HTML 기본 구조, CSS 선택자, 부트스트랩 컴포넌트, jQuery로 DOM 추가·삭제 |
| [`movie/`](./movie) | 간편영화후기 | Ajax(`$.ajax`)로 TMDB 외부 API 호출, JSON 응답 다루기, 반복문으로 카드 그리기, 모달 |
| [`crm/`](./crm) | 영업 리포트 대시보드 | Tabler 관리자 템플릿 구조 읽기, ApexCharts·c3.js 차트, 폼 레이아웃 |

## 실행 방법

별도의 빌드 도구가 필요 없습니다. HTML 파일을 브라우저로 열면 됩니다.

```bash
# 예: 로컬 서버로 띄우기 (권장 - 상대경로와 Ajax가 안정적으로 동작)
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

`movie/`는 API 키 설정이 하나 더 필요합니다. [movie/README.md](./movie/README.md)를 참고하세요.

## 폴더 구조

```
web-study/
├── index.html          # 프로젝트 목록 허브 페이지
├── todo-list/
│   ├── main.html
│   └── main.css
├── movie/
│   ├── main.html
│   ├── main.css
│   ├── config.sample.js   # config.js 로 복사해서 API 키 입력
│   └── main_v2.html       # 부트스트랩 스타터 템플릿 (참고용)
└── crm/
    └── main.html
```

## 앞으로 해볼 것

- [ ] `todo-list` — 새로고침해도 할 일이 남아있게 (localStorage)
- [ ] `todo-list` / `movie` — 입력값을 그대로 HTML에 넣고 있어서 XSS에 취약하다. `.text()`로 넣거나 이스케이프 처리하기
- [ ] `movie` — 내가 쓴 후기를 저장하려면 서버가 필요하다 (Flask / Node.js)
- [ ] `movie` — API 키를 진짜로 숨기려면 백엔드가 대신 TMDB를 호출해야 한다
- [ ] `crm` — 상담사 실명 20명이 하드코딩되어 있다. 공개 저장소이므로 가명으로 바꾸기
- [ ] `crm` — 지금은 숫자가 전부 하드코딩된 정적 화면이다. 실제 데이터를 붙여보기
- [ ] 공통 — jQuery 없이 순수 JavaScript(`fetch`, `querySelector`)로 다시 짜보기
