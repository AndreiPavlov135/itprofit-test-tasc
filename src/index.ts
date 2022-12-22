import "./global.scss";

const btnRight = document.querySelector("#btnRight") as HTMLButtonElement;
const btnLeft = document.querySelector("#btnLeft") as HTMLButtonElement;
const wrapper = document.querySelector(".wrapper") as HTMLElement;
const clothesPage = document.querySelector(".clothes-page") as HTMLElement;

///change pages with scroll, click and smooth change bg-color

btnRight.addEventListener("click", () => {
  wrapper.classList.toggle("move");
  clothesPage.classList.toggle("change-bg");
});

btnLeft.addEventListener("click", () => {
  wrapper.classList.toggle("move");
  clothesPage.classList.toggle("change-bg");
});

document.addEventListener("wheel", (e) => {
  if (e.deltaY === 100) {
    wrapper.classList.add("move");
    clothesPage.classList.toggle("change-bg");
  } else {
    wrapper.classList.remove("move");
    clothesPage.classList.toggle("change-bg");
  }
});
