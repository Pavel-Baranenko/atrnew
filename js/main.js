const header = document.querySelector(".header");
const lang = document.querySelector('.lang');

lang.addEventListener('click', () => {
  if (lang.checked) {
    document.querySelector('.en').classList.add('active')
    document.querySelector('.rus').classList.remove('active')
  }
  else {
    document.querySelector('.rus').classList.add('active')
    document.querySelector('.en').classList.remove('active')

  }
})
const menuOpen = document.querySelector('.menu__btn');
const menuCloose = document.querySelector('.cloose-menu')


menuOpen.addEventListener('click', () => {
  document.querySelector('.header__menu').classList.add('active');
})
menuCloose.addEventListener('click', () => {
  document.querySelector('.header__menu').classList.remove('active');
})




const links = document.querySelectorAll('.header__menu-link');

links.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.header__menu').classList.remove('active');
  })
})
document.querySelector('.main').addEventListener('click', () => {
  document.querySelector('.header__menu').classList.remove('active');
})
const swiper = new Swiper('.swiper-content', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 60,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  parallax: true,
  speed: 800,
  mousewheel: {
    releaseOnEdges: true,
  },
});
