## 📦 기술 스택 및 사용 이유

### ✅ 주요 프레임워크 및 툴

| 항목 | 버전 | 사용 이유 |
|------|------|-----------|
| **React** | Latest | 컴포넌트 기반 UI 라이브러리로, 빠르고 유연한 프론트엔드 구현이 가능 |
| **TypeScript** | 5.x | 정적 타입 검사를 통해 개발 안정성 향상 및 자동완성 지원 강화 |
| **Vite** | 5.x | 빠른 번들링과 핫 리로드(HMR)를 제공하는 차세대 빌드 도구 |
| **pnpm** | 8.x | 의존성 중복을 방지하고 디스크 공간을 절약하는 고성능 패키지 매니저 |

---

### 🎨 UI 라이브러리 및 스타일링

| 패키지 | 설명 및 사용 이유 |
|--------|-------------------|
| **tailwindcss** | 유틸리티 기반 CSS 프레임워크로, 빠르게 반응형 UI를 구현 가능 |
| **tailwindcss-animate** | Tailwind에서 간단한 애니메이션 효과를 쉽게 적용하기 위해 사용 |
| **shadcn/ui** | Headless 컴포넌트 기반의 UI 라이브러리로, 커스터마이징이 쉬우며 Radix UI 위에 구성됨 |
| **@radix-ui/react-slot** | `shadcn/ui` 내부에서 slot 패턴을 구현할 때 사용됨 |
| **class-variance-authority (cva)** | Tailwind 클래스들을 조건에 따라 조합할 수 있게 해주는 도구 |
| **clsx** *(선택)* | 조건부로 클래스명을 쉽게 연결하는 유틸리티 (필요 시 사용) |

---

### 🛠️ 개발 지원 도구

| 패키지 | 설명 및 사용 이유 |
|--------|-------------------|
| **@vitejs/plugin-react** | React + Vite 환경에서 Fast Refresh를 적용하기 위한 플러그인 |
| **@types/node** | `path`, `__dirname` 등 Node.js 타입 지원을 위한 타입 정의 파일 |
| **eslint** | 코드 품질 유지 및 일관성 있는 스타일 유지 |
| **prettier** | 코드 포맷팅 도구로, 협업 시 일관된 코드 스타일 유지 |
| **typescript** | Type 안전성을 확보하고, 더 나은 IDE 지원을 위해 사용 |

---

### 📁 경로 Alias 설정

| 설정 | 이유 |
|------|------|
| `@ → src/` | 긴 상대 경로(`../../../`) 대신 `@/components/…`처럼 직관적인 경로로 import 가능하게 하기 위해 [`tsconfig.json`]과 [`vite.config.ts`]에 alias 설정 적용 |

---

### 📂 폴더 구조 예시

```bash
src/
├── components/
│   └── ui/
│       └── button.tsx      # shadcn 기반 버튼 컴포넌트
├── lib/
│   └── utils.ts            # cn 함수 등 공용 유틸
├── App.tsx                 # 진입점
├── main.tsx
```

### ✅ 현재 우리 프로젝트 구조

| 항목 | 내용 |
|------|------|
| 프로젝트 | 초기화	pnpm create vite → React + TypeScript 선택 |
| 번들러 |	Vite 사용 (super fast dev server) | 
| UI 프레임워크 |	shadcn/ui 기반의 Tailwind CSS + Radix UI |
| 상태 관리 |	useState 사용 중 (추후 필요 시 Recoil, Zustand 등 가능) |
| 타입 시스템 |	TypeScript (.tsx) |
| 스타일링 |	Tailwind CSS + Custom Theme (CSS 변수 기반) |
| 컴포넌트 분리 |	components/ui/Button.tsx 등 |
| 설정 파일 |	vite.config.ts, tsconfig.json, tailwind.config.ts 등 커스터마이징 완료 |
