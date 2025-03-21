const grid = document.getElementById("grid");

for (let i = 0; i < 16 * 16; i++) {
  const newDiv = document.createElement("div");
  //   newDiv.textContent = `Div ${i + 1}`;
  //   newDiv.style.border = "1px solid black";
  //   newDiv.style.padding = "10px";
  //   newDiv.style.margin = "5px";
  newDiv.textContent = i + 1;
  newDiv.classList.add("grid-item");

  //Add hover effect

  newDiv.addEventListener("mouseover", () => {
    newDiv.style.backgroundColor = "black";
  });

  grid.appendChild(newDiv);
}
