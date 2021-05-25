const p = document.querySelectorAll(".notice__column p");
const notice = document.querySelector(".notice__column:last-child");
let counter = 1;
const size = p[0].clientHeight;

notice.style.transform = "translateY(" + -size * counter + "px";

const noticeSlide = () => {
  if (counter >= p.length - 1) return;
  notice.style.transition = "transform 0.4s ease-in-out";
  counter++;
  notice.style.transform = "translateY(" + -size * counter + "px";
};

notice.addEventListener("transitionend", () => {
  if (p[counter].id === "lastClone") {
    notice.style.transition = "none";
    counter = p.length - 2;
    notice.style.transform = "translateY(" + -size * counter + "px";
  } else if (p[counter].id === "firstClone") {
    notice.style.transition = "none";
    counter = p.length - counter;
    notice.style.transform = "translateY(" + -size * counter + "px";
  }
});
setInterval(noticeSlide, 3000);
