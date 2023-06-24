import * as flsFunctions from "./modules/function.js";
import { createPagination, updateSlider } from "./modules/slider.js";

// createPagination();
// updateSlider();

import Swiper, { Navigation, Pagination } from "swiper"; // Подключение слайдера (библиотека)

// //  отправка сообщения в телеграмм

// const telegramLink = document.getElementById("telegram-link");

// telegramLink.addEventListener("click", (event) => {
//   event.preventDefault(); // предотвратить выполнение действия по умолчанию
//   const phoneNumber = "+375445606121"; // замените на номер телефона, на который хотите отправить сообщение
//   const messageText = encodeURIComponent(
//     "Привет! Это сообщение из моей ссылки."
//   ); // текст сообщения
//   const telegramUrl = `https://t.me/share/url?url=tel:%2B${phoneNumber}&text=${messageText}`;

//   // Открываем Telegram с помощью ссылки
//   window.open(telegramUrl, "_blank");
// });

// выпадающее меню

// открытие модального окна
// const openModalBtn = document.querySelector(".btn-open-modal");
// const closeModalBtn = document.querySelector(".btn-close-modal");
// const modal = document.querySelector(".modal");
// const phoneInput = document.querySelectorAll("#phone-input");

// openModalBtn.addEventListener("click", () => {
//   modal.classList.add("is-open");
//   document.body.style.overflow = "hidden";
// });

// phoneInput.addEventListener("input", (event) => {
//   const input = event.target;
//   const inputLength = input.value.length;

//   if (inputLength === 3 || inputLength === 7 || inputLength === 10) {
//     input.value += " ";
//   }
// });
// closeModalBtn.addEventListener("click", () => {
//   modal.classList.remove("is-open");
//   document.body.style.overflow = "auto";
// });

// const phoneInputs = document.querySelectorAll(".phone-input");

// const form = document.querySelector(".modal__form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const phone = phoneInput.value;
//   const email = "khatkevich.alena@gmail.com"; // замените на нужный e-mail
//   const subject = "Запрос на консультацию";
//   const body = `Пожалуйста, свяжитесь со мной для консультации по номеру телефона: ${phone}`;

//   const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
//     subject
//   )}&body=${encodeURIComponent(body)}`;

//   window.location.href = mailToLink;
// });
