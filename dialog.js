console.log("JavaScript er loaded!");

const openButtons = document.querySelectorAll("button[data-modal]");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".modal").style.display = "none";
  });
});

/*********den der der lukker modal via klik udenfor modal */
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
