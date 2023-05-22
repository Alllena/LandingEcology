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
