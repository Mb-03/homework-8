const buyBtn = document.querySelector("#buy-btn");
const closeBtn = document.querySelector("#close-btn");
const thanksBtn = document.querySelector("#thanks-btn");
const popUp = document.querySelector("#pop-up");
const message = document.querySelector("#welcome");

function handleBuy() {
  popUp.classList.remove("display-none");
  message.textContent = "";
}

buyBtn.addEventListener("click", handleBuy);

function handleClose() {
  popUp.classList.add("display-none");
}

closeBtn.addEventListener("click", handleClose);

function handleThanks() {
  popUp.classList.add("display-none");
  message.textContent = "You are Welcome";
}

thanksBtn.addEventListener("click", handleThanks);
