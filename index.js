const grid = document.getElementById("grid");
const button = document.getElementById("btn");

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

    //Add hover effect
    div.addEventListener("mouseover", () => {
      div.style.opacity = "50%";
      div.style.backgroundColor = "lightgray";
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
