import "./global.scss";
import Circle from "./circle";

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
    clothesPage.classList.add("change-bg");
  } else {
    wrapper.classList.remove("move");
    clothesPage.classList.remove("change-bg");
  }
});

/////create circles on pages//////////////////

const circle1 = new Circle();
circle1.creatCircle(100, 650, "200", "200");
circle1.creatCircle(1400, 600, "300", "300");
circle1.creatCircle(400, 100, "250", "250", 2);
circle1.creatCircle(1850, 100, "200", "200");
circle1.creatCircle(2600, 25, "150", "150", 2);
circle1.creatCircle(3000, 600, "200", "200", 2);
