import {
  seasonalEventsData,
  sortNewsCardData,
  shuffleSubCardData,
  season_Activity,
} from "./exportMain.js"; // 해당 파일에서 각각의 더미데이터 들을 import

//header 영역

const header = document.querySelector(".header-con"); // 헤더 클래스 요소 선택
const header_Hambuger = document.querySelector(".header-nav-hambuger");
const header_link = document.querySelectorAll(".header-main nav ul li");

// img-con 영역
let img_parent = document.querySelector(".img-con"); // 이미지 요소들의 부모 요소를 선택
let boxs = img_parent.querySelectorAll(".img-box"); // 처음 보여질 이미지 요소들 선택

// 슬로건 영역
let slogans = img_parent.querySelectorAll(".slogan-item"); // 슬로건 요소들 선택

// 점(닷) 영역
let dot_parent = document.querySelector(".dot-box"); // 동그라미 부모 선택
let dots = dot_parent.querySelectorAll("span"); // 이미지 밑에 있는 동그라미 영역 선택

// notice-weather 영역

// banner img 영역
const banner_img_parent = document.querySelector(".img-wrap"); // 실제 이미지가 움직일 배너 영역
const banner_img_items = banner_img_parent.querySelectorAll("img"); // 배너에 포현될 모든 이미지 요소들을 가져옴
const banner_totalCount = banner_img_items.length; // 이미지 요소들의 총 개수
let banner_img_width; // 현재 배너 이미지 너비
let banner_CurrentIndex = 0; // 현재 배너에 표시될 이미지의 요소 인덱스 번호
const banner_img_btn = document.querySelectorAll(".img-banner-btn-wrap div"); // 배너 이미지 아래에 있는 버튼 요소들을 가져옴

const nowMonth = new Date().getMonth() + 1;
const nowFullYear = new Date().getFullYear();
const nowMonthData = [];
const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

// weather-news-con 영역

//    dob-box 영역
const news_Dot_Box_Parent = document.querySelector(".news-dot-box"); // news 닷 박스 부모 요소를 가져옴
const news_Dot_Box_Items = news_Dot_Box_Parent.querySelectorAll("div"); // news 닷 박스 부모 요소 아래에 있는 아이템들을 가져옴

//    news-item영역
const news_Move_Box = document.querySelector(".weather-news-move-box"); // news가 움직여 보이지는 영역
let newsCardCurrentIndex = 0; // 현재 newsCard가 몇번쨰 인지 확인하는 인덱스
let newsCardWidth; // 표현되는 카드의 1개의 너비
const news_totalCount = sortNewsCardData.length; // 표현되는 카드의 총개수

//    news-btn영역
const news_btns = document.querySelector(".news-btn").querySelectorAll("div");

//    sub-card 영역
const news_Sub_Move_Con = document.querySelector(".weather-news-sub-wrap"); // sub-news가 움직여 보이지는 영역
let subNewsCardCurrentIndex = 0;
let subNewsCardWidth;

// weather-introd 영역

//      receipe-category 영역

const receipe_Categorys = document
  .querySelector(".recipe-category")
  .querySelectorAll("span"); // receipe category요소들 선택

const recipe_Mov_Box = document.querySelector(".recipe-item-move-box"); // 실제 recipe가 움직이는 박스
const recipe_Season_Items = document.querySelectorAll(
  ".recipe-item-move-box > div"
); // 계절별 recipe boxs

let recipe_Box_width; // 현재 recipe box 너비

let recipeBoxCurrentIndex;

// weather-dashboard 영역

const category_Sub_Contnet = document.querySelectorAll(
  ".category-right-item-sub-content"
); // DASHBOARD의 season number를 저장할 우너소들

const stat_Drop_Down_Menu_Toggle = document.querySelector(
  ".stat-title-dropmenu"
); // dropmenu가 펼쳐질 원소

const triangle_Down = document.querySelector(".triangle-down"); // dropmenu 옆에 있는 삼각형 원소

const dropmenu_Content = document.querySelector(".dropmenu-content"); // dropmenuContent가 저장될 원소

