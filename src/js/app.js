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
// let im = new Inputmask('+7 (999) 999-99-99');
let im = new Inputmask({
  mask: '+7 (999) 999-99-99',
  onBeforePaste: function (pastedValue, opts) {
    // Удаляем всё, кроме цифр
    var processedValue = pastedValue.replace(/\D/g, "");

    // Если первая цифра 7 или 8 и в строке 11 цифр, убираем первую
    if (processedValue.length === 11 && (processedValue[0] === '7' || processedValue[0] === '8')) {
      return processedValue.substring(1);
    }

    return pastedValue;
  }
});



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


$('.modalProductInfo').on('click', function (event) {
  event.preventDefault(); // Stop the browser from navigating
  document.getElementById('price_more_calc').scrollIntoView({
    behavior: 'smooth'
  });
});
$('.modalScrollToForm').on('click', function (event) {
  event.preventDefault(); // Stop the browser from navigating
  document.getElementById('modalProductForm').scrollIntoView({
    behavior: 'smooth'
  });
});
