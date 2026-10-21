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

// const nav = document.querySelectorAll("header nav a");
// const subNav = document.querySelectorAll(".submenu .inner ul");

// nav.forEach((item) => {
//   const navWidth = item.offsetWidth;
//   // console.log(navWidth);
// });

// subNav.forEach((sub) => {
//   console.log(sub)
//   sub.style.width = navWidth + "px";
// });