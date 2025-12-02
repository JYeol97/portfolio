import dingding from "../assets/dingding.jpg";
import grimtalk from "../assets/grimtalk.gif";
import localpiece from "../assets/localpiece.png";
import moneyindustry from "../assets/moneyindustry.png";
import tobecontinued from "../assets/tobecontinued.gif";
// ✅ Project 타입 정의
export type Project = {
  title: string;
  period: string;
  desc: string;
  cover: string;
  tech: string[];
  categories: string[];
  github?: string; // ✅ 프로젝트 깃허브 링크
  details?: {
    summary?: string;
    background?: string;
    meaning?: string;
    features?: string[];
    outcome?: string[];
    techStack?: string[];
    members?: { name: string; role: string; github?: string }[];
    awards?: string[];
  };
};

export const projects: Project[] = [
  {
    title: "퍼즐처럼 완성하는 AI 기반 여행 경로 추천 플랫폼 🧩",
    period: "2025.07 ~ 2025. 11",
    desc: "관광데이터와 AI를 활용해 여행지를 퍼즐처럼 추천하고, 자동 블로그 생성 기능까지 제공하는 플랫폼.",
    cover: localpiece,
    tech: [
      "React",
      "SCSS",
      "React Query",
      "Zustand",
      "Vite",
      "Spring Boot",
      "GraphQL",
      "FastAPI",
      "JWT",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "ElasticSearch",
      "BLIP-2",
      "YOLO",
      "Places365",
      "Docker",
      "Kubernetes",
      "Nginx",
      "GitHub Actions",
    ],
    categories: ["frontend", "backend", "ai", "infra"],
    github: "https://github.com/Flower-Boys/LocalPiece",
    details: {
      summary:
        "사용자가 선택한 장소를 시작으로 AI가 다음 여행 퍼즐 조각(관광지, 식사, 카페, 소소한 장소 등)을 추천하여 하루 여행 코스를 완성하는 서비스. 자동 블로그 생성 기능을 결합해 여행 기록까지 지원.",
      background:
        "관광데이터와 구글, 카카오 API를 적극 활용하여 실제 위치 기반 경로 추천이 가능하도록 설계했습니다. 기존 단순 여행 추천이 아닌, AI 기반 맞춤형 코스 완성과 기록까지 통합하는 것을 목표로 했습니다.",
      meaning:
        "처음으로 대규모 AI 파이프라인과 프론트엔드 전체 UI/UX를 단독으로 책임지며, 디자인부터 배포까지 풀스택 역량을 체득한 프로젝트. 특히 AI·백엔드·프론트의 협업 흐름을 직접 연결한 경험이 중요했습니다.",
      features: [
        "여행 퍼즐 추천: 관광지 → 식사 → 카페 → 소소한 장소 순차 추천",
        "여행 테마 기반 코스 생성: 등산, 먹방, 감성 등 테마 기반 추천",
        "코스 공유 및 커뮤니티: 좋아요, 후기 작성, 유저 저장 기능",
        "자동 블로그 생성: 이미지·장소 입력 → AI 기반 타임라인 블로그 콘텐츠(Markdown) 생성",
        "여행 발자국 퍼즐: 하루 여행 코스 시각화 및 기록 저장",
      ],
      outcome: [
        "경북 공공데이터와 구글, 카카오 API를 활용해 여행 코스 생성 → 저장 → 공유까지 이어지는 엔드투엔드 서비스 완성",
        "YOLO + Places365 + BLIP-2를 연동한 이미지 분석·블로그 자동 생성 파이프라인 구축 및 실제 여행 시나리오로 기능 검증",
        "React + Spring Boot + FastAPI 기반 다중 백엔드 구조를 하나의 도메인에서 통합 운용하며 성능/에러 처리/UX까지 안정화",
        "팀 내에서 AI 활용성·완성도 측면에서 레퍼런스 수준의 프로젝트로 평가받으며, 이후 포트폴리오 핵심 사례로 활용",
      ],
      techStack: [
        "Frontend: React, SCSS, React Query, Zustand, Vite",
        "Backend: Spring Boot, GraphQL, JWT",
        "AI: FastAPI, BLIP-2, YOLO, Places365",
        "Database: PostgreSQL, Redis, MongoDB, ElasticSearch",
        "Infra: Docker, Kubernetes, Nginx, GitHub Actions",
      ],
      members: [
        { name: "본인", role: "AI 블로그 생성 파이프라인 / Frontend & 디자인 전담, 백엔드 일부" },
        { name: "팀원 B", role: "AI 여행지 추천 알고리즘 파이프라인 Backend(Spring Boot), 인프라" },
      ],
    },
  },

  {
    title: "AI 얼굴형 분석 기반 맞춤형 헤어스타일 추천 💈🥇",
    period: "2025.03 ~ 2025.05",
    desc: "정면·좌측·우측 얼굴 데이터를 분석해 최종 얼굴형을 도출하고 맞춤형 헤어스타일 이미지를 제공하는 AI 서비스.",
    cover: tobecontinued,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Recoil",
      "Spring Boot",
      "FastAPI",
      "Celery",
      "Redis",
      "Torch",
      "Mediapipe",
      "BiSeNet",
      "OpenCV",
      "NumPy",
      "MySQL",
      "AWS S3",
      "Docker",
      "Jenkins",
      "CloudFront",
    ],
    categories: ["ai"],
    github: "https://github.com/S207-tobe-continued/tobe-continued",
    details: {
      summary:
        "사용자의 정면·좌측·우측 얼굴 이미지를 AI 파이프라인으로 분석해 최종 얼굴형을 판별하고, 맞춤형 헤어스타일 이미지를 추천하는 서비스. FFHQ 정렬, Mediapipe 랜드마크 분석, BiSeNet 세그멘테이션을 결합한 파이프라인과 비동기 처리 기반 인프라를 구축.",
      background:
        "실제 서비스 수준의 AI 분석 파이프라인을 설계하기 위해 AI·DB·인프라를 통합적으로 고려했습니다. 단순 모델 개발이 아니라, API 서버, 비동기 처리, S3/CDN 저장까지 실전 환경을 목표로 했습니다.",
      meaning: "단순히 얼굴형 모델 정확도보다 전체 파이프라인의 연결성과 안정성이 중요하다는 것을 깨달은 프로젝트. AI·백엔드·인프라를 모두 다뤄보며 시스템 통합 역량을 키울 수 있었습니다.",
      features: [
        "FFHQ 기반 얼굴 정렬 및 크롭",
        "Mediapipe FaceMesh → 468개 랜드마크 & 얼굴 비율 추출",
        "BiSeNet 세그멘테이션 → 윤곽선·헤어라인 곡률 계산",
        "각 뷰(front/left/right)별 얼굴형 분석 후 통합 판단",
        "IF-RULES 기반 얼굴형 최종 분류 알고리즘",
        "Celery + Redis 기반 비동기 처리 & 상태 조회 API",
        "S3 업로드 + MySQL 저장 자동화",
      ],
      outcome: ["전체 분석 시간 46초 → 21초로 단축 (GPU 최적화 + batch 처리)", "통합 판단 로직 적용으로 얼굴형 분류 정밀도 향상", "프론트 요청 → 분석 → 저장 → 응답까지 완전한 API 파이프라인 구축"],
      techStack: [
        "Frontend: React, TypeScript, Tailwind CSS, React Query, Recoil",
        "Backend: Spring Boot (REST API)",
        "AI: FastAPI, Mediapipe, BiSeNet, FFHQ Alignment, Torch, OpenCV, NumPy",
        "Infra: Docker, Docker-Compose, Jenkins, AWS CloudFront",
        "Database/Storage: MySQL, AWS S3",
        "Async: Celery + Redis",
      ],
      members: [
        { name: "본인", role: "AI 얼굴형 분석 파이프라인 개발" },
        { name: "팀원 A", role: "Frontend 개발" },
        { name: "팀원 B", role: "Backend(Spring Boot)" },
        { name: "팀원 C", role: "AI 맞춤형 헤어스타일 파이프라인 개발" },
        { name: "팀원 D", role: "인프라 설계 및 배포" },
        { name: "팀원 E", role: "Backend(Spring Boot)" },
      ],
      awards: ["SSAFY 12기 기업연계 프로젝트 최우수상 (1등)", "SSAFY 12기 전시발표회 입상"],
    },
  },

  {
    title: "실시간 AI 기반 기타 자세 분석 플랫폼 🎸",
    period: "2025.02 ~ 2025.04",
    desc: "YOLO 기반 기타 연주 자세 분석 + ML 모델로 리듬/박자 분석, 실시간 피드백 제공",
    cover: dingding,
    tech: ["React", "TypeScript", "React Query", "Spring Boot", "FastAPI", "WebSocket", "MySQL", "S3", "Jenkins", "Docker", "YOLOv11", "RandomForest", "SVM"],
    categories: ["frontend", "devops"],
    github: "https://github.com/dingding-etc/dingding",
    details: {
      summary: "기타 연주자의 자세와 리듬을 실시간으로 분석하여 학습을 돕는 플랫폼. YOLOv11 기반 자세 인식, ML 모델 기반 리듬 평가, WebSocket 기반 실시간 분석/피드백 기능을 구현.",
      background: "음악 학습 플랫폼이라는 아이디어에서 출발하여, 단순한 악보 제공이 아닌 실제 연주 데이터를 실시간 분석하고 사용자에게 피드백을 제공하는 것을 목표로 했습니다.",
      meaning:
        "AI 분석과 프론트엔드 UI/UX를 결합한 복합 프로젝트로, 인공지능을 실제 사용자 경험에 접목하는 방법을 체득했습니다. 또한 인프라 설계와 자동 배포까지 경험하며 DevOps 역량을 크게 확장했습니다.",
      features: [
        "실시간 악보 시스템: WebSocket 기반 분석 데이터 수신 및 자동 타브 악보 변환",
        "AI 자동 반주 생성: 연주 분석을 바탕으로 AI가 반주를 자동 생성",
        "음성 피드백 및 명령: 연습 모드 제어 및 자세 교정 피드백",
        "기타 학습 도우미: 튜닝, 메트로놈, 랭킹 시스템, 쇼츠 영상 공유",
        "실시간 학습 환경: FastAPI + React Query로 지연 최소화",
      ],
      outcome: ["실제 음악 학습 시나리오에 적합한 실시간 분석 시스템 구현", "AI 기반 분석 기능과 UX 최적화 요소 결합으로 높은 완성도 달성", "사용자 중심 설계 철학을 기반으로 팀 프로젝트 성과 극대화"],
      techStack: [
        "Frontend: React, TypeScript, React Query",
        "Backend: Spring Boot, FastAPI",
        "Realtime: WebSocket, Ngrok",
        "Infra: Docker, Docker-Compose, Jenkins, Nginx",
        "Database: MySQL, IndexedDB, AWS S3",
        "AI/ML: YOLOv11 (ONNX), RandomForest, KNN, SVM, Template Matching",
        "Docs: Swagger",
      ],
      members: [
        { name: "본인", role: "Frontend / 인프라 설계 및 배포" },
        { name: "팀원 A", role: "Backend(Spring Boot)" },
        { name: "팀원 B", role: "AI 모델링" },
        { name: "팀원 C", role: "데이터 처리 및 분석" },
        { name: "팀원 D", role: "Frontend / UX/UI 디자인" },
        { name: "팀원 E", role: "Backend(Spring Boot) / 데이터베이스" },
      ],
    },
  },

  {
    title: "실시간 소통 기반 미술 교육 플랫폼 🎨🥇",
    period: "2025.01 ~ 2025.02",
    desc: "WebRTC와 Socket.io를 활용해 강사·수강생이 실시간으로 소통하며 그림을 배우고, AI 기반 피드백을 제공하는 온라인 미술 교육 플랫폼.",
    cover: grimtalk,
    tech: ["React", "WebRTC", "Socket.io", "FastAPI", "ResNet50", "Tailwind CSS"],
    categories: ["frontend"],
    github: "https://github.com/color-chill-guys",
    details: {
      summary:
        "강사와 수강생이 실시간으로 소통하며 그림을 배우고 가르칠 수 있는 온라인 미술 교육 플랫폼. WebRTC 기반 화상 수업과 실시간 채팅, 캔버스 공유 기능을 제공하며 AI 그림 분석을 통한 맞춤 피드백을 지원.",
      background: "공동 프로젝트로 진행되었으며, 실시간 스트리밍과 협업 툴 도입, QA 테스트를 포함해 서비스 안정성과 사용자 경험 개선을 중점적으로 다루었습니다.",
      meaning: "React.js와 실시간 통신 기술(WebRTC, Socket.io)에 대한 이해도를 높였으며, UI/UX 디자인부터 성능 최적화까지 전체 프론트엔드 프로세스를 경험한 프로젝트.",
      features: [
        "실시간 강의 시스템: 화상 수업, 화면 공유, 음성 기능",
        "실시간 캔버스 공유 및 투명도 조절",
        "실시간 채팅 및 피드백 제공",
        "AI 기반 그림 분석 (ResNet50) + 맞춤형 피드백",
        "WebRTC + Socket.io 기반 안정적인 실시간 서비스",
        "Zustand 상태 관리 → API 호출 최적화",
      ],
      outcome: ["삼성 임직원 QA에서 높은 만족도 기록", "실제 서비스에서 높은 사용성과 안정성 확보", "공통 프로젝트 1등 수상"],
      techStack: ["Frontend: React, Tailwind CSS, Zustand", "Backend: FastAPI", "AI: ResNet50 기반 그림 분석", "Realtime: WebRTC, Socket.io, WebSocket/Stomp", "협업: ESLint, Prettier, QA 테스트"],
      members: [
        { name: "본인", role: "Frontend / UX/UI 디자인" },
        { name: "팀원 A", role: "Backend(Spring Boot)" },
        { name: "팀원 B", role: "AI / ML" },
        { name: "팀원 C", role: "인프라 설계 및 배포" },
        { name: "팀원 D", role: "Frontend / UX/UI 디자인" },
        { name: "팀원 E", role: "Frontend / UX/UI 디자인" },
      ],
      awards: ["SSAFY webRTC활용 프로젝트 최우수상 (1등)"],
    },
  },

  {
    title: "금융 상품 추천 서비스 💰",
    period: "2024.11",
    desc: "사용자 설문을 기반으로 투자 성향을 분석하고 금융 API를 활용해 맞춤형 금융 상품을 추천하는 서비스.",
    cover: moneyindustry,
    tech: ["Vue.js", "Django", "Random Forest", "금융 API", "카카오맵 API"],
    categories: ["frontend", "backend"],
    github: "https://github.com/Chungmingyu/Financial-Project",
    details: {
      summary: "사용자 투자 성향을 분석하여 맞춤형 금융 상품을 추천하는 서비스. 실시간 금융 데이터를 제공하고, 커뮤니티 기능까지 통합한 종합 금융 플랫폼.",
      background: "금융 데이터를 실시간으로 반영하고 사용자 성향을 기반으로 한 추천 모델을 구축하는 과정에서 데이터 처리와 추천 정확도를 높이는 데 집중했습니다.",
      meaning: "Django + Vue.js 기반 풀스택 경험을 쌓았고, AI 추천 모델을 실제 서비스 로직에 적용한 첫 프로젝트로 의미가 있습니다.",
      features: [
        "사용자 설문 기반 투자 성향 분석",
        "Random Forest 추천 알고리즘 적용",
        "실시간 금융 데이터 (예적금, 주식, 환율, 부동산) 제공",
        "금융 뉴스 시각화 및 환율 계산기",
        "게시판, 챗봇 등 커뮤니티 기능",
        "카카오맵 API 기반 은행 위치 서비스",
      ],
      outcome: ["AI 추천 서비스 프로토타입 완성", "실시간 금융 데이터 제공 시스템 구축", "사용자 중심의 금융 시뮬레이션 및 뉴스 기능 구현"],
      techStack: ["Frontend: Vue.js, JavaScript", "Backend: Django, REST API", "DB: SQLite", "AI: Random Forest", "API: 금융 API, 카카오맵 API"],
      members: [
        { name: "본인", role: "Frontend(Vue), Backend(Django)" },
        { name: "팀원 A", role: "Frontend(Vue), Backend(Django)" },
      ],
    },
  },
];
