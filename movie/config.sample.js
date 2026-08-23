// TMDB API 키 설정 파일 (예시)
//
// 사용법
//   1. 이 파일을 같은 폴더에 `config.js` 라는 이름으로 복사한다.
//   2. 아래 YOUR_TMDB_API_KEY_HERE 자리에 본인 키를 넣는다.
//   3. `config.js` 는 .gitignore 에 등록되어 있어 커밋되지 않는다.
//
// 키 발급: https://www.themoviedb.org/settings/api
//
// 주의: 브라우저에서만 도는 페이지라 키는 개발자도구 Network 탭에 그대로 보인다.
//       키를 진짜로 숨기려면 서버(백엔드)를 두고 그 서버가 TMDB를 대신 호출해야 한다.
const CONFIG = {
    TMDB_API_KEY: "YOUR_TMDB_API_KEY_HERE"
};
