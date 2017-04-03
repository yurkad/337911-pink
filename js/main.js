var menuToggle = document.querySelector('.main-nav__toggle');
var menuWrapper = document.querySelector('.main-nav__wrapper');

menuToggle.classList.remove('main-nav__toggle--nojs');
menuToggle.classList.add('main-nav__toggle--closed');
menuWrapper.classList.remove('main-nav__wrapper--nojs');
menuWrapper.classList.add('main-nav__wrapper--closed');

menuToggle.addEventListener('click', function() {
  menuWrapper.classList.toggle('main-nav__wrapper--closed');
  if (menuToggle.classList.contains('main-nav__toggle--closed')) {
    menuToggle.classList.remove('main-nav__toggle--closed');
    menuToggle.classList.add('main-nav__toggle--opened');
    menuWrapper.classList.add('main-nav__wrapper--opened');
  } else if (menuToggle.classList.contains('main-nav__toggle--opened')) {
    menuToggle.classList.remove('main-nav__toggle--opened');
    menuToggle.classList.add('main-nav__toggle--closed');
    menuWrapper.classList.remove('main-nav__wrapper--opened');
    menuWrapper.classList.add('main-nav__wrapper--closed');
  }
});
