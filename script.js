// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  speed: 1000,
  // spaceBetween: 100,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: { delay: 4000 },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
