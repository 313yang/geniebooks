const slideBtn = document.querySelector(".fa-stream");
const sideMenu = document.querySelector(".sideMenu");

const handleSliding = () => {
  slideBtn.classList.toggle("fa-times");
  sideMenu.classList.remove("hidden");
  sideMenu.classList.toggle("slidingMenu");
};

slideBtn.addEventListener("click", handleSliding);
