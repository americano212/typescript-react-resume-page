import { Content } from "../../types/content.interface";

export const projectsData: Content[] = [
  {
    enSubtitle: "Teacher-bo: Real-time Conversational AI Board Game Assistant",
    krSubtitle: "Teacher-bo: 실시간 대화형 AI 보드게임 도우미",
    isDisplay: true,
    date: "(25.09 ~)",
    details: [
      {
        enText:
          "Overview: Developed a conversational app that provides accurate board game rules using STT/TTS and RAG technologies.",
        krText:
          "개요: STT/TTS, RAG 기술을 활용해서, 정확한 보드게임 룰을 알려주는 대화형 앱 서비스",
        isDisplay: true,
      },
      {
        enText:
          "Key Responsibilities: Team lead; built and deployed a FastAPI + LangChain system; automated VectorDB creation with OCR.",
        krText:
          "주요 역할: 팀장, FastAPI + LangChain 시스템 개발 및 배포, OCR을 이용한 VectorDB 구성 자동화",
        isDisplay: true,
      },
      {
        enText:
          "Tech Stack: FastAPI, LangChain (RAG), OpenAI API, ChromaDB, DynamoDB, STT/TTS, OCR, AWS",
        krText:
          "사용 기술: FastAPI, LangChain(RAG), OpenAI API, Chroma DB, DynamoDB, STT/TTS, OCR, AWS",
        isDisplay: true,
      },
    ],
  },
  {
    enSubtitle:
      "VocaVoca: Personalized Vocabulary Generator from Websites and PDFs",
    krSubtitle: "보카보카: 웹사이트와 PDF로부터 맞춤형 영어 단어장 생성기",
    date: "(24.01 ~ 24.12)",
    isDisplay: true,
    details: [
      {
        enText:
          "Overview: Built a service that delivers personalized vocabulary lists to support immediate English learning needs.",
        krText:
          "개요: 개인 맞춤형 단어장을 제공함으로써 즉각적인 영어 학습을 돕는 서비스",
        isDisplay: true,
      },
      {
        enText:
          "Key Responsibilities: Solo project; full-stack development and deployment; built English word preprocessing logic and test suites.",
        krText:
          "주요 역할: 개인 프로젝트, 풀스택 개발 및 배포, 영단어 전처리 로직 개발, 테스트 코드 작성",
        isDisplay: true,
      },
      {
        enText:
          "Tech Stack: NestJS, Next.js, Python (Selenium, NLP), Terraform, Serverless & On-premise deployment",
        krText:
          "사용 기술: Nest.js, Next.js, Python(selenium, NLP), Terraform, Serverless + On-premise 배포",
        isDisplay: true,
      },
    ],
  },
  {
    enSubtitle:
      "DDAKZIP: Personalized Real Estate Solution—from Listings to On-site Visits",
    krSubtitle: "딱집: 매물 찾기부터 발품까지, 개인 맞춤형 부동산 솔루션",
    date: "(22.04 ~ 23.10)",
    isDisplay: true,
    details: [
      {
        enText:
          "Overview: Real estate platform providing personalized recommendations and visit reviews to improve search efficiency.",
        krText:
          "개요: 맞춤 추천·발품 후기 공유로 탐색 효율을 높이는 부동산 정보 공유 서비스",
        isDisplay: true,
      },
      {
        enText:
          "Key Responsibilities: Development lead; designed and deployed the system; built the recommendation engine and crawling batch.",
        krText:
          "주요 역할: 개발 리드, 시스템 설계 및 배포, 매물 추천 시스템·크롤링 Batch 시스템 개발",
        isDisplay: true,
      },
      {
        enText:
          "Tech Stack: TypeScript (Express + GraphQL), MySQL, Python (Selenium, Recommendation System), AWS",
        krText:
          "사용 기술: Typescript(express + GraphQL), MySQL, Python(selenium, Recommend system), AWS",
        isDisplay: true,
      },
    ],
  },
];
