// 🧶
// pc 메인메뉴 관련
const menuLis = document.querySelectorAll(".header_gnb > li");
const subMenu = document.querySelectorAll(".header_subMenu");
menuLis.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    let subUl = li.querySelector(".header_subMenu");
    if (!subUl) return;
    subUl.classList.add("active");
    subUl.style.maxHeight = subUl.scrollHeight + "px";
  });
});

menuLis.forEach((li) => {
  li.addEventListener("mouseleave", () => {
    let subUl = li.querySelector(".header_subMenu");
    if (!li.querySelector(".header_subMenu")) return;
    subUl.classList.remove("active");
    subUl.style.maxHeight = null;
  });
});



// 🧶
/* 검색 클릭 시 */
const searchIcon = document.querySelector(".header_searchBtn");
const searchBox = document.querySelector(".header_searchBox");
const searchMobile = document.querySelector(".mobile_search");
searchIcon.addEventListener("click", () => {
  if (document.body.offsetWidth >= 768) {
    // 브라우저 width : 769~1920
    searchBox.classList.toggle("view");
    if (searchBox.classList.contains("view")) {
      searchBox.focus();
    } else {
      searchBox.value = "";
    }
  } else {
    // 브라우저 width : 0~768
    searchMobile.classList.add("view");
  }
});


// 🧶
// mobile Search CloseBtn
const searchClose = document.querySelector(".search_close_btn");
searchClose.addEventListener("click", () => {
  searchMobile.classList.remove("view");
});



// 🧶
/* 모바일 서브메뉴 관련 */
/* 미친 포기다. */
const mMLis = document.querySelectorAll(".mobile_menu > li"); // 메인메뉴
const subUlAll = document.querySelectorAll(".mobile_sub");

mMLis.forEach((mLi) => {
  mLi.addEventListener("click", () => {
    // 메인메뉴 li 기선제압
    mMLis.forEach((removeLi) => { removeLi.classList.remove("active"); });
    mLi.classList.add("active");

    // Sub 메뉴 li 기선제압
    const subUl = mLi.querySelector(".mobile_sub");
    // 서브메뉴 안 갖고 있음 return
    if (!subUl) return;
    // 갖고 있음 실행
    subUlAll.forEach((removeUl) => {
      removeUl.classList.remove("view");
      removeUl.style.maxHeight = "0";
    });
    subUl.classList.add("view");
    subUl.style.maxHeight = subUl.scrollHeight + "px"; // 실제 높이 적용

  });
});


// 🧶
// 768 메뉴 아이콘 클릭 시
const mobileMenuIcon = document.querySelector(".header_mobile_menu");
const mobileMenuBox = document.querySelector(".mobile_menu_container");
mobileMenuIcon.addEventListener("click", () => {
  mobileMenuBox.classList.add("view");
});


// 🧶
// 모바일 메뉴 클로즈 버튼
const menuClose = document.querySelector(".close_btn");
menuClose.addEventListener("click", () => {
  mobileMenuBox.classList.remove("view");
});













// 🧶
// 일을 사랑합니다 버튼 상호작용
function test() {
  const iLBtn = window.innerWidth > 1024 ? document.querySelectorAll(".iL_button_wrap > button") : document.querySelectorAll(".mo_iL_btn_wrap > button");
  const iLBox = document.querySelector(".iceLov_img_box"); // div background:url();
  const iLTitle = document.querySelector(".iL_title"); // 타이틀
  const iLContents = document.querySelector(".iL_contents"); // 내용
  const iLgoBtn = document.querySelector(".iceLov_btn > p"); // 더보기 버튼
  const iLcon = [
    "우리의 원료들은 환상적인 맛의 아이스크림을 만드는 것은 물론, 사회의 긍정적 변화를 지원합니다.<span class='span_one'> 벤앤제리스는 아이스크림을 만드는, 사회적 정의를 구현하는 기업이 되기 위해 노력하고 있습니다.</span> <span class='span_two'>3가지 영역의 미션 전반에서 항상 '연계된 번영'이라는 가치를 강화하기 위해 노력하고 있습니다.</span>",
    "사업과 관련된 모든 사람이 상생할 수 있는 기회를 창출하는 것이 목표입니다.",
    "우리는 우리가 중요하게 생각하는 행동주의의 대의에 대한 인식을 높이고 이를 지원하고 있습니다."
  ]; // 내용에 들어갈 것들
  const iLgobtntxt = [
    "제품의 원료 조달",
    "우리의 사명과 가치",
    "우리가 중요하게 생각하는 문제"
  ]; // 더보기에 들어갈 것들


  // [순서]
  // 클릭한 버튼에 active주고
  // 나머지 버튼에 active 없애기
  // active한 아이와 연결된 내용을 보여주기
  // 연결점 : 타이틀-버튼 Txt,  내용-배열 Index, 버튼-배열 Index, 이미지-url경로 이름 같게하고 Index+1
  //
  iLBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e, i) => {

      iLBtn.forEach((removeBtn) => { removeBtn.classList.remove("active"); });
      btn.classList.add("active");

      /*
      이거 안 해도 돼 ㅋㅋ
      iLBox.forEach((viewBox, i)=>{
        iLBox.forEach((removeBox => { removeBox.classList.remove("view") }));
        if(index === i){
          viewBox.classList.add("view");
          viewBox.style.backgroundImage = `url("../images/iL_img${index}.png")`;
        }
      });*/

      iLTitle.innerHTML = btn.innerText;
      iLContents.innerHTML = iLcon[index];
      iLgoBtn.innerHTML = iLgobtntxt[index];
      iLBox.style.backgroundImage = `url("images/iL_img${index + 1}.png")`;

      // if (document.body.innerWidth <= 600) {
      //   const spanTwo = document.querySelector(".span_two");
      //   if (spanTwo) spanTwo.style.display = "none";
      // }
    });
  });
}
test();







