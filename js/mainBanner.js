const firstSlide = document.querySelector(".slider__item:first-child");
const lastSlide = document.querySelector(".slider__item:last-child");
const sliderImgs = document.querySelectorAll(".slider__item");
const leftBtn = document.querySelector(".js-leftBtn");
const rightBtn = document.querySelector(".js-rightBtn");
const dotBtns = document.querySelectorAll(".sliderDotBtns button");

const SHOWING_CLASS = "showing";
const WHITE_DOT = "sliderDotBtn__white";

//right btn click
const slide = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentDotBtn = document.querySelector(`.${WHITE_DOT}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentDotBtn.classList.remove(WHITE_DOT);
    const nextSlide = currentSlide.nextElementSibling;
    const nextDotBtn = currentDotBtn.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
      nextDotBtn.classList.add(WHITE_DOT);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
      dotBtns[0].classList.add(WHITE_DOT);
    }
  }
};
// left btn click
const handleSlide = () => {
  console.log();
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentDotBtn = document.querySelector(`.${WHITE_DOT}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentDotBtn.classList.remove(WHITE_DOT);
    const prevSlide = currentSlide.previousElementSibling;
    const preDotBtn = currentDotBtn.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
      preDotBtn.classList.add(WHITE_DOT);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
      dotBtns[5].classList.add(WHITE_DOT);
    }
  }
};

const handleDotBtns = (e) => {
  const dotBtn = e.target;
  const targetImg = sliderImgs[dotBtn.id - 1];
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const currentDotBtn = document.querySelector(`.${WHITE_DOT}`);
  if (currentSlide && currentDotBtn) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentDotBtn.classList.remove(WHITE_DOT);
    dotBtn.classList.add(WHITE_DOT);
    targetImg.classList.add(SHOWING_CLASS);
  }
};
rightBtn.addEventListener("click", slide);
leftBtn.addEventListener("click", handleSlide);
dotBtns.forEach((dotBtn) => dotBtn.addEventListener("click", handleDotBtns));
setInterval(slide, 5000);