const dropmenu_Sub_Contents = stat_Drop_Down_Menu_Toggle.querySelectorAll(
  ".dropmenu-sub-content"
); //dropmenuContent에 들어갈 텍스트를 선택할 subContent 원소들

const season_Activity_Item_Bar = document.querySelectorAll(
  ".stat-season-activity-item"
);
const season_Activity_Item_Title = document.querySelectorAll(
  ".stat-season-activity-item .stat-season-activity-item-title"
);
const season_Activity_Item_Percent = document.querySelectorAll(
  ".stat-season-activity-item .stat-season-activity-item-percent"
);

// 처음 js가 로드되었을 떄 StatTravelActivity 영역을 초기화 해주는 메소드
function initStatTravelData(searchData) {
  season_Activity_Item_Title.forEach((item, index) => {
    item.innerText = season_Activity[searchData][index].Activity;
  });

  season_Activity_Item_Bar.forEach((item, index) => {
    item.style.height = season_Activity[searchData][index].percent + "%";
  });

  season_Activity_Item_Percent.forEach((item, index) => {
    item.innerText =
      season_Activity[searchData][index].percent.toString() + "%";
  });
}

// 처음 js가 로드되었을 떄 header영역을 초기화 해주는 메소드
function initHeader() {
  if (parseInt(window.scrollY) > 0) {
    header.classList.add("active");
  }

  header_Hambuger.addEventListener("click", () => {
    if (header_Hambuger.classList.contains("hambuger-active")) {
      header_Hambuger.classList.remove("hambuger-active");
    } else {
      header_Hambuger.classList.add("hambuger-active");
    }
  });

  header_link.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (parseInt(index) === 0) {
        item.addEventListener("click", () => {
          document
            .querySelector(".news-title")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        });
      } else if (parseInt(index) === 1) {
        item.addEventListener("click", () => {
          document
            .querySelector(".introd-title")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        });
      } else if (parseInt(index) === 2) {
        document
          .querySelector(".recipe-title")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (parseInt(index) === 3) {
        document
          .querySelector(".dashboard-title")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
}

// 처음 js가 로드될때 시즌 여행가이드를 조기화해주는 메소드
function initStatTravel() {
  if (nowMonth >= 3 && nowMonth <= 5) {
    dropmenu_Content.innerText = "Spring";
    initStatTravelData("Spring");
  } else if (nowMonth >= 6 && nowMonth <= 8) {
    dropmenu_Content.innerText = "Summer";
    initStatTravelData("Summer");
  } else if (nowMonth >= 9 && nowMonth <= 11) {
    dropmenu_Content.innerText = "Autumn";
    initStatTravelData("Autumn");
  } else {
    dropmenu_Content.innerText = "Winter";
    initStatTravelData("Winter");
  }

  stat_Drop_Down_Menu_Toggle.addEventListener("click", () => {
    if (stat_Drop_Down_Menu_Toggle.classList.contains("stat-slide")) {
      stat_Drop_Down_Menu_Toggle.classList.remove("stat-slide");
      triangle_Down.classList.remove("rotate");
    } else {
      stat_Drop_Down_Menu_Toggle.classList.add("stat-slide");
      triangle_Down.classList.add("rotate");
    }
  });
  dropmenu_Sub_Contents.forEach((item) => {
    item.addEventListener("click", () => {
      dropmenu_Content.innerText = item.innerText;
      const searchData = item.innerText;

      season_Activity_Item_Title.forEach((item, index) => {
        item.innerText = season_Activity[searchData][index].Activity;
      });

      season_Activity_Item_Bar.forEach((item, index) => {
        item.style.height = season_Activity[searchData][index].percent + "%";
      });

      season_Activity_Item_Percent.forEach((item, index) => {
        item.innerText =
          season_Activity[searchData][index].percent.toString() + "%";
      });
    });
  });
}

// 처음 js가 로드될때 season 영역에 number를 50~100사이 무작의 난수를 저장하는 메소드
function initSubContentNumber() {
  category_Sub_Contnet.forEach((item) => {
    const random_Number = Math.floor(Math.random() * 51) + 50;
    item.innerText = random_Number;
  });
}

// recipe_Mov_Box가 움직이는 메소드
function goToRecipeBox(num) {
  recipeBoxCurrentIndex = num;
  recipe_Box_width = recipe_Season_Items[0].clientWidth;
  recipe_Mov_Box.style.transform =
    "translateX(" + -recipe_Box_width * num + "px)";
}

// season이 선택되면 이전에 선택된 카테고리 바(bar)를 초기화 해주는 메소드
function resetReceipeCategory() {
  receipe_Categorys.forEach((item) => {
    if (item.classList.contains("category-active")) {
      item.classList.remove("category-active");
    }
  });
}

// 처음 js가 로딩 되었을떄 Recipe를 초기화 해주는 메소드
function initRecipe() {
  receipe_Categorys.forEach((item, index) => {
    item.addEventListener("click", () => {
      resetReceipeCategory();
      item.classList.add("category-active");
      goToRecipeBox(index);
    });
  });

  recipe_Season_Items.forEach((item) => {
    const recipe_Number = document.querySelectorAll(".recipe-like-number");
    const star_Number = document.querySelectorAll(".recipe-star-fill");
    recipe_Number.forEach((item) => {
      // 10에서 50 사이의 난수 발생
      const random_Like_Number = Math.floor(Math.random() * 41) + 10;

      item.innerText = random_Like_Number;
    });
    star_Number.forEach((item) => {
      const random_Width_Number = Math.floor(Math.random() * 51) + 50;

      item.style.width = `${random_Width_Number}%`;
    });
  });
}

// 서브 카드만들어주는 메소드
function createNewsSubCardImg(parent, src) {
  const newsSubCardImg = document.createElement("img");
  newsSubCardImg.src = src;
  parent.appendChild(newsSubCardImg);
}

function createNewsSubCardText(parent, description, date) {
  const newsSubCardTextBox = document.createElement("div");
  newsSubCardTextBox.classList.add("news-sub-text");

  let newsSubCardTextStrong = document.createElement("strong");
  let newsSubCardTextDate = document.createElement("div");

  newsSubCardTextStrong.innerText = description;
  newsSubCardTextDate.innerText = date;

  newsSubCardTextBox.appendChild(newsSubCardTextStrong);
  newsSubCardTextBox.appendChild(newsSubCardTextDate);

  parent.appendChild(newsSubCardTextBox);
}

// newsSubCard가 초기에 실행되는 메소드
function initNewsSubCard() {
  shuffleSubCardData.forEach((item, index) => {
    const newsSubCardItem = document.createElement("div");

    newsSubCardItem.classList.add("weather-news-sub-item");
    createNewsSubCardImg(newsSubCardItem, item.thumbnailURL);
    createNewsSubCardText(newsSubCardItem, item.description, item.date);
    news_Sub_Move_Con.appendChild(newsSubCardItem);
    newsSubCardItem.addEventListener("click", () => {
      news_Move_Box.style.transitionDuration = 300 + "ms";
      news_Sub_Move_Con.style.transitionDuration = 300 + "ms";
      if (index + 1 === news_totalCount) {
        goToNewsSubCard(0);
        goToNewsMoveBox(0);
        newsDotBoxReset();
        news_Dot_Box_Items[0].classList.add("square-active");
      } else {
        goToNewsSubCard(index + 1);
        goToNewsMoveBox(index + 1);
        newsDotBoxReset();
        news_Dot_Box_Items[index].classList.add("square-active");
      }
    });
  });
}
// weahter-news-sub-con이 움직이는 메소드
function goToNewsSubCard(num) {
  subNewsCardCurrentIndex = num;
  subNewsCardWidth =
    news_Sub_Move_Con.querySelectorAll("div")[0].clientWidth + 20; // 이미지의 너비를 가져옴

  news_Sub_Move_Con.style.transform =
    "translateX(" + -subNewsCardWidth * num + "px)";
  setTimeout(() => {
    news_Sub_Move_Con.style.transitionDuration = 0 + "ms";
  }, 300);
}

// weather-news-item 자식 태그에 img 태그를 붙여주는 메서드
function createImgCard(parentItem, src) {
  const imgCardBox = document.createElement("div"); // news-card-box
  const imgCardItem = document.createElement("img"); // 뉴스 썸네일 이미지 요소
  imgCardBox.classList.add("news-card-box");
  imgCardItem.src = src;

  imgCardBox.appendChild(imgCardItem);
  parentItem.appendChild(imgCardBox);
}

// weather-news-item 자식 태그에 news-title 태그를 붙여주는 메서드
function createSubCard(parentItem, title, content, date) {
  const subCardBox = document.createElement("div"); // news-sub-card

  subCardBox.classList.add("news-sub-card");

  const strongTitle = document.createElement("strong"); // 뉴스 제목
  const divContent = document.createElement("div"); // 뉴스 내용
  const spanDate = document.createElement("span"); // 뉴스 날짜

  strongTitle.innerText = title;
  divContent.innerText = content;
  spanDate.innerText = date;

  subCardBox.appendChild(strongTitle);
  subCardBox.appendChild(divContent);
  subCardBox.appendChild(spanDate);
  parentItem.appendChild(subCardBox);
}

// news-card 아래쪽에 있는 dot-box를 눌럿을 때 num에 해당되는 translateX의 좌표를 움직여줌
function goToNewsMoveBox(num) {
  newsCardCurrentIndex = num;
  newsCardWidth = news_Move_Box.clientWidth / 5; // 이미지의 너비를 가져옴
  news_Move_Box.style.transform = "translateX(" + -newsCardWidth * num + "px)";
  setTimeout(() => {
    news_Move_Box.style.transitionDuration = 0 + "ms";
    news_Sub_Move_Con.style.transitionDuration = 0 + "ms";
  }, 300);
}

// newsDotBox를 클릭했을 떄 기존에 있던 클래스를 초기화 해주는 메소드
function newsDotBoxReset() {
  news_Dot_Box_Items.forEach((item) => {
    if (item.classList.contains("square-active")) {
      item.classList.remove("square-active");
    }
  });
}

// news-card 아래쪽에 있는 dot-box의 요소들에 click 이벤트 리스너를 추가
news_Dot_Box_Items.forEach((item, index) => {
  item.addEventListener("click", () => {
    newsDotBoxReset();
    item.classList.add("square-active");
    news_Move_Box.style.transitionDuration = 300 + "ms";
    news_Sub_Move_Con.style.transitionDuration = 300 + "ms";
    goToNewsMoveBox(index);
    goToNewsSubCard(index);
  });
});

// 처음 페이지가 로드 되었을 떄 weather-news-item 자식에 각각의 요소를 추가해주는 메소드
function initNewsItem() {
  sortNewsCardData.forEach((item) => {
    const newsItem = document.createElement("div"); // weather-news-item
    newsItem.classList.add("weather-news-item");

    createImgCard(newsItem, item.thumbnailURL);
    createSubCard(newsItem, item.title, item.description, item.date);
    news_Move_Box.appendChild(newsItem);
  });
  news_btns.forEach((item) => {
    item.addEventListener("click", () => {
      newsDotBoxReset();

      // ex) 갯수가 5개 이면서 선택된 현재 뉴스 번호가 0일 떄 왼쪽 버튼을 누르면
      // (0 + (5 - 1)) % 5 -> (0 + 4) % 5 -> 4 % 5 -> 나머지가 4
      // 그래서 4번째 뉴스 카드가 선택됨.
      let leftBtn =
        (newsCardCurrentIndex + (news_totalCount - 1)) % news_totalCount;

      // ex) 갯수가 5개 이면서 선택된 현재 뉴스 번호가 4일 때 오른쪽 버튼을 누르면
      // (4 + 1) % 5 -> 5 % 5 -> 나머지가 0
      // 그래서 0번째 뉴스 카드가 선택됨.
      let rightBtn = (newsCardCurrentIndex + 1) % news_totalCount;
      if (item.classList.contains("prev")) {
        news_Move_Box.style.transitionDuration = 300 + "ms";
        news_Sub_Move_Con.style.transitionDuration = 300 + "ms";
        goToNewsMoveBox(leftBtn);
        goToNewsSubCard(leftBtn);
      } else {
        news_Move_Box.style.transitionDuration = 300 + "ms";
        news_Sub_Move_Con.style.transitionDuration = 300 + "ms";
        goToNewsMoveBox(rightBtn);
        goToNewsSubCard(rightBtn);
      }
      news_Dot_Box_Items.forEach((item, index) => {
        if (index === newsCardCurrentIndex) {
          item.classList.add("square-active");
        }
      });
    });
  });
}

// 이벤트 데이터중에 현재 날짜에 해당하는 데이터를 nowMonthData에 객체 배열 행태로 값을 추가
seasonalEventsData.forEach((item) => {
  if (nowMonth === item.month) {
    item.events.forEach((item) => {
      nowMonthData.push(item);
    });
  }
});

// 기존에 있던 이미지, 점(닷), 슬로건을 초기화 해주는 메소드
function resetClassImgBox() {
  boxs.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });

  dots.forEach((item) => {
    if (item.classList.contains("dot-active")) {
      item.classList.remove("dot-active");
    }
  });

  slogans.forEach((item) => {
    if (item.classList.contains("slogan-active")) {
      item.classList.remove("slogan-active");
    }
  });
}

