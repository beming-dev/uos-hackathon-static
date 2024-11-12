# Team Introduction

Team 대왕고래

(사이트 링크)[https://uos-hackathon-static.vercel.app/]

2024 UOS Hackathon

- UX/UI: 이예림
- UX/UI: 김다은
- FE: 채민관
- BE: 김원빈
- BE: 이세영

# About Project

## 문제 정의

서울시 공공도서관의 이용자 추이는 코로나 시기에 급격히 감소한 후 현재까지 이용자 수를 회복하지 못하고 있습니다.

공공도서관 이용 경험이 있는 서울시민을 대상으로 조사한 결과 다음과 같은 인식을 확인할 수 있었습니다.

- 도서관 프로그램의 홍보와 활성화 필요
- 최신 IT 흐름을 반영해 도서관 운영의 진화 필요
- 집 또는 직장 근처의 도서관을 자주 이용

이러한 상황을 바탕으로 기존의 도서관 관련 IT 서비스를 확인해본 결과, 다음과 같은 문제좀을 확인할 수 있었습니다.

- 분산된 정보
- 정보의 일관성 부족
- 사용자 친화성 부족

## Solution

이에 저희 팀이 제시하는 Solution은 다음과 같습니다.

1. 서울시 도서관 통합 이음 서비스
   문화체육관광부에서 전국의 공공도서관을 대상으로, 연계된 도서관들끼리 도서 대출과 반납을 통합할 수 있는 책이음 서비스를 제공합니다. 현재 책이음 서비스를 제공하는 도서관을 편리하게 확인할 수 있는 서비스가 제공되지 않고 있어, 약간의 기능을 추가해 이를 wrapping해보기로 하였습니다.

2. 도서관 프로그램 예약 및 활성화
   서울시의 도서관에서 진행하는 프로그램을 한눈에 확인합니다. 카테고리 기능과 AI 추천 기능을 추가하여 사용자가 자신에 맞는 도서관 프로그램을 좀 더 쉽게 확인할 수 있게 합니다.

3. 사용자 맞춤 프로그램 추천
   ChatGPT api와 저희가 작성한 prompt를 이용하여 사용자가 자신에 맞는 도서관 프로그램을 좀 더 쉽게 확인할 수 있게 합니다.

# Technology

## UI/UX

Figma, Adobe

## Frontend

Next.js, Tailwind.css

## Backend

Spring boot, MYSQL, Apache Airflow

# Link

(Website)[https://uos-hackathon-static.vercel.app/]
(Frontend-repository)[https://github.com/UOSHackathon2024/frontend]
(Backend-repository)[https://github.com/UOSHackathon2024/connect_seoul_book]
(Figma)[]

# More

비용 문제로 Frontend와 Backend를 24시간 배포상태로 유지할 수 없었습니다.
그래서 2024-11-10 일을 기준으로 데이터를 프론트에 하드코딩으로 적어두고, 이를 사용해서 static한 페이지를 만들어 Vercel으로 배포합니다.
