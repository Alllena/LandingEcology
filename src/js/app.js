import * as flsFunctions from "./modules/function.js";
import { createPagination, updateSlider } from "./modules/slider.js";

flsFunctions.checkWebPSupport();

createPagination();
updateSlider();

import Swiper, { Navigation, Pagination } from "swiper"; // Подключение слайдера (библиотека)

//  отправка сообщения в телеграмм

const telegramLink = document.getElementById("telegram-link");

telegramLink.addEventListener("click", (event) => {
  event.preventDefault(); // предотвратить выполнение действия по умолчанию
  const phoneNumber = "+375445606121"; // замените на номер телефона, на который хотите отправить сообщение
  const messageText = encodeURIComponent(
    "Привет! Это сообщение из моей ссылки."
  ); // текст сообщения
  const telegramUrl = `https://t.me/share/url?url=tel:%2B${phoneNumber}&text=${messageText}`;

  // Открываем Telegram с помощью ссылки
  window.open(telegramUrl, "_blank");
});

//плавный  скролл страницы
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// отображение heder
const header = document.querySelector(".header");
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // скролл вниз
    header.classList.add("header-hidden");
  } else {
    // скролл вверх
    header.classList.remove("header-hidden");
  }

  lastScrollPosition = currentScrollPosition;
});

// выпадающее меню
const subNav = document.querySelector(".nav__sub-nav");

subNav.addEventListener("mouseenter", function () {
  const subList = subNav.querySelector(".nav__sub-list");

  subList.style.transform = "translate(0, 0)";
});

subNav.addEventListener("mouseleave", function () {
  const subList = subNav.querySelector(".nav__sub-list");

  subList.style.transform = "translate(0, -100%)";
});

const link = document.querySelector(".nav__sub-nav_link");

link.addEventListener("click", function (event) {
  event.preventDefault();

  const subList = link.closest(".nav__sub-nav").querySelector(".nav__sub-list");

  subList.style.transform = "translate(0, -100%)";
});

// открытие модального окна
const openModalBtn = document.querySelector(".btn-open-modal");
const closeModalBtn = document.querySelector(".btn-close-modal");
const modal = document.querySelector(".modal");
const phoneInput = document.querySelectorAll("#phone-input");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

// phoneInput.addEventListener("input", (event) => {
//   const input = event.target;
//   const inputLength = input.value.length;

//   if (inputLength === 3 || inputLength === 7 || inputLength === 10) {
//     input.value += " ";
//   }
// });
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
  document.body.style.overflow = "auto";
});

const phoneInputs = document.querySelectorAll(".phone-input");

phoneInputs.forEach((phoneInput) => {
  phoneInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");
    let formatted = "";

    for (let i = 0; i < value.length; i++) {
      if (i == 0) {
        formatted += "(";
      } else if (i == 3) {
        formatted += ") ";
      } else if (i == 6) {
        formatted += "-";
      } else if (i == 8) {
        formatted += "-";
      }
      formatted += value[i];
    }

    this.value = formatted;
  });
});

const form = document.querySelector(".modal__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const phone = phoneInput.value;
  const email = "khatkevich.alena@gmail.com"; // замените на нужный e-mail
  const subject = "Запрос на консультацию";
  const body = `Пожалуйста, свяжитесь со мной для консультации по номеру телефона: ${phone}`;

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailToLink;
});
