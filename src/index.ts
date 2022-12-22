import "./global.scss";

const btnRight = document.querySelector("#btnRight") as HTMLElement;
const btnLeft = document.querySelector("#btnLeft") as HTMLElement;
const wrapper = document.querySelector(".wrapper") as HTMLElement;

///change pages with scroll and click
btnRight.addEventListener("click", () => {
  wrapper.classList.toggle("move");
});

btnLeft.addEventListener("click", () => {
  wrapper.classList.toggle("move");
});

document.addEventListener("wheel", (e) => {
  e.deltaY === 100
    ? wrapper?.classList.add("move")
    : wrapper?.classList.remove("move");
});
