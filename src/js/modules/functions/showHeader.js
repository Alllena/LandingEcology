export const showHeader = () => {
  // выбираем заголовок
  const header = document.querySelector(".header");

  // сохраняем позицию прокрутки
  let lastScrollPosition = 0;

  // добавляем обработчик события прокрутки окна
  window.addEventListener("scroll", () => {
    // сохраняем текущую позицию прокрутки
    const currentScrollPosition = window.scrollY;

    // если прокрутка вниз и ширина экрана больше 1000px
    if (
      currentScrollPosition > lastScrollPosition &&
      window.innerWidth > 1000
    ) {
      // скрываем header
      header.classList.add("header--hidden");
    } else {
      // показываем header
      header.classList.remove("header--hidden");
    }

    // сохраняем позицию прокрутки для следующей проверки
    lastScrollPosition = currentScrollPosition;
  });
};
