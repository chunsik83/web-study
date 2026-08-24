# 간편영화후기

TMDB(The Movie Database) API로 인기 영화 목록을 불러와 카드로 보여주고,
"리뷰보기"를 누르면 그 영화의 후기를 모달에 띄우는 페이지입니다.

- `main.html` — 화면 + Ajax 코드
- `main.css` — 어두운 배경, 점보트론 스타일
- `config.sample.js` — API 키 설정 예시 파일
- `main_v2.html` — 부트스트랩 4.3 공식 스타터 템플릿 (참고용으로 남겨둔 것, 실제 페이지 아님)

## 실행 전 준비 — API 키 설정

1. [TMDB API 설정 페이지](https://www.themoviedb.org/settings/api)에서 API 키(v3 auth)를 발급받습니다.
2. `config.sample.js`를 같은 폴더에 `config.js`로 복사합니다.
3. `config.js` 안의 `YOUR_TMDB_API_KEY_HERE`를 본인 키로 바꿉니다.

```bash
cp config.sample.js config.js
```

`config.js`는 `.gitignore`에 등록되어 있어 커밋되지 않습니다.
키 설정을 안 하면 페이지 상단에 안내 문구가 뜹니다.

> **키는 완전히 숨겨지지 않습니다.** 이 페이지는 브라우저에서만 도는 정적 페이지라,
> 개발자도구 Network 탭을 열면 키가 그대로 보입니다. `config.js` 분리는 "실수로 깃허브에
> 올리지 않기" 위한 것이고, 키를 진짜로 감추려면 서버(백엔드)를 두고 그 서버가 TMDB를
> 대신 호출하게 만들어야 합니다.

## 여기서 배운 것

- `$.ajax()`로 외부 API 호출하기 (`url`, `type`, `success`, `error`)
- JSON 응답 구조를 개발자도구 콘솔에서 확인하고 필요한 필드 꺼내기
- 배열을 `for` 문으로 돌면서 카드 여러 개 그리기
- 부트스트랩 모달을 `.modal('show')`로 띄우기

## 알아두면 좋은 것

TMDB v3 API는 **GET으로만** 호출됩니다. `type: "POST"`로 보내면 405 에러가 납니다.

응답 구조도 헷갈리기 쉽습니다.

| 무엇 | 어디에 있나 |
|---|---|
| 영화 목록 | `json.results` (← `json.data` 아님) |
| 영화 제목 | `results[i].title` (한국어), `results[i].original_title` (원어) |
| 포스터 | `https://image.tmdb.org/t/p/w500` + `results[i].poster_path` |
| 후기 목록 | `json.results` |
| 후기 본문 | `results[i].content` (← `results[i].review` 아님) |

포스터가 없는 영화는 `poster_path`가 `null`이라 대체 이미지를 넣어줘야 합니다.

## 남은 과제

- 내가 쓴 후기는 새로고침하면 사라진다 (화면에만 추가됨). 저장하려면 서버가 필요하다
- 페이지네이션 — 지금은 1페이지 20개만 보여준다
