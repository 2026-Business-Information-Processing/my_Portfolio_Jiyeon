# My Portfolio

개인 포트폴리오 웹사이트입니다. HTML / CSS / JavaScript 만으로 만든 정적 사이트입니다.

## 폴더 구조

```
my-portfolio/
├── index.html            # 메인 페이지 (전체 구조)
├── assets/               # 자원 폴더
│   ├── css/
│   │   └── style.css     # 스타일시트
│   ├── js/
│   │   └── script.js     # 자바스크립트 (다크모드, 스크롤 등)
│   └── img/              # 사진 및 아이콘 이미지
│       ├── profile.jpg   # 내 사진
│       └── projects/     # 프로젝트 썸네일 이미지들
└── README.md             # 프로젝트 설명 (GitHub 메인용)
```

## 주요 기능

- 반응형 레이아웃 (모바일 / 데스크톱)
- 다크모드 토글 (`localStorage`로 설정 저장)
- 부드러운 앵커 스크롤
- 스크롤 페이드인 애니메이션 (`IntersectionObserver`)
- 섹션: Home / About / Projects / Contact

## 사용 방법

1. `index.html` 파일을 브라우저로 열면 바로 실행됩니다.
2. 본인 사진은 `assets/img/profile.jpg`에 넣어주세요.
3. 프로젝트 썸네일은 `assets/img/projects/` 폴더에 `project1.jpg`, `project2.jpg`, ... 형태로 넣어주세요.
4. `index.html`에서 이름, 자기소개, 프로젝트 정보, 이메일/GitHub 링크를 본인 정보로 수정합니다.

## GitHub Pages 배포

1. 이 저장소를 GitHub에 푸시합니다.
2. 저장소 **Settings → Pages** 메뉴에서 Source를 `main` 브랜치 `/ (root)`로 설정합니다.
3. 잠시 후 `https://<username>.github.io/<repo-name>/` 주소로 접속할 수 있습니다.

## 라이선스

MIT
