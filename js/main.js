/* eslint-disable no-undef */

// $(() => {
//   $('[data-toggle="tooltip"]').tooltip();
// });
const mainLinks = document.querySelectorAll('.nav--main .nav__link');
const mainBrand = document.querySelector('.nav--main .nav__brand');

window.onscroll = () => {
  if (window.scrollY >= 1) {
    document.querySelector('.nav.nav--main').classList.add('scroll');
  } else {
    document.querySelector('.nav.nav--main').classList.remove('scroll');
  }
};

function setActiveLink(e) {
  mainLinks.forEach((link) => link.classList.remove('active'));
  mainBrand.classList.remove('active');
  e.currentTarget.classList.add('active');
}

mainLinks.forEach((link) => link.addEventListener('click', setActiveLink));
mainBrand.addEventListener('click', setActiveLink);