// 기존꺼를 초기화 한 후에 메인 이미지, 점(닷), 슬로건에 클래스를 추가해주는 메소드
function imgDraw(index) {
  resetClassImgBox();
  boxs[index].classList.add("active");
  dots[index].classList.add("dot-active");
  slogans[index].classList.add("slogan-active");
}

// 각각의 점(닷)에 인엑스 번호를 부여해 클릭했을 떄 해당 인덱스에 맞는 이미지를 보여주는 메소드
dots.forEach((item, index) => {
  item.addEventListener("click", function () {
    imgDraw(index);
  });
});

// 브라우저의 스크롤을 올리거나, 내렷을 때 호출되는 함수
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    header.classList.add("active");
  }
  if (this.window.scrollY <= 0) {
    header.classList.remove("active");
  }
});

// banner의 버튼을 눌럿을 떄 해당 num에 해당하는 이미지를 보여줌
function goToSlider(num) {
  banner_CurrentIndex = num;
  banner_img_width = banner_img_items[0].clientWidth; // 이미지의 너비를 가져옴
  banner_img_parent.style.transform =
    "translateX(" + -banner_img_width * num + "px)";
  setTimeout(() => {
    banner_img_parent.style.transitionDuration = 0 + "ms";
  }, 300);
}

// 이미지 버튼에 클릭했을 떄 해당 이미지가 보여주게 이벤트를 추가.
banner_img_btn.forEach((item) => {
  item.addEventListener("click", () => {
    let leftBtn =
      (banner_CurrentIndex + (banner_totalCount - 1)) % banner_totalCount;
    let rightBtn = (banner_CurrentIndex + 1) % banner_totalCount;
    if (item.classList.contains("prev")) {
      banner_img_parent.style.transitionDuration = 300 + "ms";
      goToSlider(leftBtn);
    } else {
      banner_img_parent.style.transitionDuration = 300 + "ms";
      goToSlider(rightBtn);
    }
  });
});

