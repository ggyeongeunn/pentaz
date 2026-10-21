// banner swiper
const swiper = new Swiper(".bnSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 0,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
