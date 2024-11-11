"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { categoryCard } from "../page";
import Image from "next/image";
import Header from "@/components/Header";

const ProgramDetail = () => {
  const searchParams = useSearchParams();
  const programNum: number = parseInt(searchParams.get("num") || "0");
  const router = useRouter();

  const programList = [
    {
      programId: 685,
      programName: "2024년 11월 강서인디영화",
      libraryName: "강서도서관",
      startProgram: "2024-11-23T00:00:00.000+00:00",
      endProgram: "2024-11-23T00:00:00.000+00:00",
      acceptStart: "2024-11-23T13:30:00.000+00:00",
      acceptEnd: "2024-11-23T15:30:00.000+00:00",
      clientType: "",
      category: "문화공연",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1730270951499",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=3&category_idx=0&teach_idx=9360&menu_idx=11&context_path=gslib",
    },
    {
      programId: 686,
      programName: "2024년 10월 강서인디영화",
      libraryName: "강서도서관",
      startProgram: "2024-10-26T00:00:00.000+00:00",
      endProgram: "2024-10-26T00:00:00.000+00:00",
      acceptStart: "2024-10-26T13:30:00.000+00:00",
      acceptEnd: "2024-10-26T15:30:00.000+00:00",
      clientType: "",
      category: "문화공연",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1727657321435",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=3&category_idx=0&teach_idx=9251&menu_idx=11&context_path=gslib",
    },
    {
      programId: 687,
      programName: "[시쓰기 프로젝트1] 시가 흐르는 가을 (~~가을 오후의 시낭독)",
      libraryName: "노원평생학습관",
      startProgram: "2024-11-06T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-10-26T09:00:00.000+00:00",
      acceptEnd: "2024-11-01T18:00:00.000+00:00",
      clientType: "성인",
      category: "인문아카데미",
      programPlace: "노원평생학습관 3층 세미나실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h10/img/1729988286315",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h10&group_idx=1&category_idx=0&teach_idx=9350&menu_idx=11&context_path=nwllc",
    },
    {
      programId: 688,
      programName: "생태전환 학부모 시민행동 365 (오전, 오후 별도 접수)",
      libraryName: "고덕평생학습관",
      startProgram: "2024-11-06T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-10-25T09:00:00.000+00:00",
      acceptEnd: "2024-11-04T23:59:00.000+00:00",
      clientType: "학부모 및 일반시민 40명",
      category: "특강 성인",
      programPlace: "2층 창의누리터",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h5/img/1729758406754",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h5&group_idx=3&category_idx=1&teach_idx=9344&menu_idx=11&context_path=gdllc",
    },
    {
      programId: 689,
      programName: "[신나는 토요체험학교] 11월 가족과 함께하는 즐거운 원예교실",
      libraryName: "영등포평생학습관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-02T00:00:00.000+00:00",
      acceptStart: "2024-10-25T09:00:00.000+00:00",
      acceptEnd: "2024-11-01T18:00:00.000+00:00",
      clientType: "초등학생 자녀를 둔 10가족",
      category: "독서프로그램",
      programPlace: "다목적실(4층)",
      programInstructor: "박은해(원예 전문 강사)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1729556040892",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9329&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 690,
      programName: "(폐강)사각사각 페이스쿨",
      libraryName: "동대문도서관",
      startProgram: "2024-11-05T00:00:00.000+00:00",
      endProgram: "2024-11-14T00:00:00.000+00:00",
      acceptStart: "2024-10-24T14:00:00.000+00:00",
      acceptEnd: "2024-11-04T23:59:00.000+00:00",
      clientType: "50세 이상",
      category: "독서문화행사",
      programPlace: "2층 시청각실",
      programInstructor: "시니어금융교육협의회",
      imageUrl: "https://lib.sen.go.kr/data/teach/h12/img/1729578921088",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h12&group_idx=18&category_idx=0&teach_idx=9333&menu_idx=11&context_path=ddmlib",
    },
    {
      programId: 691,
      programName: "[개포도서관 아카이브 워크숍②] 아카이빙을 위한 글쓰기",
      libraryName: "개포도서관",
      startProgram: "2024-10-30T00:00:00.000+00:00",
      endProgram: "2024-12-04T00:00:00.000+00:00",
      acceptStart: "2024-10-24T14:00:00.000+00:00",
      acceptEnd: "2024-10-30T23:00:00.000+00:00",
      clientType: "",
      category: "시민 디지털 역량 프로그램",
      programPlace: "서울시교육연수원 연수지원센터 401호",
      programInstructor: "안정희 (기록정보학 박사, 기록문화연구 대표)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h4/img/1729757745065",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h4&group_idx=6&category_idx=0&teach_idx=9343&menu_idx=11&context_path=gplib",
    },
    {
      programId: 692,
      programName: "청소년 멘토와 함께하는 꿈찾기",
      libraryName: "강서도서관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-16T00:00:00.000+00:00",
      acceptStart: "2024-10-24T09:00:00.000+00:00",
      acceptEnd: "2024-11-01T15:00:00.000+00:00",
      clientType: "",
      category: "독서강좌",
      programPlace: "강의실1(도서관1층)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1730251356709",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=9&category_idx=0&teach_idx=9338&menu_idx=11&context_path=gslib",
    },
    {
      programId: 693,
      programName: "[11월 가족과 함께하는 도서관DAY] 옛 이야기 속으로 퐁당!",
      libraryName: "고덕평생학습관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-23T00:00:00.000+00:00",
      acceptStart: "2024-10-24T09:00:00.000+00:00",
      acceptEnd: "2024-11-23T00:00:00.000+00:00",
      clientType: "초등 저학년 5가족",
      category: "체험 어린이",
      programPlace: "소망강의실",
      programInstructor: "안정심",
      imageUrl: "https://lib.sen.go.kr/data/teach/h5/img/1729734121502",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h5&group_idx=2&category_idx=1&teach_idx=9340&menu_idx=11&context_path=gdllc",
    },
    {
      programId: 694,
      programName: "2024년 10월 수요예술무대",
      libraryName: "강서도서관",
      startProgram: "2024-10-23T00:00:00.000+00:00",
      endProgram: "2024-10-23T00:00:00.000+00:00",
      acceptStart: "2024-10-23T15:30:00.000+00:00",
      acceptEnd: "2024-10-23T17:00:00.000+00:00",
      clientType: "",
      category: "문화공연",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1727664828043",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=3&category_idx=0&teach_idx=9252&menu_idx=11&context_path=gslib",
    },
    {
      programId: 695,
      programName: "[다문화] 11월 세계 문화 체험교실",
      libraryName: "영등포평생학습관",
      startProgram: "2024-11-09T00:00:00.000+00:00",
      endProgram: "2024-11-09T00:00:00.000+00:00",
      acceptStart: "2024-10-23T09:00:00.000+00:00",
      acceptEnd: "2024-11-08T18:00:00.000+00:00",
      clientType: "초등학생 자녀를 포함한 가족",
      category: "체험프로그램",
      programPlace: "다목적실(4층)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1728538645748",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=2&category_idx=0&teach_idx=9306&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 696,
      programName: "가족과 함께하는 도서관 DAY 꿈꾸는 책놀이터",
      libraryName: "양천도서관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-02T00:00:00.000+00:00",
      acceptStart: "2024-10-23T09:00:00.000+00:00",
      acceptEnd: "2024-11-01T18:00:00.000+00:00",
      clientType: "",
      category: "체험",
      programPlace: "제4배움방",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h18/img/1729586918236",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h18&group_idx=3&category_idx=0&teach_idx=9335&menu_idx=11&context_path=yclib",
    },
    {
      programId: 697,
      programName: "우리 동네 국립극장 <패왕별희> 상영",
      libraryName: "영등포평생학습관",
      startProgram: "2024-11-27T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-11-06T09:00:00.000+00:00",
      acceptEnd: "2024-11-25T18:00:00.000+00:00",
      clientType: "",
      category: "독서프로그램",
      programPlace: "시청각실(3층)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1730787680614",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9372&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 698,
      programName: "[호기심 토요역사학교] 11월 <창경궁> 온라인 궁궐나들이",
      libraryName: "영등포평생학습관",
      startProgram: "2024-11-23T00:00:00.000+00:00",
      endProgram: "2024-11-23T00:00:00.000+00:00",
      acceptStart: "2024-11-15T09:00:00.000+00:00",
      acceptEnd: "2024-11-22T18:00:00.000+00:00",
      clientType: "지역주민(가족 단위)",
      category: "독서프로그램",
      programPlace: "온라인 실시간(ZOOM)",
      programInstructor: "정은주(궁궐문화원 전임강사)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1729556599931",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9330&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 699,
      programName: "앙코르, 발레 예술의 세계",
      libraryName: "종로도서관",
      startProgram: "2024-11-19T00:00:00.000+00:00",
      endProgram: "2024-11-26T00:00:00.000+00:00",
      acceptStart: "2024-11-05T09:00:00.000+00:00",
      acceptEnd: "2024-11-18T23:50:00.000+00:00",
      clientType: "",
      category: "문화행사 전시회",
      programPlace: "인왕관",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h23/img/1730183995661",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h23&group_idx=1&category_idx=2&teach_idx=9355&menu_idx=11&context_path=jnlib",
    },
    {
      programId: 700,
      programName: "[대면] 「원데이 목공 클래스」",
      libraryName: "서대문도서관",
      startProgram: "2024-11-14T00:00:00.000+00:00",
      endProgram: "2024-11-28T00:00:00.000+00:00",
      acceptStart: "2024-11-04T09:00:00.000+00:00",
      acceptEnd: "2024-11-25T23:59:00.000+00:00",
      clientType: "",
      category: "문화행사 체험",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h16/img/1730436207462",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h16&group_idx=8&category_idx=2&teach_idx=9366&menu_idx=11&context_path=sdmlib",
    },
    {
      programId: 701,
      programName: "[남산문학아카데미] 청소년문학교실 창작 낭독회",
      libraryName: "남산도서관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-02T00:00:00.000+00:00",
      acceptStart: "2024-11-02T16:00:00.000+00:00",
      acceptEnd: "2024-11-02T17:30:00.000+00:00",
      clientType: "",
      category: "문화행사",
      programPlace: "2층 남산하늘뜰",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h9/img/1730184958396",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h9&group_idx=1&category_idx=0&teach_idx=9356&menu_idx=11&context_path=nslib",
    },
    {
      programId: 702,
      programName: "2024년 11월 영화 및 음악 감상",
      libraryName: "강서도서관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-30T00:00:00.000+00:00",
      acceptStart: "2024-11-02T13:30:00.000+00:00",
      acceptEnd: "2024-11-30T15:30:00.000+00:00",
      clientType: "",
      category: "문화공연",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1730270764890",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=3&category_idx=0&teach_idx=9358&menu_idx=11&context_path=gslib",
    },
    {
      programId: 703,
      programName: "가족과 함께하는 도서관 DAY (11월)",
      libraryName: "영등포평생학습관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-02T00:00:00.000+00:00",
      acceptStart: "2024-11-02T09:00:00.000+00:00",
      acceptEnd: "2024-11-02T17:00:00.000+00:00",
      clientType: "유아,어린이,청소년,학조부모,가족 등",
      category: "독서프로그램",
      programPlace: "어린이실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1730694775701",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9371&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 704,
      programName: "[목요인문학] 실의 변신: 프랑스 태피스트리 읽기",
      libraryName: "송파도서관",
      startProgram: "2024-11-07T00:00:00.000+00:00",
      endProgram: "2024-11-21T00:00:00.000+00:00",
      acceptStart: "2024-11-01T14:00:00.000+00:00",
      acceptEnd: "2024-11-05T10:00:00.000+00:00",
      clientType: "관심있는 시민 누구나",
      category: "강연",
      programPlace: "온라인(ZOOM)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h17/img/1729746106679",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h17&group_idx=4&category_idx=0&teach_idx=9341&menu_idx=11&context_path=splib",
    },
    {
      programId: 705,
      programName: "2024년 디지털 리터러시 교육",
      libraryName: "구로도서관",
      startProgram: "2024-11-14T00:00:00.000+00:00",
      endProgram: "2024-11-15T00:00:00.000+00:00",
      acceptStart: "2024-11-01T09:00:00.000+00:00",
      acceptEnd: "2024-11-11T18:00:00.000+00:00",
      clientType: "초등 3~5학년",
      category: "문화행사",
      programPlace: "온라인 zoom",
      programInstructor: "유경혜",
      imageUrl: "https://lib.sen.go.kr/data/teach/h8/img/1729995736847",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h8&group_idx=3&category_idx=0&teach_idx=9352&menu_idx=11&context_path=grlib",
    },
    {
      programId: 706,
      programName: "[비대면]2025 한국경제 대전망｜정독에서정독하기 북토크 특강",
      libraryName: "정독도서관",
      startProgram: "2024-11-14T00:00:00.000+00:00",
      endProgram: "2024-11-21T00:00:00.000+00:00",
      acceptStart: "2024-11-01T09:00:00.000+00:00",
      acceptEnd: "2024-11-04T00:00:00.000+00:00",
      clientType: "성인",
      category: "Book村인문학",
      programPlace: "온라인줌( ZOOM)",
      programInstructor: "류덕현, 오철",
      imageUrl: "https://lib.sen.go.kr/data/teach/h22/img/1729764871159",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h22&group_idx=15&category_idx=0&teach_idx=9346&menu_idx=11&context_path=jdlib",
    },
    {
      programId: 707,
      programName: "2024년 11월 독서문화프로그램",
      libraryName: "종로도서관",
      startProgram: "2024-11-01T00:00:00.000+00:00",
      endProgram: "2024-11-30T00:00:00.000+00:00",
      acceptStart: "2024-11-01T08:00:00.000+00:00",
      acceptEnd: "2024-11-30T10:00:00.000+00:00",
      clientType: "",
      category: "문화행사 전시회",
      programPlace: "종로도서관",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h23/img/1730359539493",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h23&group_idx=1&category_idx=2&teach_idx=9362&menu_idx=11&context_path=jnlib",
    },
    {
      programId: 708,
      programName: "영화관에 간 약사",
      libraryName: "동작도서관",
      startProgram: "2024-11-13T00:00:00.000+00:00",
      endProgram: "2024-11-13T00:00:00.000+00:00",
      acceptStart: "2024-10-31T09:00:00.000+00:00",
      acceptEnd: "2024-11-11T23:59:00.000+00:00",
      clientType: "",
      category: "문화행사",
      programPlace: "실시간 온라인(Zoom)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h13/img/1730351610796",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h13&group_idx=12&category_idx=0&teach_idx=9361&menu_idx=11&context_path=djlib",
    },
    {
      programId: 709,
      programName: "2024년(제12회) 온 가족 책 잔치 '책 읽는 온 가족' 시상",
      libraryName: "정독도서관",
      startProgram: "2024-11-09T00:00:00.000+00:00",
      endProgram: "2024-11-09T00:00:00.000+00:00",
      acceptStart: "2024-10-31T00:00:00.000+00:00",
      acceptEnd: "2024-11-08T23:59:00.000+00:00",
      clientType: "",
      category: "기타프로그램",
      programPlace: "정독도서관 야외정원",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h22/img/1730364684387",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h22&group_idx=12&category_idx=0&teach_idx=9363&menu_idx=11&context_path=jdlib",
    },
    {
      programId: 710,
      programName: "[전자책활용] 2024년 e-즐거운 독서 5차(11월)",
      libraryName: "구로도서관",
      startProgram: "2024-11-07T00:00:00.000+00:00",
      endProgram: "2024-11-21T00:00:00.000+00:00",
      acceptStart: "2024-10-30T14:00:00.000+00:00",
      acceptEnd: "2024-11-03T23:59:00.000+00:00",
      clientType: "초등 1-3학년",
      category: "문화행사",
      programPlace: "온라인",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h8/img/1729227271029",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h8&group_idx=3&category_idx=0&teach_idx=9326&menu_idx=11&context_path=grlib",
    },
    {
      programId: 711,
      programName: "[학부모캠퍼스] 우리 가족 새활용 공예 교실",
      libraryName: "고척도서관",
      startProgram: "2024-11-16T00:00:00.000+00:00",
      endProgram: "2024-11-23T00:00:00.000+00:00",
      acceptStart: "2024-10-30T09:00:00.000+00:00",
      acceptEnd: "2024-11-10T23:59:00.000+00:00",
      clientType: "",
      category: "학부모교육",
      programPlace: "강의실 2",
      programInstructor: "강미라",
      imageUrl: "https://lib.sen.go.kr/data/teach/h6/img/1729560439392",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h6&group_idx=3&category_idx=0&teach_idx=9332&menu_idx=11&context_path=gclib",
    },
    {
      programId: 712,
      programName: "[학부모가 공부하는 노원]행복이 자라는 힐링플라워",
      libraryName: "노원평생학습관",
      startProgram: "2024-11-05T00:00:00.000+00:00",
      endProgram: "2024-11-26T00:00:00.000+00:00",
      acceptStart: "2024-10-30T09:00:00.000+00:00",
      acceptEnd: "2024-11-25T18:00:00.000+00:00",
      clientType: "",
      category: "독서프로그램",
      programPlace: "시청각실",
      programInstructor: "김미진(플라워스타일링 강사)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h10/img/1729751091735",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h10&group_idx=8&category_idx=0&teach_idx=9342&menu_idx=11&context_path=nwllc",
    },
    {
      programId: 713,
      programName: "[학부모캠퍼스 특강] 학부모를 위한 한 권의 역사-자서전 쓰기",
      libraryName: "강서도서관",
      startProgram: "2024-11-13T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-10-30T09:00:00.000+00:00",
      acceptEnd: "2024-11-26T23:59:00.000+00:00",
      clientType: "주제에 관심있는 학부모 및 지역주민",
      category: "독서강좌",
      programPlace: "강의실1 (1층)",
      programInstructor: "김일규(자서전쓰기 강사)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1730163084362",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=9&category_idx=0&teach_idx=9354&menu_idx=11&context_path=gslib",
    },
    {
      programId: 714,
      programName: "11월 가족과 함께하는 도서관DAY",
      libraryName: "구로도서관",
      startProgram: "2024-11-02T00:00:00.000+00:00",
      endProgram: "2024-11-02T00:00:00.000+00:00",
      acceptStart: "2024-10-29T14:00:00.000+00:00",
      acceptEnd: "2024-11-01T23:59:00.000+00:00",
      clientType: "초등 1-3학년",
      category: "문화행사",
      programPlace: "강의실(4층)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h8/img/1729228321975",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h8&group_idx=3&category_idx=0&teach_idx=9327&menu_idx=11&context_path=grlib",
    },
    {
      programId: 715,
      programName: "[비대면] 내 이름은 ○○○ : 태극기를 든 소녀들",
      libraryName: "서대문도서관",
      startProgram: "2024-11-09T00:00:00.000+00:00",
      endProgram: "2024-11-09T00:00:00.000+00:00",
      acceptStart: "2024-10-29T09:00:00.000+00:00",
      acceptEnd: "2024-11-04T23:50:00.000+00:00",
      clientType: "초등 3~6학년",
      category: "문화행사 강연",
      programPlace: "비대면(ZOOM)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h16/img/1729585537402",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h16&group_idx=8&category_idx=1&teach_idx=9325&menu_idx=11&context_path=sdmlib",
    },
    {
      programId: 716,
      programName:
        "[시쓰기 프로젝트2] 가을, 시로 물들다 (마을을 들여다보는 시쓰기)",
      libraryName: "노원평생학습관",
      startProgram: "2024-11-08T00:00:00.000+00:00",
      endProgram: "2024-11-29T00:00:00.000+00:00",
      acceptStart: "2024-10-29T09:00:00.000+00:00",
      acceptEnd: "2024-11-03T17:00:00.000+00:00",
      clientType: "성인",
      category: "인문아카데미",
      programPlace: "노원평생학습관 3층 세미나실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h10/img/1729830508453",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h10&group_idx=1&category_idx=0&teach_idx=9349&menu_idx=11&context_path=nwllc",
    },
    {
      programId: 717,
      programName: "네 인생에 클래식이 있길 바래",
      libraryName: "남산도서관",
      startProgram: "2024-11-07T00:00:00.000+00:00",
      endProgram: "2024-11-21T00:00:00.000+00:00",
      acceptStart: "2024-10-28T09:00:00.000+00:00",
      acceptEnd: "2024-11-06T23:30:00.000+00:00",
      clientType: "",
      category: "문화행사",
      programPlace: "남산도서관 2층 문화누리실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h9/img/1729815651186",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h9&group_idx=1&category_idx=0&teach_idx=9348&menu_idx=11&context_path=nslib",
    },
    {
      programId: 718,
      programName: "영화와 함께 읽는 고전문학",
      libraryName: "도봉도서관",
      startProgram: "2024-11-12T00:00:00.000+00:00",
      endProgram: "2024-12-03T00:00:00.000+00:00",
      acceptStart: "2024-10-28T09:00:00.000+00:00",
      acceptEnd: "2024-11-06T18:00:00.000+00:00",
      clientType: "서울시민",
      category: "인문계열",
      programPlace: "비대면(줌)",
      programInstructor: "최은(작가, 영화평론가)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h11/img/1729833700768",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h11&group_idx=8&category_idx=0&teach_idx=9351&menu_idx=11&context_path=dblib",
    },
    {
      programId: 719,
      programName: "2024년 청소년 진로체험 「나만의 웹툰 만들기」",
      libraryName: "도봉도서관",
      startProgram: "2024-11-16T00:00:00.000+00:00",
      endProgram: "2024-11-23T00:00:00.000+00:00",
      acceptStart: "2024-10-28T09:00:00.000+00:00",
      acceptEnd: "2024-11-15T17:00:00.000+00:00",
      clientType: "",
      category: "교육계열",
      programPlace: "실시간 온라인 줌(ZOOM)",
      programInstructor: "권재욱(콘텐츠리퍼블릭 대표이사)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h11/img/1729472297886",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h11&group_idx=10&category_idx=0&teach_idx=9328&menu_idx=11&context_path=dblib",
    },
    {
      programId: 720,
      programName: "[강좌] 사마천의 사기(史記) 인문학",
      libraryName: "강서도서관",
      startProgram: "2024-11-06T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-10-28T09:00:00.000+00:00",
      acceptEnd: "2024-11-04T18:00:00.000+00:00",
      clientType: "",
      category: "독서강좌",
      programPlace: "강의실1(1층)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1730098690170",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=9&category_idx=0&teach_idx=9347&menu_idx=11&context_path=gslib",
    },
    {
      programId: 721,
      programName: "[책 읽는 정원] 노경실 작가와의 만남",
      libraryName: "정독도서관",
      startProgram: "2024-10-26T00:00:00.000+00:00",
      endProgram: "2024-10-26T00:00:00.000+00:00",
      acceptStart: "2024-10-18T09:00:00.000+00:00",
      acceptEnd: "2024-10-25T18:00:00.000+00:00",
      clientType: "누구나",
      category: "기타",
      programPlace: "정독도서관 야외 정원",
      programInstructor: "노경실",
      imageUrl: "https://lib.sen.go.kr/data/teach/h22/img/1729661590206",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h22&group_idx=14&category_idx=0&teach_idx=9337&menu_idx=11&context_path=jdlib",
    },
    {
      programId: 722,
      programName: "[호기심 토요역사학교] 10월 <창덕궁> 온라인 궁궐나들이",
      libraryName: "영등포평생학습관",
      startProgram: "2024-10-26T00:00:00.000+00:00",
      endProgram: "2024-10-26T00:00:00.000+00:00",
      acceptStart: "2024-10-18T09:00:00.000+00:00",
      acceptEnd: "2024-10-24T18:00:00.000+00:00",
      clientType: "",
      category: "독서프로그램",
      programPlace: "실시간 온라인 강의(zoom)",
      programInstructor: "정은주(궁궐문화원 전임강사)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1727505894996",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9247&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 723,
      programName: "청소년을 위한 첫 디지털 드로잉",
      libraryName: "고척도서관",
      startProgram: "2024-11-09T00:00:00.000+00:00",
      endProgram: "2024-12-07T00:00:00.000+00:00",
      acceptStart: "2024-10-17T09:00:00.000+00:00",
      acceptEnd: "2024-11-07T18:00:00.000+00:00",
      clientType: "중·고등학생",
      category: "독서문화행사",
      programPlace: "고척도서관 청소년프로그램실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h6/img/1729144625850",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h6&group_idx=2&category_idx=0&teach_idx=9307&menu_idx=11&context_path=gclib",
    },
    {
      programId: 724,
      programName: "[도서관대학]한국문학 깊이 읽기",
      libraryName: "남산도서관",
      startProgram: "2024-11-07T00:00:00.000+00:00",
      endProgram: "2024-11-28T00:00:00.000+00:00",
      acceptStart: "2024-10-17T09:00:00.000+00:00",
      acceptEnd: "2024-10-30T17:00:00.000+00:00",
      clientType: "성인 30명",
      category: "문화행사",
      programPlace: "5층 세미나실",
      programInstructor: "조현행",
      imageUrl: "https://lib.sen.go.kr/data/teach/h9/img/1728608153451",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h9&group_idx=1&category_idx=0&teach_idx=9308&menu_idx=11&context_path=nslib",
    },
    {
      programId: 725,
      programName: "시니어를 위한 마음으로 떠나는 독서여행",
      libraryName: "남산도서관",
      startProgram: "2024-10-30T00:00:00.000+00:00",
      endProgram: "2024-11-20T00:00:00.000+00:00",
      acceptStart: "2024-10-17T09:00:00.000+00:00",
      acceptEnd: "2024-10-29T17:00:00.000+00:00",
      clientType: "50대 이상 시니어",
      category: "문화행사",
      programPlace: "독서상담실(5층)",
      programInstructor: "독서치료 어학실 사서",
      imageUrl: "https://lib.sen.go.kr/data/teach/h9/img/1729066871665",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h9&group_idx=1&category_idx=0&teach_idx=9323&menu_idx=11&context_path=nslib",
    },
    {
      programId: 726,
      programName: "2024년 10월 스스로창작놀이터 - 지구비누만들기 참가자 모집",
      libraryName: "정독도서관",
      startProgram: "2024-10-27T00:00:00.000+00:00",
      endProgram: "2024-10-27T00:00:00.000+00:00",
      acceptStart: "2024-10-17T09:00:00.000+00:00",
      acceptEnd: "2024-10-25T18:00:00.000+00:00",
      clientType: "초등5~중학생",
      category: "기타프로그램",
      programPlace: "청소년관",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h22/img/1728978397017",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h22&group_idx=12&category_idx=0&teach_idx=9319&menu_idx=11&context_path=jdlib",
    },
    {
      programId: 727,
      programName: "[남산문학산책2]세계문학과 만나다",
      libraryName: "남산도서관",
      startProgram: "2024-11-08T00:00:00.000+00:00",
      endProgram: "2024-11-29T00:00:00.000+00:00",
      acceptStart: "2024-10-16T09:00:00.000+00:00",
      acceptEnd: "2024-11-03T18:00:00.000+00:00",
      clientType: "성인 30명",
      category: "문화행사",
      programPlace: "2층 문화누리실",
      programInstructor: "이형주, 서지영, 이은경",
      imageUrl: "https://lib.sen.go.kr/data/teach/h9/img/1729036455315",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h9&group_idx=1&category_idx=0&teach_idx=9318&menu_idx=11&context_path=nslib",
    },
    {
      programId: 728,
      programName: "[사이언스 펩아트] 10월 짠! 마술 책 저금통",
      libraryName: "어린이도서관",
      startProgram: "2024-10-30T00:00:00.000+00:00",
      endProgram: "2024-10-30T00:00:00.000+00:00",
      acceptStart: "2024-10-16T09:00:00.000+00:00",
      acceptEnd: "2024-10-27T23:59:00.000+00:00",
      clientType: "초등 2~4학년 어린이",
      category: "독서문화프로그램",
      programPlace: "문화관 2층 배움누리1",
      programInstructor: "강명옥(스팀교육문화원 대표)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h19/img/1728953722019",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h19&group_idx=7&category_idx=0&teach_idx=9317&menu_idx=11&context_path=childlib",
    },
    {
      programId: 729,
      programName: "회색인간 김동식 작가와의 만남",
      libraryName: "영등포평생학습관",
      startProgram: "2024-10-25T00:00:00.000+00:00",
      endProgram: "2024-10-25T00:00:00.000+00:00",
      acceptStart: "2024-10-15T09:00:00.000+00:00",
      acceptEnd: "2024-10-24T23:50:00.000+00:00",
      clientType: "청소년 및 성인",
      category: "독서프로그램",
      programPlace: "영등포평생학습관 독서세미나실(3층)",
      programInstructor: "김동식 작가",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1728534512740",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9304&menu_idx=11&context_path=ydpllc",
    },
    {
      programId: 730,
      programName: "생활 속 팩트 체크 더하기",
      libraryName: "동대문도서관",
      startProgram: "2024-10-28T00:00:00.000+00:00",
      endProgram: "2024-10-30T00:00:00.000+00:00",
      acceptStart: "2024-10-14T14:00:00.000+00:00",
      acceptEnd: "2024-10-27T23:59:00.000+00:00",
      clientType: "50세 이상",
      category: "독서문화행사",
      programPlace: "2층 세미나실",
      programInstructor: "차은경(한국언론진흥재단)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h12/img/1728887000751",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h12&group_idx=18&category_idx=0&teach_idx=9316&menu_idx=11&context_path=ddmlib",
    },
    {
      programId: 731,
      programName: "가족과 함께하는 독서법",
      libraryName: "고척도서관",
      startProgram: "2024-11-03T00:00:00.000+00:00",
      endProgram: "2024-11-03T00:00:00.000+00:00",
      acceptStart: "2024-10-14T09:00:00.000+00:00",
      acceptEnd: "2024-10-31T18:00:00.000+00:00",
      clientType: "",
      category: "독서문화행사",
      programPlace: "1층 강의실 2",
      programInstructor: "박미진",
      imageUrl: "https://lib.sen.go.kr/data/teach/h6/img/1729052447905",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h6&group_idx=2&category_idx=0&teach_idx=9320&menu_idx=11&context_path=gclib",
    },
    {
      programId: 732,
      programName: "(온라인) [학부모 캠퍼스] 부모가 먼저 준비하는 초등 1학년",
      libraryName: "어린이도서관",
      startProgram: "2024-11-05T00:00:00.000+00:00",
      endProgram: "2024-11-26T00:00:00.000+00:00",
      acceptStart: "2024-10-14T09:00:00.000+00:00",
      acceptEnd: "2024-10-27T18:00:00.000+00:00",
      clientType: "",
      category: "학부모교육",
      programPlace: "실시간 온라인 강의(ZOOM)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h19/img/1727501432345",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h19&group_idx=9&category_idx=0&teach_idx=9245&menu_idx=11&context_path=childlib",
    },
    {
      programId: 733,
      programName: "[개관 30주년] 「영화로 만나는 인상주의: 빈센트 반 고흐」",
      libraryName: "송파도서관",
      startProgram: "2024-11-15T00:00:00.000+00:00",
      endProgram: "2024-11-15T00:00:00.000+00:00",
      acceptStart: "2024-11-11T09:00:00.000+00:00",
      acceptEnd: "2024-11-14T12:50:00.000+00:00",
      clientType: "관심있는 지역주민",
      category: "강연",
      programPlace: "온라인(ZOOM)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h17/img/1730693626834",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h17&group_idx=4&category_idx=0&teach_idx=9370&menu_idx=11&context_path=splib",
    },
    {
      programId: 734,
      programName: "[개관기념일 특강 1]집생각: 나를 나답게 만드는 집의 사용법",
      libraryName: "종로도서관",
      startProgram: "2024-11-20T00:00:00.000+00:00",
      endProgram: "2024-11-20T00:00:00.000+00:00",
      acceptStart: "2024-11-11T09:00:00.000+00:00",
      acceptEnd: "2024-11-17T23:59:00.000+00:00",
      clientType: "",
      category: "문화행사 전시회",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h23/img/1730954436190",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h23&group_idx=1&category_idx=2&teach_idx=9376&menu_idx=11&context_path=jnlib",
    },
    {
      programId: 735,
      programName: "(어윤정 작가와 함께하는) 동화 작가를 꿈꾸는 너에게",
      libraryName: "동대문도서관",
      startProgram: "2024-11-28T00:00:00.000+00:00",
      endProgram: "2024-11-28T00:00:00.000+00:00",
      acceptStart: "2024-11-11T09:00:00.000+00:00",
      acceptEnd: "2024-11-20T23:00:00.000+00:00",
      clientType: "",
      category: "독서문화행사",
      programPlace: "실시간 비대면 온라인(Zoom)",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h12/img/1731047936904",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h12&group_idx=18&category_idx=0&teach_idx=9378&menu_idx=11&context_path=ddmlib",
    },
    {
      programId: 736,
      programName: "[개관 30주년] 「친환경 EM세탁세제 만들기」",
      libraryName: "송파도서관",
      startProgram: "2024-11-15T00:00:00.000+00:00",
      endProgram: "2024-11-15T00:00:00.000+00:00",
      acceptStart: "2024-11-11T14:00:00.000+00:00",
      acceptEnd: "2024-11-14T11:00:00.000+00:00",
      clientType: "친환경 행동에 관심있는 성인 12명",
      category: "행사",
      programPlace: "3층 2강의실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h17/img/1730693504510",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h17&group_idx=5&category_idx=0&teach_idx=9369&menu_idx=11&context_path=splib",
    },
    {
      programId: 737,
      programName: "(비대면) 와글와글 동화나라 12월",
      libraryName: "강남도서관",
      startProgram: "2024-12-07T00:00:00.000+00:00",
      endProgram: "2024-12-21T00:00:00.000+00:00",
      acceptStart: "2024-11-11T14:00:00.000+00:00",
      acceptEnd: "2024-12-06T23:59:00.000+00:00",
      clientType: "",
      category: "인문학강좌",
      programPlace: "온라인(ZOOM)",
      programInstructor: "양지희, 강선덕",
      imageUrl: "https://lib.sen.go.kr/data/teach/h1/img/1730430570626",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h1&group_idx=4&category_idx=0&teach_idx=9365&menu_idx=11&context_path=gnlib",
    },
    {
      programId: 738,
      programName: "[개관 30주년] 「크리스마스 양말목 도어벨 만들기」",
      libraryName: "송파도서관",
      startProgram: "2024-11-16T00:00:00.000+00:00",
      endProgram: "2024-11-16T00:00:00.000+00:00",
      acceptStart: "2024-11-12T09:00:00.000+00:00",
      acceptEnd: "2024-11-14T11:30:00.000+00:00",
      clientType: "초등 3~5학년",
      category: "행사",
      programPlace: "3층 1강의실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h17/img/1730693518063",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h17&group_idx=5&category_idx=0&teach_idx=9368&menu_idx=11&context_path=splib",
    },
    {
      programId: 739,
      programName: "스마트폰으로 쉽게 배우는 생성형 AI",
      libraryName: "종로도서관",
      startProgram: "2024-11-18T00:00:00.000+00:00",
      endProgram: "2024-11-21T00:00:00.000+00:00",
      acceptStart: "2024-11-08T09:00:00.000+00:00",
      acceptEnd: "2024-11-14T11:59:00.000+00:00",
      clientType: "",
      category: "문화행사 전시회",
      programPlace: "시청각실",
      programInstructor: "조병옥",
      imageUrl: "https://lib.sen.go.kr/data/teach/h23/img/1730941718176",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h23&group_idx=1&category_idx=2&teach_idx=9375&menu_idx=11&context_path=jnlib",
    },
    {
      programId: 740,
      programName: "한강을 읽다, 한국 문학을 읽다",
      libraryName: "동대문도서관",
      startProgram: "2024-11-18T00:00:00.000+00:00",
      endProgram: "2024-12-09T00:00:00.000+00:00",
      acceptStart: "2024-11-08T09:00:00.000+00:00",
      acceptEnd: "2024-11-15T23:59:00.000+00:00",
      clientType: "한국 문학을 사랑하는 누구나",
      category: "독서문화행사",
      programPlace: "ZOOM",
      programInstructor: "노태훈(문학평론가)",
      imageUrl: "https://lib.sen.go.kr/data/teach/h12/img/1730869951153",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h12&group_idx=18&category_idx=0&teach_idx=9373&menu_idx=11&context_path=ddmlib",
    },
    {
      programId: 741,
      programName: "「나무 그림책과 함께, 곰비임비 쌓이는 생태 감수성」",
      libraryName: "마포평생학습관",
      startProgram: "2024-11-20T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-11-08T09:00:00.000+00:00",
      acceptEnd: "2024-11-19T18:00:00.000+00:00",
      clientType: "",
      category: "독서관련행사 교양강좌",
      programPlace: "다온의 숲",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h15/img/1730960910339",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h15&group_idx=1&category_idx=1&teach_idx=9377&menu_idx=11&context_path=mpllc",
    },
    {
      programId: 742,
      programName: "2024년 11월 수요예술무대",
      libraryName: "강서도서관",
      startProgram: "2024-11-13T00:00:00.000+00:00",
      endProgram: "2024-11-27T00:00:00.000+00:00",
      acceptStart: "2024-11-13T15:30:00.000+00:00",
      acceptEnd: "2024-11-27T17:30:00.000+00:00",
      clientType: "",
      category: "문화공연",
      programPlace: "시청각실",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h3/img/1730270846456",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h3&group_idx=3&category_idx=0&teach_idx=9359&menu_idx=11&context_path=gslib",
    },
    {
      programId: 743,
      programName: "[사이언스 펩아트] 11월 '돌아라! 인공위성'",
      libraryName: "어린이도서관",
      startProgram: "2024-11-20T00:00:00.000+00:00",
      endProgram: "2024-11-20T00:00:00.000+00:00",
      acceptStart: "2024-11-06T09:00:00.000+00:00",
      acceptEnd: "2024-11-17T23:59:00.000+00:00",
      clientType: "초등 2~4학년 어린이",
      category: "독서문화프로그램",
      programPlace: "문화관 2층 배움누리1",
      programInstructor: "",
      imageUrl: "https://lib.sen.go.kr/data/teach/h19/img/1730429550657",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h19&group_idx=7&category_idx=0&teach_idx=9364&menu_idx=11&context_path=childlib",
    },
    {
      programId: 744,
      programName: "[다문화] 11월 「세계 그림책 독서교실」",
      libraryName: "영등포평생학습관",
      startProgram: "2024-11-23T00:00:00.000+00:00",
      endProgram: "2024-11-23T00:00:00.000+00:00",
      acceptStart: "2024-11-06T09:00:00.000+00:00",
      acceptEnd: "2024-11-22T18:00:00.000+00:00",
      clientType: "초등학생 자녀를 포함한 가족",
      category: "독서프로그램",
      programPlace: "다목적실(4층)",
      programInstructor: "마킨 메이타",
      imageUrl: "https://lib.sen.go.kr/data/teach/h20/img/1730100316353",
      programUrl:
        "https://lib.sen.go.kr/lib/module/teach/detail.do?homepage_id=h20&group_idx=17&category_idx=0&teach_idx=9353&menu_idx=11&context_path=ydpllc",
    },
  ];

  const [programInfo] = useState<categoryCard>(programList[programNum]);

  console.log(programNum);

  // useEffect(() => {
  //   if (programNum) {
  //     (async () => {
  //       await fetch(`/api/program?num=${programNum}`, {
  //         method: "GET",
  //         credentials: "include", // 자격 증명을 포함하여 요청
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok");
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setProgramInfo(data);
  //         })
  //         .catch((error) => {
  //           console.error("Fetch error:", error);
  //         });
  //     })();
  //   }
  // }, [programNum]);

  const dateConverter = (dateStr: string) => {
    const date = new Date(dateStr);

    // toISOString()을 사용하여 YYYY-MM-DD 형식으로 변환
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 필요
    const day = date.getDate();

    return `${month.toString().padStart(2, "0")}월${day
      .toString()
      .padStart(2, "0")}일`;
  }

  return (
    programInfo && (
      <>
        <div className="relative flex flex-col w-full h-full px-4 pt-20 overflow-y-scroll no-scrollbar pb-20 top-0 left-0">
          <Header />
          <div className="relative w-full h-auto min-h-[500px] mb-8">
            <Image
              src={programInfo.imageUrl}
              alt="program"
              fill
              style={{
                borderRadius: "1rem 1rem 0 0",
              }}
            />
          </div>

          <span className="text-2xl mb-4">{programInfo?.programName}</span>

          <div className="mb-6">
            <span>{programInfo?.libraryName}</span>
          </div>

          <div className="border-t-2 border-b-2 border-gray-200 py-8 px-4">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">접수기간</span>
              <span>
                {dateConverter(programInfo.acceptStart)} ~{" "}
                {dateConverter(programInfo.acceptEnd)}
              </span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">강의기간</span>
              <span>
                {dateConverter(programInfo.startProgram)} ~{" "}
                {dateConverter(programInfo.endProgram)}
              </span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">시간</span>
              <span></span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">대상</span>
              <span>{programInfo.clientType}</span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">장소</span>
              <span>{programInfo.programPlace}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col align-center">
              <span className="text-xl text-start">
                {programInfo.libraryName}
              </span>
              <span className="text-xs">
                {formatDate(programInfo.acceptStart)} ~{" "}
                {formatDate(programInfo.acceptEnd)}{" "}
              </span>
            </div>
            <button
              onClick={() => router.push(programInfo.programUrl)}
              className="text-white h-10 px-10 rounded-full bg-[#007A9F]"
            >
              예약하기
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default ProgramDetail;
