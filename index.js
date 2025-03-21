const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.textContent = `Div ${i + 1}`;
  newDiv.style.border = "1px solid black";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "5px";

  container.appendChild(newDiv);
}
