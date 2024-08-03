const reter = new Swiper('.swiper', {

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1100: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },

});


const swiper = new Swiper('.review-swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
})

AOS.init();

const navToggleIcon = document.querySelector('.btn__toggle')
const menu = document.querySelector('.menu')
const navToggleIconClose = document.querySelector(".close__menu")


navToggleIconClose.addEventListener("click", function () {
  menu.classList.toggle("menu__close");
  menu.classList.remove("menu--open");
})


navToggleIcon.addEventListener('click', function () {
  alert("hi")
})

