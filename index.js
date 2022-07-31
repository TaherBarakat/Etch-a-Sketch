const container = document.querySelector(".container");

for (let i = 1; i <= 10000; i++) {
   const pixel = document.createElement("div");
   pixel.classList.add("pixel");
   container.append(pixel);
   pixel.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = "black")
   );
}

console.log(container);
