/* ==========================================================================
   1. 프로젝트 데이터
   ========================================================================== */
const projects = [
    {
        title: 'Amazon 판매 데이터 분석',
        description: 'Amazon 상품 데이터를 기반으로 가격, 할인율, 평점, 카테고리별 특성을 분석하고 소비자 유형과 판매 전략을 도출한 데이터 분석 프로젝트입니다.',
        tags: ['Python', 'Pandas', 'Data Analysis'],
        icon: 'fa-solid fa-chart-column',
        link: '#'
    },
    {
        title: '서울 공공자전거 데이터 대시보드',
        description: '자치구별 대여소 수, 탄소 절감량, 시설 현황 데이터를 활용해 지역별 이동 인프라와 환경 효과를 시각적으로 파악할 수 있는 대시보드를 기획했습니다.',
        tags: ['SQL', 'Dashboard', 'Data Visualization'],
        icon: 'fa-solid fa-bicycle',
        link: '#'
    },
    {
        title: 'FocusDash 생산성 관리 웹앱',
        description: '프로젝트, 일정, 통계, 알림 기능을 포함한 생산성 관리 웹앱입니다. 사용자가 자신의 작업 흐름을 한눈에 파악하고 집중도를 관리할 수 있도록 화면 구조와 주요 컴포넌트를 설계했습니다.',
        tags: ['React', 'Frontend', 'Productivity'],
        icon: 'fa-solid fa-bullseye',
        link: '#'
    },
    {
        title: '모각코 모집 및 식당 탐색 서비스',
        description: '모각코 참여자 모집과 주변 식당 탐색의 번거로움을 줄이기 위한 서비스 아이디어를 기획했습니다. 자유롭게 모각코 파티를 만들고, 참여 장소와 식사 장소를 함께 탐색할 수 있는 흐름을 설계했습니다.',
        tags: ['Service Planning', 'MVP', 'UX Flow'],
        icon: 'fa-solid fa-mug-saucer',
        link: '#'
    },
    {
        title: 'GitHub 기반 팀 기여도 분석 서비스',
        description: '팀 프로젝트에서 GitHub 활동 데이터를 바탕으로 개인별 기여 내용을 확인하고, README, commit, PR 등의 정보를 활용해 팀 기여도를 분석하는 서비스 PoC를 기획했습니다.',
        tags: ['GitHub API', 'AI Analysis', 'PoC'],
        icon: 'fa-brands fa-github',
        link: '#'
    }
];

/* ==========================================================================
   2. 프로젝트 카드 렌더링
   ========================================================================== */
function renderProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <article class="project-card">
            <div class="project-thumb">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

/* ==========================================================================
   3. 다크모드 토글
   ========================================================================== */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

/* ==========================================================================
   4. 부드러운 스크롤 (nav 링크 + Hero CTA 버튼)
   ========================================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        });
    });
}

/* ==========================================================================
   5. 초기 실행
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initThemeToggle();
    initSmoothScroll();
});
