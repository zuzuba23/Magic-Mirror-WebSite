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
  background.style.display = 'block';
}

function closePhoneMenu() {
  phoneMenu.style.display = 'none';
  background.style.display = 'none';
}

function closeMenuButton() {
  phoneMenu.style.display = 'none';
  background.style.display = 'none';
}

// Gallery

lightGallery(document.querySelector('.gallery'));

// const images = document.querySelectorAll('.photo-booth-image');

// images.forEach((image) => {
//   image.addEventListener('click', () => {
//     image.style.position = 'fixed';
//     image.style.top = '50%';
//     image.style.left = '50%';
//     image.style.transform = 'translate(-50%, -50%)';
//     image.style.zIndex = '12';
//     background.style.display = 'block';
//   });
// });
