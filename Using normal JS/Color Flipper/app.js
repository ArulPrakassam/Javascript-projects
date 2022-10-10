const colors = [
  "rgb(148, 0, 211)",
  "rgb(75, 0, 130)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 127, 0)",
  "rgb(255, 0 , 0)",
];
const color_names = [
  "Violet",
  "Indigo",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Red",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const h1 = document.querySelector(".color_names");
btn.addEventListener("click", function () {
  const number = numberGenerator();
  document.body.style.backgroundColor = colors[number];
  h1.textContent = color_names[number];
  color.textContent = colors[number];
});
//generating the random number between 0 and 6
function numberGenerator() {
  return Math.floor(Math.random() * colors.length);
}
