const dashBtn = document.querySelector(".button-dash");
const yearlyText = document.querySelector("#yearly-text");
const monthlyText = document.querySelector("#monthly-text");
const cardPlan = document.querySelectorAll(".card-plan");
const cardPlanYear = document.querySelectorAll(".card-plan.year");

dashBtn.addEventListener("click", () => {
  dashBtn.classList.toggle("on");

  if (dashBtn.classList.contains("on")) {
    yearlyText.style.color = "#4c4d5f";
    monthlyText.style.color = "#4c4d5f65";

    cardPlan.forEach((cardPlan) => {
      cardPlan.style.display = "none";
    });

    cardPlanYear.forEach((cardPlanYear) => {
      cardPlanYear.style.display = "flex";
    });
  } else {
    yearlyText.style.color = "#4c4d5f65";
    monthlyText.style.color = "#4c4d5f";

    cardPlan.forEach((cardPlan) => {
      cardPlan.style.display = "flex";
    });

    cardPlanYear.forEach((cardPlanYear) => {
      cardPlanYear.style.display = "none";
    });
  }
});
