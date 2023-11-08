
const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  parallax: true,
  spaceBetween: 200,
  speed: 800,
  sensitivity: 1,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 500
    },

    640: {
      spaceBetween: 200
    }
  },
});


const slides = document.querySelectorAll('.banner-slide');

slides.forEach((el) => {
  el.addEventListener('mouseover', function () {
    $.fn.pagepiling.setAllowScrolling(false);
  });
  el.addEventListener('touchstart', function () {
    $.fn.pagepiling.setAllowScrolling(false);
    bannerSwiper.slidePrev();
  })
  el.addEventListener('touchmove', function () {
    $.fn.pagepiling.setAllowScrolling(false);
    bannerSwiper.slideNext();
  })
})
document.querySelector('.banner-slide-last').addEventListener('mouseover', function () {
  $.fn.pagepiling.setAllowScrolling(true);
})
document.querySelector('.banner-slide-last').addEventListener('touchstart', function () {
  $.fn.pagepiling.setAllowScrolling(true);
})
document.querySelector('.banner-slide-last').addEventListener('touchmove', function () {
  $.fn.pagepiling.setAllowScrolling(true);
})




