//banner-event에 사용되는 더미 데이터들
export const seasonalEventsData = [
  {
    month: 1,
    season: "겨울",
    events: [
      { days: { start: 1, end: 3 }, name: "신년 모임" },
      { days: { start: 15, end: 17 }, name: "눈싸움 대회" },
    ],
  },
  {
    month: 2,
    season: "겨울",
    events: [
      { days: { start: 14, end: 16 }, name: "발렌타인 데이" },
      { days: { start: 28, end: 30 }, name: "겨울 스포츠 대회" },
    ],
  },
  {
    month: 3,
    season: "봄",
    events: [
      { days: { start: 20, end: 22 }, name: "식물 심기 이벤트" },
      { days: { start: 14, end: 16 }, name: "화이트 데이" },
    ],
  },
  {
    month: 4,
    season: "봄",
    events: [
      { days: { start: 5, end: 7 }, name: "벚꽃 축제" },
      { days: { start: 22, end: 24 }, name: "지구의 날" },
    ],
  },
  {
    month: 5,
    season: "봄",
    events: [
      { days: { start: 1, end: 3 }, name: "어린이날" },
      { days: { start: 15, end: 17 }, name: "근로자의 날" },
    ],
  },
  {
    month: 6,
    season: "여름",
    events: [
      { days: { start: 21, end: 23 }, name: "여름 휴가 이벤트" },
      { days: { start: 10, end: 12 }, name: "아이스크림 축제" },
    ],
  },
  {
    month: 7,
    season: "여름",
    events: [
      { days: { start: 15, end: 17 }, name: "바다 소풍" },
      { days: { start: 30, end: 1 }, name: "수영 대회" },
    ],
  },
  {
    month: 8,
    season: "여름",
    events: [
      { days: { start: 15, end: 17 }, name: "추석 연휴" },
      { days: { start: 27, end: 29 }, name: "해수욕장 파티" },
    ],
  },
  {
    month: 9,
    season: "가을",
    events: [
      { days: { start: 13, end: 15 }, name: "추석 연휴" },
      { days: { start: 5, end: 7 }, name: "풍경 사진 대회" },
    ],
  },
  {
    month: 10,
    season: "가을",
    events: [
      { days: { start: 31, end: 2 }, name: "호박 축제" },
      { days: { start: 31, end: 2 }, name: "할로윈 이벤트" },
    ],
  },
  {
    month: 11,
    season: "가을",
    events: [
      { days: { start: 15, end: 17 }, name: "문화의 날" },
      { days: { start: 22, end: 24 }, name: "가을 산책" },
    ],
  },
  {
    month: 12,
    season: "겨울",
    events: [
      { days: { start: 25, end: 27 }, name: "크리스마스 이벤트" },
      { days: { start: 31, end: 2 }, name: "연말 파티" },
    ],
  },
];

/**Main-Card-News와 , Sub-Card-News에 사용되는 데이터들 */

const youtubeVideoIds = [
  "M5webAT5ADQ",
  "0WW2GxfzSd0",
  "clyAK1yC3vs",
  "0QHGNBGfENQ",
  "ckz8X4SD-G4",
  "8zsI7_bWCE0",
];

const newsCardData = youtubeVideoIds.map((videoId, index) => {
  const thumbnailURL = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return {
    count: index + 1,
    title: `Video ${index + 1} Title`,
    description: `This is a description for Video ${
      index + 1
    }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    date: new Date().toLocaleDateString(), // 현재 날짜로 임시 데이터 생성
    thumbnailURL: thumbnailURL,
  };
});

/**
 * id를 기준으로 내림차순 정렬한 복사본 생성
 * a는 다음 요소, b는 현재 요소를 의미
 * 반환값이 -(음수)이면 a를 b앞에
 * +(양수) 이면 b를 a 앞에
 * 0이면 변환없이 그대로 유지
 * */
export const sortNewsCardData = newsCardData
  .slice()
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);

export const shuffleSubCardData = sortNewsCardData.slice();
const firstData = shuffleSubCardData[0];
shuffleSubCardData.shift();
shuffleSubCardData.push(firstData);

export const season_Activity = {
  Spring: [
    { Activity: "벚꽃 구경", percent: 20 },
    { Activity: "나들이", percent: 20 },
    { Activity: "자전거 타기", percent: 20 },
    { Activity: "피크닉", percent: 20 },
    { Activity: "꽃 구경", percent: 20 },
  ],
  Summer: [
    { Activity: "수영", percent: 25 },
    { Activity: "서핑", percent: 25 },
    { Activity: "해변 바베큐", percent: 20 },
    { Activity: "캠핑", percent: 20 },
    { Activity: "등산", percent: 10 },
  ],
  Autumn: [
    { Activity: "단풍 구경", percent: 25 },
    { Activity: "사과 따기", percent: 20 },
    { Activity: "포도 수확", percent: 20 },
    { Activity: "하이킹", percent: 20 },
    { Activity: "피크닉", percent: 15 },
  ],
  Winter: [
    { Activity: "스키", percent: 30 },
    { Activity: "스노보드", percent: 25 },
    { Activity: "눈썰매", percent: 20 },
    { Activity: "눈사람 만들기", percent: 15 },
    { Activity: "눈싸움", percent: 10 },
  ],
};
