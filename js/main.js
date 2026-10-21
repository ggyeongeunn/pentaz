// banner swiper
const swiper = new Swiper(".bnSwiper", {
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 0,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// nav element width
const navList = document.querySelectorAll("header nav a");
const subList = document.querySelectorAll(".submenu .inner > ul");

navList.forEach((item, index) => {
  // navigation width value
  const navWidth = item.offsetWidth;
  subList[index].style.width = navWidth + "px";

  // a tag mouseover style
  item.addEventListener("mouseenter", () => {
    navList.forEach((a) => {
      // reset
      a.classList.remove("on");
    });
    item.classList.add("on");
  });
});

// nav mouseover function
const nav = document.querySelector("header nav.inner");
const headerLower = document.querySelector(".lower");
const submenu = document.querySelector(".submenu");
const subNav = document.querySelectorAll(".submenu .depth2");

// menu mouseenter event
nav.addEventListener("mouseenter", () => {
  // height reset
  let maxHeight = 0;
  subNav.forEach((item) => {
    maxHeight = Math.max(maxHeight, item.offsetHeight);
  });
  submenu.style.height = maxHeight + "px";
});
// mouseleave event
headerLower.addEventListener("mouseleave", () => {
  submenu.style.height = "0px";
  navList.forEach((a) => a.classList.remove("on"));
});
// 1depth style event
subNav.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    navList.forEach((a) => a.classList.remove("on"));
    navList[index].classList.add("on");
  });
});
