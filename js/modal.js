const modalDiv = document.querySelector(".modal-background");
const modalDismissBtn = document.querySelector("#modal-dismiss-btn");
const modalShowBtn = document.querySelector("#modal-show-btn");

modalDismissBtn.addEventListener("click", () => {
  modalDiv.classList.add("d-none");
});

modalShowBtn.addEventListener("click", () => {
  modalDiv.classList.remove("d-none");
});
