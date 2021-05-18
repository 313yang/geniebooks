// Weekly meun tab js
const btns = document.querySelectorAll(".weeklyBtn");
const tabContent = document.querySelectorAll(".js-weekly");

const CLICK_BTN = "changeBtn";
const SHOWING_CL = "weekly-showing";

const handleTab = (btn) => {
  const btnTarget = btn.currentTarget;
  const target = btnTarget.dataset.tab;
  btns.forEach((btn) => {
    btn.classList.remove(CLICK_BTN);
  });

  tabContent.forEach((tab) => {
    tab.classList.remove(SHOWING_CL);
  });
  // All of the btn and content hide then currnet target showing
  document.getElementById(target).classList.add(SHOWING_CL);
  btnTarget.classList.add(CLICK_BTN);
};

btns.forEach((btn) => {
  btn.addEventListener("click", handleTab);
});
