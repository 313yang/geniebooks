const firstSlide = document.querySelector(".slider__item:first-child");
const lastSlide = document.querySelector(".slider__item:last-child");
const leftBtn = document.querySelector(".js-leftBtn");
const rightBtn = document.querySelector(".js-rightBtn");

const SHOWING_CLASS = "showing";

//right btn click
const slide =() =>{
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if(currentSlide){
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide){
      nextSlide.classList.add(SHOWING_CLASS);
    } else{
      firstSlide.classList.add(SHOWING_CLASS);
    }
  }
};
// left btn click
const handleSlide = () =>{
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if(currentSlide){
    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if(prevSlide){
      prevSlide.classList.add(SHOWING_CLASS);
    } else{
      lastSlide.classList.add(SHOWING_CLASS);
    }
  }

};

function init(){
  rightBtn.addEventListener("click", slide);
  leftBtn.addEventListener("click", handleSlide);
  setInterval(slide, 5000);
};
init();