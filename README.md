# 권지연 Portfolio

> 데이터를 해석하고, 사용자의 문제를 정의하며,
> 서비스와 전략으로 연결하는 데이터 기반 기획·분석형 인재.

Jiyeon125의 개인 포트폴리오 웹사이트입니다.
HTML / CSS / JavaScript만으로 만든 정적 사이트이며, GitHub Pages로 배포됩니다.

🔗 **Live Demo**: [https://2026-business-information-processing.github.io/my_Portfolio_Jiyeon/](https://2026-business-information-processing.github.io/my_Portfolio_Jiyeon/)

---

## 포지셔닝

| 항목 | 내용 |
|---|---|
| 이름 | 권지연 |
| 전공 | 데이터사이언스 |
| 관심 분야 | 데이터 분석 · 서비스 기획 · IT 기획 · AI 활용 |
| 자격증 | SQLD, ADsP 취득 준비 중 |

> 데이터 분석, 서비스 기획, AI 활용을 바탕으로 사용자의 문제를 구조화하고
> 실행 가능한 해결책으로 만드는 데 관심이 있습니다.

---

## 페이지 구성

| 섹션 | 설명 |
|---|---|
| **Hero** | 메인 카피와 핵심 포지셔닝 소개 |
| **About** | 자기소개 + 이름 / 전공 / 관심 분야 / 자격증 메타 정보 |
| **Skills** | 8개 스킬 카드 (SQL, Python, Data Analysis, R/ggplot, Service Planning, AI Tooling, HTML/CSS, JavaScript) |
| **Projects** | 5개 주요 프로젝트 (JS 데이터 기반 동적 렌더링) |
| **Experience** | 2024 ~ 2026 학습·프로젝트 타임라인 |
| **Contact** | Email · GitHub · Resume/Notion |

### 주요 프로젝트

1. **Amazon 판매 데이터 분석** — Python, Pandas, Data Analysis
2. **서울 공공자전거 데이터 대시보드** — SQL, Dashboard, Data Visualization
3. **FocusDash 생산성 관리 웹앱** — React, Frontend, Productivity
4. **모각코 모집 및 식당 탐색 서비스** — Service Planning, MVP, UX Flow
5. **GitHub 기반 팀 기여도 분석 서비스** — GitHub API, AI Analysis, PoC

---

## 기술 스택

- **Markup / Style** — HTML5, CSS3 (CSS Variables, Flex/Grid, Responsive)
- **Script** — Vanilla JavaScript (ES6+)
- **Font** — [Pretendard](https://github.com/orioncactus/pretendard)
- **Icon** — [Font Awesome 6](https://fontawesome.com/)
- **Deploy** — GitHub Pages

> 빌드 도구나 프레임워크 없이 정적 파일만으로 동작합니다.

---

## 주요 기능

- 라이트 / **다크모드 토글** (`localStorage`로 사용자 설정 저장)
- 네비게이션 링크 클릭 시 **부드러운 스크롤** (fixed nav 높이 보정)
- **JS 데이터 기반 프로젝트 카드 렌더링** (`assets/js/script.js`의 `projects` 배열 수정만으로 카드 추가 가능)
- 모바일 반응형 (860px / 640px 브레이크포인트)
- 카드형 UI (Skills / Projects / Contact 통일감)

---

## 폴더 구조

```
my-portfolio/
├── index.html              # 메인 페이지 (전체 구조)
├── assets/
│   ├── css/
│   │   └── style.css       # 스타일시트 (다크모드 변수, 반응형)
│   ├── js/
│   │   └── script.js       # 다크모드, 스크롤, 프로젝트 렌더링
│   └── img/                # 이미지 리소스
│       ├── profile.jpg     # 프로필 사진 (예정)
│       └── projects/       # 프로젝트 썸네일 (예정)
└── README.md
```

---

## 로컬에서 실행하기

별도 빌드 과정이 필요 없습니다. `index.html` 파일을 더블클릭해 브라우저로 바로 열면 됩니다.

라이브 리로드를 사용하고 싶다면 VS Code의 **Live Server** 확장을 사용하시거나, 아래 명령어로 간단히 로컬 서버를 띄울 수 있습니다.

```bash
# Python 3
python -m http.server 5500

# 또는 Node.js
npx serve .
```

브라우저에서 `http://localhost:5500` 접속

---

## TODO (아직 채워지지 않은 부분)

포트폴리오를 본인의 것으로 완성하려면 아래 항목들을 채워주세요.

### 콘텐츠

- [ ] **프로필 사진 추가**
  `assets/img/profile.jpg` 파일을 넣고, `index.html`의 `.about-img` 영역을
  `<i class="fas fa-user"></i>` → `<img src="assets/img/profile.jpg" alt="권지연">` 로 교체
- [ ] **프로젝트 썸네일 이미지** (`assets/img/projects/`에 추가)
  필요한 경우 `script.js`의 `projects` 배열에 `image: 'assets/img/projects/xxx.jpg'` 필드를 추가하고,
  `renderProjects()`에서 `<img>` 로 출력하도록 수정
- [ ] **About 섹션 추가 멘트** (수상 내역, 활동 내역 등이 있다면 보완)

### 링크

- [ ] **이메일 주소** — `index.html`의 `mailto:email@example.com` → 실제 이메일로 교체
- [ ] **GitHub 링크** — `https://github.com` → `https://github.com/<your-username>`
- [ ] **Resume / Notion 링크** — Contact 카드의 `href="#"` → 실제 이력서/노션 링크
- [ ] **프로젝트 상세 링크** — `script.js`의 각 project `link: '#'` → 실제 저장소 또는 회고 링크
  (현재는 카드 클릭 시 이동 동작이 없음. 필요 시 `<article>` → `<a class="project-card" href="...">` 로 변경)

### 기능 (선택)

- [ ] 모바일에서 햄버거 메뉴 (현재 640px 이하에서 nav 메뉴가 숨김 처리됨)
- [ ] 스크롤 시 섹션 페이드인 애니메이션
- [ ] 프로젝트 상세 모달 또는 별도 페이지

---

## License

MIT &copy; 2026 권지연