// 🧶
/* 빌보드 이미지 마우스 움직임 감지 효과 */
// 적당히 해~
function billboardmove() {
  document.body.addEventListener("mousemove", (e) => {
    // 마우스 좌표값 구하기
    let posX = e.pageX; // 조금씩 이동하게 하기 위해서, 값을 나눔
    let posY = e.pageY;
    if (window.innerWidth > 1240) { //window.innerWidth <= 1440 && 

      document.querySelector(".mainB_ice_img1").style.bottom = (18 + (posY / 80)) + "%";

      document.querySelector(".mainB_ice_img2").style.left = (24 + (posY / 80)) + "px";
      document.querySelector(".mainB_ice_img2").style.bottom = (160 + (posY / 80)) + "px";

      document.querySelector(".mainB_cloud_img1").style.top = (42 + (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img2").style.top = (142 + (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img3").style.right = (334 - (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img3").style.top = (494 + (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img4").style.right = (84 + (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img4").style.bottom = (160 - (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img5").style.left = (42 + (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img5").style.bottom = (240 + (posY / 50)) + "px";
      
    }else if(window.innerWidth <= 1240 && window.innerWidth > 1200){

      document.querySelector(".mainB_ice_img1").style.bottom = (20 + (posY / 80)) + "%";
      document.querySelector(".mainB_cloud_img2").style.top = (32 + (posY / 50)) + "%";

    }else if(window.innerWidth <= 1200 && window.innerWidth > 1024){ // 여기까지 PC
      
      document.querySelector(".mainB_ice_img1").style.right = (0 - (posX / 70)) + "px"; //0은 초기값
      document.querySelector(".mainB_ice_img1").style.bottom = (10 + (posY / 80)) + "%";

      document.querySelector(".mainB_ice_img2").style.left = (83 - (posX / 70)) + "px";
      document.querySelector(".mainB_ice_img2").style.bottom = (100 + (posY / 70)) + "px";

      document.querySelector(".mainB_cloud_img1").style.left = (220 - (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img1").style.top = (86 - (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img2").style.right = (86 - (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img2").style.top = (106 + (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img3").style.right = (440 - (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img3").style.bottom = (420 + (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img4").style.right = (120 + (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img4").style.bottom = (260 - (posY / 50)) + "px";

      document.querySelector(".mainB_cloud_img5").style.left = (110 + (posX / 50)) + "px";
      document.querySelector(".mainB_cloud_img5").style.bottom = (200 + (posY / 50)) + "px";

    } else if (window.innerWidth <= 1024 && window.innerWidth > 840) {

      document.querySelector(".mainB_ice_img1").style.bottom = 14 + "%";

      document.querySelector(".mainB_ice_img2").style.left = -1 + "%";
      document.querySelector(".mainB_ice_img2").style.bottom = 12 + "%";

      document.querySelector(".mainB_cloud_img1").style.left = 2 + "%";

      document.querySelector(".mainB_cloud_img2").style.right = 4 + "%";

      document.querySelector(".mainB_cloud_img3").style.right = 22 + "%";

    }else if(window.innerWidth <= 840 && window.innerWidth > 600){

      document.querySelector(".mainB_ice_img1").style.right = 0 + "px"; 
      document.querySelector(".mainB_ice_img1").style.bottom = 18 + "%";
      
      document.querySelector(".mainB_ice_img2").style.bottom = 20 + "%";

      document.querySelector(".mainB_cloud_img1").style.top = 30 + "%";

      document.querySelector(".mainB_cloud_img3").style.right = 26 + "px";
      document.querySelector(".mainB_cloud_img3").style.top = 50 + "%";

      document.querySelector(".mainB_cloud_img4").style.right = 0 + "px";
      document.querySelector(".mainB_cloud_img4").style.bottom = 30 + "%";

      document.querySelector(".mainB_cloud_img5").style.bottom = 26 + "%";

    }else if(window.innerWidth <= 600 && window.innerWidth > 0){

      document.querySelector(".mainB_ice_img1").style.left = -8 + "%"; 
      document.querySelector(".mainB_ice_img1").style.top = 22 + "%"; 

      document.querySelector(".mainB_ice_img2").style.left = -3 + "%";
      document.querySelector(".mainB_ice_img2").style.bottom = 16 + "%";

      document.querySelector(".mainB_cloud_img1").style.left = 4 + "%";
      document.querySelector(".mainB_cloud_img1").style.top = 26 + "%";

      document.querySelector(".mainB_cloud_img3").style.right = 32 + "%";
      document.querySelector(".mainB_cloud_img3").style.top = 46 + "%";

      document.querySelector(".mainB_cloud_img5").style.left = 0 + "px";
      document.querySelector(".mainB_cloud_img5").style.bottom = 20 + "%";

    }
  });
}
billboardmove();




// function billboardmove() {
//   if (window.innerWidth >= 1200) {
//     document.body.addEventListener("mousemove", moveHandler, true);
//     return;
//   } else {
//     document.body.removeEventListener("mousemove", moveHandler, true); // 이벤트 제거
//     resetBillboardImages(); // 위치 초기화
//   }

//   function moveHandler(e) {
//     let posX = e.pageX / 50;
//     let posY = e.pageY / 50;

//     document.querySelector(".mainB_ice_img1").style.right = (0 - (posX - 20)) + "px";
//     document.querySelector(".mainB_ice_img1").style.bottom = (10 + posY) + "%";

//     document.querySelector(".mainB_ice_img2").style.left = (83 - (e.pageX / 10)) + "px";
//     document.querySelector(".mainB_ice_img2").style.bottom = (100 + (posY + 50)) + "px";

//     document.querySelector(".mainB_cloud_img1").style.left = (220 - (posX - 10)) + "px";
//     document.querySelector(".mainB_cloud_img1").style.top = (86 - (posY + 35)) + "px";

//     document.querySelector(".mainB_cloud_img2").style.right = (86 - (posX - 10)) + "px";
//     document.querySelector(".mainB_cloud_img2").style.top = (106 + (posY + 30)) + "px";

//     document.querySelector(".mainB_cloud_img3").style.right = (440 - (posX + 100)) + "px";
//     document.querySelector(".mainB_cloud_img3").style.bottom = (420 + (posY + 30)) + "px";

//     document.querySelector(".mainB_cloud_img4").style.right = (120 + (posX - 50)) + "px";
//     document.querySelector(".mainB_cloud_img4").style.bottom = (260 - (posY + 80)) + "px";

//     document.querySelector(".mainB_cloud_img5").style.left = (110 + (posX - 80)) + "px";
//     document.querySelector(".mainB_cloud_img5").style.bottom = (200 + (posY + 30)) + "px";
//   }

//   function resetBillboardImages() {
//     document.querySelector(".mainB_ice_img1").style.right = "0px";
//     document.querySelector(".mainB_ice_img1").style.bottom = "10%";

//     document.querySelector(".mainB_ice_img2").style.left = "83px";
//     document.querySelector(".mainB_ice_img2").style.bottom = "100px";

//     document.querySelector(".mainB_cloud_img1").style.left = "220px";
//     document.querySelector(".mainB_cloud_img1").style.top = "86px";

//     document.querySelector(".mainB_cloud_img2").style.right = "86px";
//     document.querySelector(".mainB_cloud_img2").style.top = "106px";

//     document.querySelector(".mainB_cloud_img3").style.right = "440px";
//     document.querySelector(".mainB_cloud_img3").style.bottom = "420px";

//     document.querySelector(".mainB_cloud_img4").style.right = "120px";
//     document.querySelector(".mainB_cloud_img4").style.bottom = "260px";

//     document.querySelector(".mainB_cloud_img5").style.left = "110px";
//     document.querySelector(".mainB_cloud_img5").style.bottom = "200px";
//   }
// }
// billboardmove();



// function moveBillboardImg(){
//   document.body.addEventListener("mousemove", (e)=>{

//     // 마우스 좌표갑 구하기
//     let posX = e.pageX / 50; // 조금씩 이동하게 하기 위해서, 값을 나눔
//     let posY = e.pageY / 50;

//     document.querySelector(".mainB_ice_img1").style.right = (0 - (posX-20))+"px"; //0은 초기값
//     document.querySelector(".mainB_ice_img1").style.bottom = (10 + posY)+"%";

//     document.querySelector(".mainB_ice_img2").style.left = (83 - (e.pageX / 10))+"px";
//     document.querySelector(".mainB_ice_img2").style.bottom = (100 + (posY+50))+"px";

//     document.querySelector(".mainB_cloud_img1").style.left = (220 - (posX-10))+"px";
//     document.querySelector(".mainB_cloud_img1").style.top = (86 - (posY+35))+"px";

//     document.querySelector(".mainB_cloud_img2").style.right = (86 - (posX-10))+"px";
//     document.querySelector(".mainB_cloud_img2").style.top = (106 + (posY+30))+"px";

//     document.querySelector(".mainB_cloud_img3").style.right = (440 - (posX+100))+"px";
//     document.querySelector(".mainB_cloud_img3").style.bottom = (420 + (posY+30))+"px";

//     document.querySelector(".mainB_cloud_img4").style.right = (120 + (posX-50))+"px";
//     document.querySelector(".mainB_cloud_img4").style.bottom = (260 - (posY+80))+"px";

//     document.querySelector(".mainB_cloud_img5").style.left = (110 + (posX-80))+"px";
//     document.querySelector(".mainB_cloud_img5").style.bottom = (200 + (posY+30))+"px";
//   });
// }


// function initBillboardImg() {
//   document.querySelector(".mainB_ice_img1").style.right = "0px";
//   document.querySelector(".mainB_ice_img1").style.bottom = "10%";

//   document.querySelector(".mainB_ice_img2").style.left = "83px";
//   document.querySelector(".mainB_ice_img2").style.bottom = "100px";

//   document.querySelector(".mainB_cloud_img1").style.left = "220px";
//   document.querySelector(".mainB_cloud_img1").style.top = "86px";

//   document.querySelector(".mainB_cloud_img2").style.right = "86px";
//   document.querySelector(".mainB_cloud_img2").style.top = "106px";

//   document.querySelector(".mainB_cloud_img3").style.right = "440px";
//   document.querySelector(".mainB_cloud_img3").style.bottom = "420px";

//   document.querySelector(".mainB_cloud_img4").style.right = "120px";
//   document.querySelector(".mainB_cloud_img4").style.bottom = "260px";

//   document.querySelector(".mainB_cloud_img5").style.left = "110px";
//   document.querySelector(".mainB_cloud_img5").style.bottom = "200px";
// }

// function howBillboardImg(){
//   if(window.innerWidth >= 1200){
//     console.log("b");
//     moveBillboardImg();
//     return;
//   }else if(window.innerWidth < 1200){
//     console.log("a");
//     initBillboardImg();
//     return;
//   }
// }
// howBillboardImg();







// 🧶
/* 스와이퍼 NEW 소식 */
function newIssue() {
  var swiper = new Swiper(".mySwiper", {
    //slidesPerView: 3, // 3개씩 보여지기
    spaceBetween: 32, // ★ slide 간 간격(px)
    loop: false, // 몇 개 상관없이 무한루프로 반복돼서 보여주는 것.
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: { // 반응형
      0: { slidesPerView: 1 },
      769: { slidesPerView: 2 }, /* min-width */
      1201: { slidesPerView: 3 }
    }
  });
}
newIssue();

window.addEventListener("resize", () => {
  newIssue();
});

/*
    [스와이퍼 갑자기 안되면~]
    let mySwiper; // 전역 변수로 swiper 저장
 
function newIssue() {
  // 기존 swiper 인스턴스가 있으면 제거
  if (mySwiper) {
    mySwiper.destroy(true, true);
  }
 
  // 새로 swiper 생성해서 mySwiper에 저장
  mySwiper = new Swiper(".mySwiper", {
    spaceBetween: 32,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
}
 
newIssue();
 
// resize 시에도 새로 실행
window.addEventListener("resize", () => {
  newIssue();
});
*/






// RESIZE
window.addEventListener("resize", () => {
  test();

  // 빌보드 이미지 마우스 움직임 조작
  billboardmove();
});