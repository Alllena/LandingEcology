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
