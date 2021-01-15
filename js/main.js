/* eslint-disable no-undef */

'use trict';

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(() => {
  const scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $('.navbar').removeClass('navbar-dark');
    $('.sticky-top').addClass('scroll');
    $('.navbar').addClass('scroll');
  } else {
    $('.navbar').removeClass('scroll');
    $('.sticky-top').removeClass('scroll');
    $('.navbar').addClass('navbar-dark');
  }
});

$(document).ready(() => {
  // eslint-disable-next-line func-names
  $('div.navbar-nav > a').click(function () {
    $('nav.navbar > a.navbar-brand').removeClass('active');
    $('div.navbar-nav > a').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(() => {
  // eslint-disable-next-line func-names
  $('nav.navbar > a.navbar-brand').click(function () {
    $('div.navbar-nav > a').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').collapse('hide');
  });
});
