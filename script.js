// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 40,

  centeredSlides: true,
  grabCursor: true,
  loop: true,

  speed: 1000,
  // spaceBetween: 100,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  autoplay: { delay: 4000 },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Hamburger menu
const body = document.querySelector('body');

const ham = document
  .querySelector('.ham')
  .addEventListener('click', openPhoneMenu);

const phoneMenu = document.querySelector('.phone-nav');
const background = document.querySelector('.backgound-black');
background.addEventListener('click', closePhoneMenu);

const closeMenuX = document
  .querySelector('.close-menu')
  .addEventListener('click', closeMenuButton);

function openPhoneMenu() {
  phoneMenu.style.display = 'flex';
  // phoneMenu.classList.add('show');
  background.style.display = 'block';
  body.style.overflow = 'hidden';
}

function closePhoneMenu() {
  // phoneMenu.classList.remove('show');

  phoneMenu.style.display = 'none';
  background.style.display = 'none';
  body.style.overflow = 'auto';
}

function closeMenuButton() {
  // phoneMenu.classList.remove('show');

  phoneMenu.style.display = 'none';

  background.style.display = 'none';
  body.style.overflow = 'auto';
}

// Gallery

lightGallery(document.querySelector('.gallery'));
