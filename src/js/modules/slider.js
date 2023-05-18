const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pagination = document.querySelector(".pagination");

let currentIndex = 0;

export function updateSlider() {
  document.querySelector(".slides").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
  pagination.childNodes.forEach((dot, index) => {
    dot.style.backgroundColor = index === currentIndex ? "#8C6969" : "#F7B4B4";
  });
}

export function createPagination() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
    pagination.appendChild(dot);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});
