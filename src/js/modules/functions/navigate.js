export const dropDawn = () => {
  const navLink = document.querySelector(".drop-down .nav__link");
  const dropDownList = document.querySelector(".drop-down .nav__list");

  navLink.addEventListener("mouseover", () => {
    dropDownList.classList.add("active");
  });

  navLink.addEventListener("mouseout", (event) => {
    if (!event.relatedTarget.closest(".drop-down .nav__list")) {
      dropDownList.classList.remove("active");
    }
  });

  dropDownList.addEventListener("mouseleave", () => {
    dropDownList.classList.remove("active");
  });
};

export const burger = function () {
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-nav]");
  const navItems = document.querySelectorAll("[data-nav-item]");
  const headerDropDown = document.querySelector(
    ".nav-hidden .drop-down .nav__link"
  );
  const bodyDropDown = document.querySelector("[data-nav-list]");

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("burger--active");
    nav.classList.toggle("nav--active");
    bodyDropDown.classList.remove("open");
    if (nav.classList.contains("nav--active")) {
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Закрыть меню");
    } else {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
    }
  });
  navItems.forEach((el) => {
    el.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      nav.classList.remove("nav--active");
    });
  });
  headerDropDown.addEventListener("click", () => {
    bodyDropDown.classList.toggle("open");
    if (bodyDropDown.classList.contains("open")) {
      headerDropDown.setAttribute("aria-expanded", "true");
      bodyDropDown.setAttribute("aria-hidden", "false");
    } else {
      headerDropDown.setAttribute("aria-expanded", "false");
      bodyDropDown.setAttribute("aria-hidden", "true");
    }
  });
};
