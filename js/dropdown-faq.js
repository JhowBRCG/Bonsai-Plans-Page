const faqOne = document.querySelector(".row-wrapper.dropdown-one");
const faqTwo = document.querySelector(".row-wrapper.dropdown-two");
const faqThree = document.querySelector(".row-wrapper.dropdown-three");
const faqFour = document.querySelector(".row-wrapper.dropdown-four");

const faqTextOne = document.querySelector(".text.show-one");
const faqTextTwo = document.querySelector(".text.show-two");
const faqTextThree = document.querySelector(".text.show-three");
const faqTextFour = document.querySelector(".text.show-four");

faqOne.addEventListener("click", () => {
  let faqArrowIcon = document.querySelector(".faq-arrow-one");
  faqTextOne.classList.toggle("show");

  if (faqTextOne.classList.contains("show")) {
    faqArrowIcon.src = "../assets/keyboard-arrow-up-rounded.svg";
  } else {
    faqArrowIcon.src = "../assets/keyboard-arrow-down-rounded.svg";
  }
});

faqTwo.addEventListener("click", () => {
  let faqArrowIcon = document.querySelector(".faq-arrow-two");
  faqTextTwo.classList.toggle("show");

  if (faqTextTwo.classList.contains("show")) {
    faqArrowIcon.src = "../assets/keyboard-arrow-up-rounded.svg";
  } else {
    faqArrowIcon.src = "../assets/keyboard-arrow-down-rounded.svg";
  }
});

faqThree.addEventListener("click", () => {
  let faqArrowIcon = document.querySelector(".faq-arrow-three");
  faqTextThree.classList.toggle("show");

  if (faqTextThree.classList.contains("show")) {
    faqArrowIcon.src = "../assets/keyboard-arrow-up-rounded.svg";
  } else {
    faqArrowIcon.src = "../assets/keyboard-arrow-down-rounded.svg";
  }
});

faqFour.addEventListener("click", () => {
  let faqArrowIcon = document.querySelector(".faq-arrow-four");
  faqTextFour.classList.toggle("show");

  if (faqTextFour.classList.contains("show")) {
    faqArrowIcon.src = "../assets/keyboard-arrow-up-rounded.svg";
  } else {
    faqArrowIcon.src = "../assets/keyboard-arrow-down-rounded.svg";
  }
});
