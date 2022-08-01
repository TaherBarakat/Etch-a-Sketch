const container = document.querySelector(".container");
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const large = document.querySelector("#large");
const eraser = document.querySelector("#eraser");
const clean = document.querySelector("#clean");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

let pixelSize = 32 * 32;

for (let i = 1; i <= pixelSize; i++) {
   const pixel = document.createElement("div");
   pixel.classList.add("pixel");
   container.append(pixel);
   pixel.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = "black")
   );
}
let pixel = document.querySelectorAll(".pixel");

small.addEventListener("click", function () {
   console.log(this);
   pixelSize = 900;
   pixel.forEach((x) => {
      x.style.height = "3%";
      x.style.width = "3%";
      x.style.backgroundColor = "white";
   });
});

medium.addEventListener("click", function () {
   pixelSize = 500;
   pixel.forEach((x) => {
      x.style.height = "5%";
      x.style.width = "5%";
      x.style.backgroundColor = "white";
   });
});

large.addEventListener("click", function () {
   pixelSize = 100;
   pixel.forEach((x) => {
      x.style.height = "10%";
      x.style.width = "10%";
      x.style.backgroundColor = "white";
   });
});
eraser.addEventListener("click", function () {
   pixel.forEach((x) =>
      x.addEventListener(
         "mouseover",
         (e) => (e.target.style.backgroundColor = "white")
      )
   );
});
clean.addEventListener("click", () =>
   pixel.forEach((x) => (x.style.backgroundColor = "white"))
);
black.addEventListener("click", () =>
   pixel.forEach((x) =>
      x.addEventListener(
         "mouseover",
         (e) => (e.target.style.backgroundColor = "black")
      )
   )
);
function getRandomColor() {
   x = Math.random() * 300;
   y = Math.random() * 300;
   z = Math.random() * 300;

   return `rgba(${Math.floor(x)},${Math.floor(y)},${Math.floor(z)})`;
}
rainbow.addEventListener("click", function () {
   pixel.forEach((x) =>
      x.addEventListener(
         "mouseover",
         (e) => (e.target.style.backgroundColor = getRandomColor())
      )
   );
});
