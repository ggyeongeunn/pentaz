// banner swiper
let bnSwiper = new Swiper(".bnSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// room swiper
let roomSwiper = new Swiper(".roomSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

// header animation
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY <= 0) {
    header.classList.remove("hide");
  } else if (currentScrollY > lastScrollY) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollY = currentScrollY;
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

// address clipboard
const copy = document.querySelector(".copy");
const address = document.querySelector(".address").textContent.trim();
const toast = document.querySelector(".toast");

copy.addEventListener("click", () => {
  console.log(address);
  navigator.clipboard.writeText(address);
  toast.classList.add("on");
  setTimeout(() => {
    toast.classList.remove("on");
  }, 1000);
});

// aside
const scrollTop = document.querySelector("aside");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTop.style.opacity = 1;
    scrollTop.style.visibility = "visible";
  } else {
    scrollTop.style.opacity = 0;
    scrollTop.style.visibility = "hidden";
  }
});

// top button
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// mobile navigaion
const mobBtn = document.querySelector(".mobile");
const overlay = document.querySelector(".overlay");
const mobMenu = document.querySelector(".mob-submenu");

mobBtn.addEventListener("click", () => {
  mobMenu.classList.toggle("show");

  if (mobMenu.classList.contains("show")) {
    document.body.style.overflow = "hidden";
    overlay.style.display = "block";
  } else {
    document.body.style.overflow = "auto";
    overlay.style.display = "none";
  }
});
