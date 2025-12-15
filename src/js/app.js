import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/inputmask.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: true,
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

let podborFilterMore = document.querySelectorAll('.podbor-filter-more');
podborFilterMore.forEach(el => {
  let hiddenFields = el.closest('.podbor-filter-form').querySelectorAll('.input-hidden');
  let buttonText = el.querySelector('span');

  el.addEventListener('click', () => {
    if (buttonText.innerHTML == "Расширенный поиск") {
      buttonText.innerHTML = "Свернуть";
    } else if (buttonText.innerHTML == "Свернуть") {
      buttonText.innerHTML = "Расширенный поиск";
    } else {
      null
    }
    el.classList.toggle('active');
    hiddenFields.forEach(field => {
      field.classList.toggle('input-hidden');
    });
  });
});

let paramBtnMore = document.querySelectorAll('.param-action');
paramBtnMore.forEach(el => {
  let hiddenFields = el.closest('.paramActionWrap').querySelectorAll('.podbor-hidden');
  let buttonText = el.querySelector('span');

  el.addEventListener('click', () => {
    if (buttonText.innerHTML == "Аукционный лист") {
      buttonText.innerHTML = "Свернуть";
    } else if (buttonText.innerHTML == "Свернуть") {
      buttonText.innerHTML = "Аукционный лист";
    } else {
      null
    }
    el.classList.toggle('active');
    hiddenFields.forEach(field => {
      field.classList.toggle('podbor-hidden');
    });
  });
});

// Инициализация слайдера modalProductSlider
const modalProductSlider = document.querySelector('.modalProductSlider');
var mySwiperProductSlider = new Swiper(modalProductSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  pagination: {
    el: document.querySelector('.modalProductSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    prevEl: document.querySelector('.modalProductSlider .navArrowPrev'),
    nextEl: document.querySelector('.modalProductSlider .navArrowNext'),
  },
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


