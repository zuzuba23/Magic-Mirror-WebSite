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

  autoplay: { delay: 3000 },

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

const nav = document.querySelector('.side-nav-phone ');

function openPhoneMenu() {
  background.style.display = 'block';
  body.style.overflow = 'hidden';
  nav.style.width = '16rem';
  phoneMenu.style.opacity = '1';
  phoneMenu.style.transition = 'opacity 0.5s 0.3s ease';

  phoneMenu.style.visibility = 'visible';
}

function closePhoneMenu() {
  background.style.display = 'none';
  body.style.overflow = 'auto';
  nav.style.width = '0';
  phoneMenu.style.opacity = '0';
  phoneMenu.style.transition = 'opacity .1s ease';

  phoneMenu.style.visibility = 'hidden';
}

function closeMenuButton() {
  background.style.display = 'none';
  body.style.overflow = 'auto';
  phoneMenu.style.opacity = '0';
  phoneMenu.style.transition = 'opacity .1s ease';
  nav.style.width = '0';

  phoneMenu.style.visibility = 'hidden';
}

const links = document.querySelectorAll('.phone-links');
links.forEach((link) => {
  link.addEventListener('click', () => {
    background.style.display = 'none';
    body.style.overflow = 'auto';
    phoneMenu.style.opacity = '0';
    phoneMenu.style.transition = 'opacity .1s ease';
    nav.style.width = '0';

    phoneMenu.style.visibility = 'hidden';
  });
});

const socials = document.querySelectorAll('.socials');
socials.forEach((social) => {
  social.addEventListener('click', () => {
    background.style.display = 'none';
    body.style.overflow = 'auto';
    phoneMenu.style.opacity = '0';
    phoneMenu.style.transition = 'opacity .1s ease';
    nav.style.width = '0';

    phoneMenu.style.visibility = 'hidden';
  });
});

// Gallery
if (window.location.pathname == '/index.html') {
  lightGallery(document.querySelector('.gallery'));
}
