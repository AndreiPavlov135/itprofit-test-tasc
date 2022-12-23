class Circle {
  creatCircle(
    startX: number,
    startY: number,
    width: string,
    height: string,
    zIndex?: number
  ): void {
    const wrapper = document.querySelector(".wrapper") as HTMLElement;
    const circle: HTMLElement = document.createElement("div");

    circle.style.width = `${width}px`;
    circle.style.height = `${height}px`;
    circle.style.zIndex = `${zIndex}`;

    startX < 1440
      ? circle.classList.add("circle-amcodor")
      : circle.classList.add("circle-clothes");

    wrapper.appendChild(circle);

    let X = startX;
    let Y = startY;
    let mouse = { x: 0, y: 0 };
    document.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    function move() {
      startX > window.innerWidth
        ? (X += ((mouse.x - X + window.innerWidth) * 0.1) / 20)
        : (X += ((mouse.x - X) * 0.1) / 20);

      Y += ((mouse.y - Y) * 0.1) / 20;
      if (X > startX + 50) X = startX + 50;
      if (X < startX - 50) X = startX - 50;
      if (Y > startY + 50) Y = startY + 50;
      if (Y < startY - 50) Y = startY - 50;
      circle.style.transform = `matrix(1, 0, 0, 1, ${X}, ${Y})`;
      requestAnimationFrame(move);
    }
    move();
  }
}

export default Circle;
