const productMouseClick = document.querySelector(".product-dropdown");
const templateMouseClick = document.querySelector(".template-dropdown");
const productDropdown = document.querySelector(".grid-dropdown-product");
const templateDropdown = document.querySelector(".grid-dropdown-template");
const arrowDown = document.querySelector(".action.product");

productMouseClick.addEventListener("click", () => {
  productDropdown.classList.toggle("show-product");
  let productIcon = document.querySelector(".product-icon");

  if (productDropdown.classList.contains("show-product")) {
    productIcon.src = "../assets/keyboard-arrow-up-rounded.svg";
    productIcon.alt = "arrow-up";
  } else {
    productIcon.src = "../assets/keyboard-arrow-down-rounded.svg";
    productIcon.alt = "arrow-down";
  }
});

templateMouseClick.addEventListener("click", () => {
  templateDropdown.classList.toggle("show-template");
  let templateIcon = document.querySelector(".template-icon");

  if (templateDropdown.classList.contains("show-template")) {
    templateIcon.src = "../assets/keyboard-arrow-up-rounded.svg";
    templateIcon.alt = "arrow-up";
  } else {
    templateIcon.src = "../assets/keyboard-arrow-down-rounded.svg";
    templateIcon.alt = "arrow-down";
  }
});
