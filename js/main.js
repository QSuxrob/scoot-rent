const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const link = document.querySelector(".header__link");
const button = document.querySelector(".faqs__item-button-active");
const item = document.querySelector(".faqs__list-item-active")
const text = document.querySelector(".faqs__item-toggle-text-active");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--opened");

  if (!nav.classList.contains("header__nav--opened")) {
    nav.classList.add("header__nav--opened");
    link.classList.toggle("header__link--opened");
  } else if (!nav.classList.contains("header__nav--closing")) {
    nav.classList.add("header__nav--closing");
  }
})

nav.addEventListener("animationend", (evt) => {
  if (evt.animationName === "header-closing") {
    nav.classList.remove("header__nav--opened");
    nav.classList.remove("header__nav--closing");
    link.classList.remove("header__link--opened");
  }
})

item.addEventListener("click", () => {
  text.classList.toggle("faqs__item--opened")
  button.classList.toggle("faqs__item-button-active--opening")
})