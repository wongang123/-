# 프로젝트 개요: 게임 검색 애플리케이션
## 1. 목표 (Goal)
사용자가 다양한 게임 정보를 검색하고 필터링할 수 있는 빠르고 현대적인 웹 애플리케이션을 구축합니다.
## 2. 기술 스택 (Tech Stack)
* **프론트엔드:** Node.js 기반 (React/Next.js), Tailwind CSS, Shadcn/UI
* **데이터베이스:** Firebase (Firestore를 메인 DB로 사용)
* **상태 관리:** React Context API 또는 Recoil/Zustand (필요 시)
* **기타:** Firebase Authentication을 통한 사용자 인증 지원 (로그인/회원가입)
## 3. 핵심 기능 (Core Features)
1. **게임 검색:** 제목, 장르, 플랫폼 등으로 검색.
2. **게임 목록 표시:** Shadcn/UI의 `Card` 컴포넌트를 활용하여 목록 표시.
3. **상세 정보:** 게임 클릭 시 상세 페이지 표시.
4. **데이터 관리:** Firestore에서 게임 데이터를 읽고 표시. (관리자 기능은 추후 확장 예정)
## 4. 디자인 및 스타일 가이드라인 (Design Guidelines)
* **스타일:** Tailwind CSS 기반, 다크 모드 지원.
* **컴포넌트:** Shadcn/UI의 `Input`, `Button`, `Card`, `Select` 컴포넌트를 우선적으로 사용합니다.
* **색상:** Primary Color는 'slate' 계열을 사용합니다.
## 5. Firebase 설정 (Firebase Configuration)
* **컬렉션 이름:** `games` (필드 예시: `title`, `genre`, `platform`, `release_date`, `image_url`)
* **인증:** Google 로그인 우선 지원.
