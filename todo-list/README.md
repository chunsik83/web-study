# 정말 간단 TODO 리스트

가장 처음 만든 페이지. 입력창에 할 일을 적고 "추가"를 누르면 목록에 붙고, "삭제"를 누르면 그 줄이 사라집니다.

- `main.html` — 화면 + jQuery 코드
- `main.css` — 핫핑크 배경, 둥근 카드 스타일

## 여기서 배운 것

- `<ul>` / `<li>` 목록 구조와 부트스트랩 `list-group`
- CSS의 id 선택자(`#container`)와 class 선택자(`.list-group-item`) 차이
- jQuery `$(...).val()` / `.append()` / `.remove()`
- 템플릿 리터럴(백틱)로 HTML 문자열 만들기

## 동작 방식

할 일을 추가할 때 `Math.random()`으로 만든 숫자 id를 `list-{id}` 라는 class로 붙여둡니다.
삭제 버튼은 그 id를 그대로 넘겨서 `$(".list-" + id).remove()` 로 해당 줄만 지웁니다.

## 남은 과제

- 새로고침하면 목록이 사라진다 → `localStorage` 로 저장하기
- 입력한 글자를 HTML에 그대로 넣고 있어서, `<script>` 같은 걸 입력하면 실행된다 (XSS)
