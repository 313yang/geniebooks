const opensignUpBtn = document.getElementById("sign_up");
const opensignInBtn = document.getElementById("sign_in");
const openUserBtn = document.getElementById("User");

const signUpModal = document.querySelector(".signUpModal");
const signInModal = document.querySelector(".signInModal");

const overlayUp = signUpModal.querySelector(".modal__overlay");
const overlayIn = signInModal.querySelector(".modal__overlay");

const closeBtnUp = signUpModal.querySelector("button");
const closeBtnIn = signInModal.querySelector("button");

const openSignUpModal = () => {
  signUpModal.classList.remove("hidden");
};
const openSignInModal = () => {
  signInModal.classList.remove("hidden");
};

const closeModalIn = () => {
  signInModal.classList.add("hidden");
};
const closeModalUp = () => {
  signUpModal.classList.add("hidden");
};
// When you click bacground , modal hidden
overlayUp.addEventListener("click", closeModalUp);
overlayIn.addEventListener("click", closeModalIn);

// When you click button , modal hidden
closeBtnUp.addEventListener("click", closeModalUp);
closeBtnIn.addEventListener("click", closeModalIn);

opensignUpBtn.addEventListener("click", openSignUpModal);
opensignInBtn.addEventListener("click", openSignInModal);
openUserBtn.addEventListener("click", openSignInModal);
