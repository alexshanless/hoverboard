const container = document.getElementById("container");
const colors = ["green", "purple", "blue", "yellow", "orange", "red", "white"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color} 0 0 10px`;
}

function removeColor(element) {}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
