const grid = document.getElementById("grid");
const button = document.getElementById("btn");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}), ${g}, ${b}`;
}

function darkenColor(color, darknessLevel) {
  if (!color || !color.includes("rgb")) return "rgb(0,0,0)";
  const rgbValues = color.match(/\d+/g).map(Number);
  const factor = 0.1 * darknessLevel; //Darken by 10% each time
  const darkenedColor = rgbValues.map((value) =>
    Math.max(0, value - value * factor)
  );
  return `rgb(${darkenedColor[0]}, ${darkenedColor[1]}, ${darkenedColor[2]})`;
}

function createGrid(size) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const squareSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.textContent = `${i + 1}`;
    div.style.width = `${squareSize}vw`;
    div.style.height = `${squareSize}vh`;
    div.dataset.darkness = 0;
    div.dataset.originalColor = getRandomColor();

    //Add hover effect
    div.addEventListener("mouseover", () => {
      let darkness = parseInt(div.dataset.darkness);

      if (darkness === 0) {
        div.style.backgroundColor = div.dataset.originalColor;
      }
      if (darkness < 10) {
        darkness += 1;
        div.dataset.darkness = darkness;
        // const shade = 255 - darkness * 25.5;
        div.style.backgroundColor = darkenColor(
          div.dataset.originalColor,
          darkness
        );
      }
      //   div.style.opacity = "50%";
      //   div.style.backgroundColor = getRandomColor();
    });

    grid.appendChild(div);
  }
}

function setGridSize() {
  let size = prompt("Enter the number of squares per row (max 100): ");
  size = parseInt(size);

  if (!size || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(size);
}

button.addEventListener("click", () => {
  console.log("button clicked");
  setGridSize();
});

createGrid(16);
