const menu = document.querySelector("[data-menu]");
const menuBtn = document.querySelector("[data-menu-btn]");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("is-open");
});
