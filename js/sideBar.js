const slideBtn = document.querySelector(".header__icon");
const sideMenu = document.querySelector(".sideMenu");

const handleSliding = () => {
  sideMenu.classList.remove("hidden");
  sideMenu.classList.toggle("slidingMenu");
};

slideBtn.addEventListener("click", handleSliding);
