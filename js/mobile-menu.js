const hamburguerMenu = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

hamburguerMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});