// 맨처음 메인페이지에 들어 왔을떄 일정에 해당한 이벤트 배너부분 초기화
function initEventBanner() {
  const content_parent = document.querySelector(".event-content-wrap");
  const chMonth =
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1; // 변환된 날짜를 가져옴 ex 1월이면 -> 01 12월 이면 12

  nowMonthData.forEach((item) => {
    const chDayStart =
      item.days.start < 10 ? `0${item.days.start}` : item.days.start; // 해당 데이터에 해당하는 변경된 stary day를 가져옴 ex) 1 -> 01, 15 -> 15
    const chDayEnd = item.days.end < 10 ? `0${item.days.end}` : item.days.end; // 해당 데이터에 해당하는 변경된 end day를 가져옴 ex) 1 -> 01, 15 -> 15

    const chStartDate =
      daysOfWeek[new Date(nowFullYear, nowMonth - 1, item.days.start).getDay()]; // 해당 데이터에 해당하는 변경된  시작 날짜 요일 가져옴 ex) 0 -> 일, 1 -> 월

    const chEndDate =
      daysOfWeek[new Date(nowFullYear, nowMonth - 1, item.days.end).getDay()]; // 해당 데이터에 해당하는 변경된  종료 날짜 요일 가져옴 ex) 0 -> 일, 1 -> 월

    const content_item = document.createElement("div");

    // 날짜 부분

    const content_day = document.createElement("div");
    const content_yymm = document.createElement("div");
    const content_nn = document.createElement("strong");

    content_parent.appendChild(content_item);
    content_item.appendChild(content_day);
    content_day.appendChild(content_yymm);
    content_day.appendChild(content_nn);
    content_item.classList.add("event-content-item");
    content_day.classList.add("content-day");
    content_yymm.classList.add("yymm");

    content_yymm.innerText = new Date().getFullYear() + "." + `${chMonth}`;
    content_nn.innerHTML = chDayStart;

    // 날짜에 해당하는 내용 부분
    const content_info = document.createElement("div");
    const content_detail_date = document.createElement("div");
    const content_detail_story = document.createElement("div");

    content_item.appendChild(content_info);
    content_info.appendChild(content_detail_date);
    content_info.appendChild(content_detail_story);
    content_info.classList.add("content-imformation");

    content_detail_date.innerText = `${chMonth}월${chDayStart}일(${chStartDate}) ~ ${chMonth}월${chDayEnd}일(${chEndDate})  `;
    content_detail_story.innerText = item.name;
  });
}

