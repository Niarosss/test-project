const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.menu-btn-open');
const mobileBtnClose = document.querySelector('.menu-btn-close');

const toggleMobile = () => mobileMenu.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', toggleMobile);
mobileBtnClose.addEventListener('click', toggleMobile);
