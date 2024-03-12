/**overlayBtn 관련 변수 영역 */

const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const login_con = document.getElementById("login-con");
const con = document.getElementById("container");

/**Icon 관련 변수 영역 */

const allWeather = document.querySelectorAll(".icon-container span svg");
const spring = document.querySelectorAll(".spring-flower");
const summer = document.querySelectorAll(".summer-sun");
const autumn = document.querySelectorAll(".autumn-maple");
const winter = document.querySelectorAll(".winter-snow");
let lastSelectWeather = ""; // 이전 계절을 담는 변수

/**떨어지는 변수 영역 */
const fallIcon = document.querySelector(".fall-icon");
const loginCon = document.querySelector(".login-con");
let intervalId; // setTimeout을 clearTimeout해주기 위한 변수
let timer = 0; // 100 프레임마다 원소를 생성하게 도와주는 timer

let fallData = []; // 실제 Icon을 눌럿을 때 떨어지는 원소를 저장하는 배열 객체
const totalCount = 15; // Icon을 생성할 수 있는 총 갯수

/**
 * 생성자로는 login-con원소의 크기(x)에 포함되도록 난수 rx, 그리고 각 아이콘을 눌럿을 떄 생성되는
 * img 주소
 */
class fallIconData {
  constructor(rx, img) {
    this.ele = document.createElement("div");
    this.ele.style.left = `${rx}px`;
    this.ele.classList.add("fall-icon");
    this.ele.style.backgroundImage = `url(/Login/img/${img}.svg)`;
    this.x = -5;
  }

  /**login-con 아래에 원소를 그려(생성해)주는 함수 */
  draw() {
    loginCon.appendChild(this.ele);
  }

  /**login-con 높이(y)를 넘겻을 떄 원소를 삭제하는 함수 */
  clear() {
    this.ele.remove();
  }
  /**10 프레임마다 호출하는 함수 */
  down() {
    this.x++; // 10프레임 마다 x를 1초씩 증가
    this.ele.style.top = `${this.x}px`; // 10프레임마다 해당 ele top값을 1px씩 변경
  }
}

/**버튼을 눌럿을 때 overlay가 움직이도록 만든 이벤트 listener */
signUpBtn.addEventListener("click", () => {
  con.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  con.classList.remove("right-panel-active");
});

/**  아이콘을 클릭했을 때 기존에 있던 아이콘을 초기화 하는 메소드 */
function resetIconColor() {
  allWeather.forEach((ele) => {
    // 만약 이전에 선택한 계절 아이콘이 있다면 해당 아이콘만 css 클래스 삭제
    if (ele.classList.contains(`icon-${lastSelectWeather}`)) {
      console.log(lastSelectWeather);
      ele.classList.remove(`icon-${lastSelectWeather}`);
    }
  });
}

/**선택한 아이콘에 따라 해당되는 chCss 클래스를 적용*/
function chIconColor(chData, chCss) {
  resetIconColor();
  chData.forEach((data) => {
    data.classList.add(`icon-${chCss}`);
  });
}

/**각각의 계절 아이콘을 클릭할 떄 마다 기존에 있던 원소들을 초기화 해주는 메소드 */
function resetFallIcon() {
  fallData.forEach((item) => {
    item.clear();
  });
  fallData = [];
  clearTimeout(intervalId);
}

/**순서대로 봄, 여름, 가을, 겨울 아이콘을 눌럿을 때 Sign-in, Sign-up 부분에 해당하는 아이콘 색상을 변경 */
spring.forEach((item) => {
  item.addEventListener("click", () => {
    chIconColor(spring, "spring");
    lastSelectWeather = "spring";
    resetFallIcon();
    fallingIcon("flower1");
  });
});

summer.forEach((item) => {
  item.addEventListener("click", () => {
    chIconColor(summer, "summer");
    lastSelectWeather = "summer";
    resetFallIcon();
    fallingIcon("brightness-high-fill");
  });
});

autumn.forEach((item) => {
  item.addEventListener("click", () => {
    chIconColor(autumn, "autumn");
    lastSelectWeather = "autumn";
    resetFallIcon();
    fallingIcon("suit-club-fill");
  });
});

winter.forEach((item) => {
  item.addEventListener("click", () => {
    chIconColor(winter, "winter");
    lastSelectWeather = "winter";
    resetFallIcon();
    fallingIcon("snow");
  });
});

/**
 * 계절에 해당하는 아이콘을 눌럿을 떄 10프레임 마다 호출되는 함수
 */

function fallingIcon(img) {
  //총 떨어지는 아이콘의 갯수가 totalCount보다 작을 떄 실행되는 조건문
  if (fallData.length < totalCount) {
    timer++;
    if (timer % 50 === 0) {
      let rx = Math.floor(Math.random() * (login_con.clientWidth - 30)); // login-con 너비 초가되지 않은 범위내에 임위이(난수) 값을 받음
      let dummy = new fallIconData(rx, img); // 클래스 생성
      dummy.draw(); // 생성후 실제 html에 표현
      fallData.push(dummy); // 생성된 데이터를 맨뒤에 저장
    }
  }

  fallData.forEach((item) => {
    item.down(); // 1씩 top값을 증가

    // 만약 해당 아이콘의 x값이 login-con 높이+10를 넘어가면 원소, 배열에서 삭제
    if (item.x > login_con.clientHeight + 10) {
      item.clear();
      fallData.shift();
    }
  });
  intervalId = setTimeout(fallingIcon, 10, img);
}

// fallingIcon();