/**
 * 이 이벤트는 브라우저 창의 크기가 변경될 때 발생합니다.
 * 주로 윈도우 크기 변경에 따른 레이아웃 조정이나 반응형 디자인에 사용됩니다.
 */
window.addEventListener("resize", () => {
  let nowWindowWidth = document.documentElement.clientWidth; // 창을 축소, 확장 할때마다 웹 브라우저 창을 가져옴
  banner_img_width = banner_img_items[0].clientWidth; // 이미지의 너비를 가져옴
  newsCardWidth = news_Move_Box.clientWidth / 5;
  if (parseInt(nowWindowWidth) <= 1046) {
    banner_img_parent.style.transform =
      "translateX(" + -banner_img_width * banner_CurrentIndex + "px)";
    news_Move_Box.style.transform =
      "translateX(" + -newsCardWidth * newsCardCurrentIndex + "px)";
  } else if (
    parseInt(nowWindowWidth) >= 1047 &&
    parseInt(nowWindowWidth) <= 1203
  ) {
    banner_img_parent.style.transform =
      "translateX(" + -banner_img_width * banner_CurrentIndex + "px)";
    news_Move_Box.style.transform =
      "translateX(" + -newsCardWidth * newsCardCurrentIndex + "px)";
  } else if (
    parseInt(nowWindowWidth) >= 1204 &&
    parseInt(nowWindowWidth) <= 1322
  ) {
    banner_img_parent.style.transform =
      "translateX(" + -banner_img_width * banner_CurrentIndex + "px)";
    news_Move_Box.style.transform =
      "translateX(" + -newsCardWidth * newsCardCurrentIndex + "px)";
  } else if (parseInt(nowWindowWidth) >= 1323) {
    banner_img_parent.style.transform =
      "translateX(" + -banner_img_width * banner_CurrentIndex + "px)";
    news_Move_Box.style.transform =
      "translateX(" + -newsCardWidth * newsCardCurrentIndex + "px)";
  }
});

/**
 *  HTML 문서의 초기 로딩이 완료되었을 때 발생합니다.
 *  이 이벤트는 HTML 문서의 모든 요소가 로드되었지만,
 *  외부 리소스(이미지, 스타일시트, 스크립트 파일 등)의 로딩이 완료되지 않은 상태에서 발생합니다.
 */
document.addEventListener("DOMContentLoaded", function () {
  boxs[0].classList.add("active");
  slogans[0].classList.add("slogan-active");
  dots[0].classList.add("dot-active");
  news_Dot_Box_Items[0].classList.add("square-active");
  initEventBanner();
  initNewsItem();
  initNewsSubCard();
  initRecipe();
  initSubContentNumber();
  initStatTravel();
  initHeader();
});
